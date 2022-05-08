import {User} from './User.js'

export const Users = (data) => {
    const container = document.createElement('div');
    container.classList.add('users-container')
    const df = new DocumentFragment();

    data.forEach(post => {
        df.appendChild(User(post));
    })

    container.appendChild(df);

    return container;
}