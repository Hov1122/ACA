// const t = (n) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if (n > 10)
//                 res(n);
//             else 
//                 rej(n);
//         }, 2000)
//     })
// }

// t(9)
// .then((data) => {
//     console.log(1, data);
// })
// .then((data) => {
//     console.log(2, data);
// })
// .catch((e) => {
//     console.log(3, e);
//     throw new Error();
// })
// .then((e) => {
//     console.log(4, e);
// })
// .catch((data) => {
//     console.log(5, data);
// })



// class CustomPromise {
//     constructor(cb) {
//         this.thenCbs;
//         this.catchCbs;

//         cb(this.resolve, this.reject);
//     }

//     resolve() {
//         console.log(this);
//         this.thenCbs();
//     }
    
//     reject() {
//         console.log("reject");
//     }

//     then = (cb) => {
//         this.thenCbs = cb;
//         this.thenCbs();
//     }

//     catch(cb) {
//         this.catchCbs= cb;
//     }
// }

// const p = new CustomPromise((res, rej) => {
//     setTimeout(() => {
//         //res();

//     }, 1000);
// })

// p.then((e) => {
//     console.log(this);
//     console.log("1", e);
// })


const getData = (url, {method = "GET", headers = {}, body} = {}) => {
    const URL = "https://dog.ceo/api/";

    return fetch(`${URL}${url}`, {
        method,
        headers,
        body
    })
        .then(response => response.json())
        .catch((e) => {
            alert(e);
        })
}

const Select = (data) => {
    const container = document.createElement("div");
    container.classList.add('container');
    const select = document.createElement('select');
    const btn = document.createElement('button');
    btn.innerText = "Refresh";
    btn.classList.add('refresh');
    select.classList.add("dog-breeds");
    
    data.forEach(breed => {
        const option = document.createElement('option');
        option.classList.add("breed-name");
        option.innerText = breed;
        select.appendChild(option);
    });

    container.appendChild(select);
    container.appendChild(btn);
    return container
}

const showImage = (img, root) => {
    const select = document.querySelector('select');

    select.addEventListener('change', async (e) => {     
        const data = await getData(`breed/${e.target.value}/images/random`);
        img.src = data.message;
        root.appendChild(img);
    })
}

async function App() {
    const root = document.getElementById("root");
    
    const data = await getData("breeds/list/all");
    const img = document.createElement('img');

    
    img.classList.add("dog-img");
    document.querySelector('.img').appendChild(img);
    const dogNames = Object.keys(data.message);

    const tmp = await getData(`breed/${dogNames[0]}/images/random`);

    img.src = tmp.message;
    
    root.appendChild(Select(dogNames));
    
    btn.addEventListener('click', (e) => {
        document.querySelector('.dog-breeds');
    })

    showImage(img, document.querySelector(".img"));

}

App();

