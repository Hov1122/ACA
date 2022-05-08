export const User = ({id, name}) => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');

    const nameElement = document.createElement('button');
    nameElement.classList.add('user-name');

    nameElement.innerHTML = name;
    nameElement.setAttribute('data-id', id);

    userDiv.append(nameElement);

    return userDiv;
}