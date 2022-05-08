import {Photo} from './Photo.js'

export const Photos = (data, id) => {
    let container;

    if (document.getElementsByClassName('photos-container').length == 0) {
        container = document.createElement('div');
        container.classList.add('photos-container')
    }
    else
        container = document.querySelector('.photos-container');

    const df = new DocumentFragment();

    data.forEach(photo => {
        // console.log(photo)
        // console.log(photo['albumId'] === id)
        if (photo['albumId'] == id)
            df.appendChild(Photo(photo));
    })
    container.innerHTML = '';
    container.appendChild(df);

    return container;
}