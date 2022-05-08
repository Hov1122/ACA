//import {Items} from './Items.js'
import {fetchData} from '../helpers.js'
// import {Posts} from "./Posts.js"
// import {Users} from './Users.js'
import {Albums} from './Albums.js'

export const App = async () => {
    const state = {
        //nums: []
        posts: [],
        users: [],
        albums: [],
    };

    const container = document.createElement('div');
    container.setAttribute("component-name", "main-container");

    const render = () => {
        // tarmancum a (jnjum a taza avelacnum)
        //container.innerHTML = "";
        //container.append(Posts(state.posts));
        container.append(Albums(state.albums));
        return container;
        //container.appendChild(Items(state.nums));
    }

    return fetchData('/albums')
        .then(response => {
            state.albums = response;
            return render();
        })
}