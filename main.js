const { app, BrowserWindow } = require('electron');

function createWindow() {
    let win = new BrowserWindow(
        {
            width: 800,
            height: 800
        }
    );

    
    //win.webContents.loadURL('https://www.google.com/');
    win.webContents.loadURL('http://localhost:8080/');
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);