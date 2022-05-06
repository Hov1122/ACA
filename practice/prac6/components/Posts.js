import {Post} from "./Post.js"

export const Posts = (data) => {
    const container = document.createElement('div');
    container.classList.add('posts-container')
    const df = new DocumentFragment();

    data.forEach(post => {
        df.appendChild(Post(post));
    })

    container.appendChild(df);

    return container;
}