'use strict';

const electron = require('electron');
const app = electron.app;  // Control application life
const ipcMain = electron.ipcMain;
const BrowserWindow = electron.BrowserWindow;  // Native browser window

// Keep a global reference of the window object
let mainWindow = null;
let egretArg = null;
let testEvent = null;
// Quit when all windows are closed.
app.on('window-all-closed', () => {
    app.quit();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 675,
        height: 400,
        useContentSize: true,
        resizable: false,
        textAreasAreResizable: false,
        webPreferences: { devTools: true }
    });

    mainWindow.loadURL(`file://${__dirname}/egretRender/index.html`);
    // mainWindow.webContents.openDevTools();
    ipcMain.on('egretReady', (event, arg) => {
        egretArg = arg;
        if(testEvent){
            testEvent.sender.send('startTest', egretArg)
        }
        // console.log('egretReady')

    });
    ipcMain.on('testReady', (event,arg) => {
        testEvent = event;
        if(egretArg){
            testEvent.sender.send('startTest', egretArg)
        }
        // console.log('testReady22',egretArg.tt1)
        // event.sender.send('startTest', egretArg)
    });
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
