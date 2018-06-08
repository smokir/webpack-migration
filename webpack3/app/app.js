const library = require('../dist/library');

const extensionA = require('../dist/extension-a');
const extensionB = require('../dist/extension-b');

extensionA(library);
extensionB(library);

window.addEventListener('DOMContentLoaded', () => {
    const rootDiv = document.getElementById('root');
    rootDiv.textContent = library.doSomething();
});
