const { app, BrowserWindow } = require('electron');

// main process
// const { ipcMain } = require('electron');

// ipcMain.on('anything-asynchronous', (event, arg) => {
// //execute tasks on behalf of renderer process 
//     console.log(arg) // prints "ping"
// })




// try {
// 	require('electron-reloader')(module, {
//     watchRenderer: true
//   })
// } catch (_) { console.log('Error'); }

// require('electron-reload')(__dirname, {
//     electron: path.join(__dirname, 'node_modules', 'electron'),
//     hardResetMethod: 'exit'
// });

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  // and load the index.html of the app.
  win.loadFile('index.html');
}

app.on('ready', createWindow);