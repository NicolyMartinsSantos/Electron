const { app, BrowserWindow } = require('electron');

let janelaPrincipal;

app.on('ready', () => {
   janelaPrincipal = new BrowserWindow({
     width: 500,
     height: 500,
     resizable: false,
   });
   
   janelaPrincipal.loadURL(`file://${__dirname}/index.html`);
});