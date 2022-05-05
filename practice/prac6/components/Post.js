export const Post = ({title, body}) => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const titleElement = document.createElement('h3');
    titleElement.classList.add('title');
    const bodyElement = document.createElement('p');

    titleElement.innerHTML = title;
    bodyElement.innerHTML = body;

    postDiv.append(titleElement, bodyElement);

    return postDiv;
}