// console.log('index');

// import { sum } from './utils.js'

// window.addEventListener('load', () => {
// 	console.log("load");
// })

// console.log(sum(2, 3));

// import a, { i } from './utils.js'; // arandzin chenq kara grenq


import { App } from './components/App.js'

window.addEventListener('load', init);

function init() {
	const root = document.querySelector('#root');
	root.appendChild(App());
}