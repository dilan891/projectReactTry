import { app, BrowserWindow, dialog } from 'electron'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs';
import path from 'node:path';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import kill from 'tree-kill';
import { ChildProcessWithoutNullStreams, spawn } from 'node:child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, '..')

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST

let win: BrowserWindow | null
let child: ChildProcessWithoutNullStreams;

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
    },
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
    //devtools
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));

    win.webContents.openDevTools()
    // spawn java child process running backend jar
    const jarPath = path.join(process.env.APP_ROOT, 'build', 'electron-react-java.jar')
    child = spawn('java', ['-jar', jarPath]);
    console.log("child process started ", child.pid)
    console.log("correriendo en modo dev")
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(RENDERER_DIST, 'index.html'))
    // spawn java child process running backend jar
    const jarPath = path.join(app.getAppPath(),  '..', '..','build', 'electron-react-java.jar')
    if(!fs.existsSync(jarPath)){
      //elmina las ruta antes de la carpeta de la app
      //pica la ruta a partir de a la mitad
      const splitroot = app.getPath("exe").split(path.sep).slice(0, -2).join(path.sep)
      const secondhalf = jarPath.split(splitroot)[1]
      //dialog.showErrorBox("Error", "No se encontro el archivo " + splitroot)
      dialog.showErrorBox("Error", "No se encontro el archivo " + secondhalf)
      return
    }
    child = spawn('java', ['-jar', jarPath]);
  }

}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (child && child.pid !== undefined) {
    console.log("killing child process")
    console.log(child.pid)
    kill(child.pid, 'SIGKILL', (err) => {
      if (err) {
        console.error("Error al matar el proceso hijo:", err);
      } else {
        console.log("Proceso hijo y sus procesos secundarios eliminados");
      }
    });
    console.log("child process killed")
    //salir de la aplicacion
    if (process.platform !== 'darwin') {
      setTimeout(() => {
        app.quit()
        win = null
      }, 1000);
    }
  }
  else {
    if (process.platform !== 'darwin') {
      app.quit()
      win = null
    }
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.whenReady().then(createWindow)
