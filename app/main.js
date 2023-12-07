const {app, BrowserWindow}= require ('electron');
let mainWindow = null;

app.on('ready',()=>{
    mainWindow = new BrowserWindow()
})