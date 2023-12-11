
const { contextBridge } = require('electron')
const marked = require('marked');

contextBridge.exposeInMainWorld('marked', {
    mark: ()=> marked.mark()
  });