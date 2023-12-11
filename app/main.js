const {app, BrowserWindow}= require ('electron');
//const path = require("path");

let mainWindow = null

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        webPreferences: {
            show: false,
            contextIsolation: false,
            nodeIntegration: true,
        //     nodeIntegrationInWorker:true,
        //     enableRemoteModule: true,
        //    preload: path.join(__dirname, 'preload.js')
        }
    });
    mainWindow.loadFile(__dirname + '/index.html');
    mainWindow.once('ready-to-show',()=>{
        mainWindow.show();
       // mainWindow.webContents.openDevTools();
    })
    mainWindow.on('closed',()=>{
        mainWindow =null;
    });
})