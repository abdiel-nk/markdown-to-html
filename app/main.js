const {app, BrowserWindow}= require ('electron');
const path = require("path");

let mainWindow = null

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, 'renderer.js')
        }
    });
    mainWindow.loadFile(__dirname + '/index.html');
    mainWindow.on('closed',()=>{
        mainWindow =null;
    });
})