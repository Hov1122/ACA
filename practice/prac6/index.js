// console.log('index');

// import { sum } from './utils.js'

// window.addEventListener('load', () => {
// 	console.log("load");
// })

// console.log(sum(2, 3));

// import a, { i } from './utils.js'; // arandzin chenq kara grenq


import { App } from './components/App.js'
import { showAlbums } from './helpers.js'

window.addEventListener('load', init);

async function init() {
	const root = document.querySelector('#root');
	const data = await App();
	root.append(data);

	const btns = document.querySelectorAll("#root div .albums-container .album .album-title");
	for (let i = 0; i < btns.length; i++)
		btns[i].addEventListener('click', showAlbums)
}