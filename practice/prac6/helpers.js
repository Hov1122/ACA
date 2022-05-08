import { BASE_URL } from "./constants.js";
import {Albums} from "./components/albums.js"
import {Photos} from "./components/Photos.js"

export const fetchData = async(url) => {
    const newUrl = url.startsWith('/') ? url.substring(1) : url;

    try {
        const response = await fetch(`${BASE_URL}${newUrl}`);

        return response.json();
    } catch(e) {
        alert(e);
    }
}

export const showAlbums = async (e) => {

    document.querySelector('.albums-container').style.display = "none";
    if (document.getElementsByClassName('photos-container').length > 0)
        document.querySelector('.photos-container').style.display = "block";

    const root = document.querySelector('[component-name="main-container"]');
    const container = await fetchData(`/photos`)
        .then(r => Photos(r, e.target.dataset.id));
    root.append(container);
}

export const back = (e) => {
    document.querySelector('.albums-container').style.display = "block";
    document.querySelector('.photos-container').innerHTML = '';
}

