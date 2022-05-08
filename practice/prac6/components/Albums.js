import {Album} from './Album.js'

export const Albums = (data) => {
    const container = document.createElement('div');
    container.classList.add('albums-container')
    const df = new DocumentFragment();

    data.forEach(post => {
        df.appendChild(Album(post));
    })

   container.appendChild(df);

    return container;
}