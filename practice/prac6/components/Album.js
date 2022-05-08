export const Album = ({id, title}) => {
    const albumDuv = document.createElement('div');
    albumDuv.classList.add('album');

    const nameElement = document.createElement('button');
    nameElement.classList.add('album-title');

    nameElement.innerHTML = title;
    nameElement.setAttribute('data-id', id);

    albumDuv.append(nameElement);

    return albumDuv;
}