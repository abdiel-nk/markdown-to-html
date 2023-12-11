//const { ipcRenderer } = require('electron')
//const marked = require('marked')
const markdownView = document.querySelector('#markdown');
const htmlView = document.querySelector('#html');

const rendererToMarkdown = (markdown)=>{
    htmlView.innerHTML = mark(markdown, {
        sanitize: true
    });
}

markdownView.addEventListener('keyup', e =>{
  const currentContext = e.target.value;
  rendererToMarkdown(currentContext)
})