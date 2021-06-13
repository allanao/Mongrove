import React from 'react';
const { app, BrowserWindow } = require('electron');
const remote = electron.remote;
const { BrowserWindow, diaglog, Menu } = remote;

// index.js is the entrypoint of webpack for the main process
// this file contains logic for opening an electron window and managing the application state


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
  const win = new BrowserWindow({
    // specifies the browser width and height
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    }
  });

  // and load the index.html of the app.
  // win.loadFile('index.html');

  // load the index.html from a url
  win.loadURL('http://localhost:3000');

  // Open the DevTools.
  // win.webContents.openDevTools();
};

// app.on('ready', createWindow);

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.

// The event is triggered when all BrowserWindows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});