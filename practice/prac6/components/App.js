//import {Items} from './Items.js'
import {fetchData} from '../helpers.js'
import {Posts} from "./Posts.js"

export const App = () => {
    const state = {
        //nums: []
        posts: [],
    };

    window.state = state;

    const container = document.createElement('div');
    container.setAttribute("component-name", "main-container");
    
  //  container.innerHtml = "Hello";

    const render = () => {
        // tarmancum a (jnjum a taza avelacnum)
        container.innerHTML = "";
        container.appendChild(Posts(state.posts));
        //container.appendChild(Items(state.nums));
    }

    fetchData('/posts')
        .then(response => {
            console.log(response)
            state.posts = response;
            render();
        })

    render();

    // setInterval(() => {
    //     state.nums.push(Math.floor(Math.random() * 1000));
    //     render();
    // }, 3000)

    return container;
}