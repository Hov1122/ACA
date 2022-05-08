import {back} from "../helpers.js";

export const Photo = ({title, url}) => {
    const photoDiv = document.createElement('div');
    photoDiv.classList.add('photo');

    const nameElement = document.createElement('h3');
    nameElement.classList.add('photo-title');
    nameElement.innerHTML = title;

    const img = document.createElement('img');
    img.src = url;

    const backBtn = document.createElement('button');
    backBtn.classList.add('back-btn');
    backBtn.innerHTML = "back";
    backBtn.addEventListener('click', back);

    photoDiv.append(nameElement, img, backBtn);

    return photoDiv;
}