let doButton = document.querySelector(`#do`);
let eatButton = document.querySelector(`#eat`);
let seeButton = document.querySelector(`#see`);
let learnButton = document.querySelector(`#learn`);
let askButton = document.querySelector(`#ask`);
let dogButton = document.querySelector(`#dog`);
let container = document.querySelector(`#container`)

let PORT = 5500;

const addCard = async (src) => {
    const card = document.createElement('div');
    
    if (typeof src.url !== `undefined`) {
        const temp = document.createElement('div')
        temp.innerHTML = await `<img width="350" height="350" src="${src.url}" alt="">`
        card.insertAdjacentElement(`afterbegin`, temp)
    }
    if (typeof src.gif !== `undefined`) {
        const temp = document.createElement('div')
        temp.innerHTML = await `<iframe src="${src.gif}" width="500" height="500" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`
        card.insertAdjacentElement(`afterbegin`, temp)
    }
    if (typeof src.title !== `undefined` && typeof src.question !== `undefined` && typeof src.answer !== `undefined`) {
        const temp = document.createElement('div')
        temp.innerHTML = await `<p class="text">${src.title.toUpperCase()}</p>
        <p class="text">${src.question}</p>
        <p class="text">Answer (hover to show ↓):</p>
        <p class="text answer">${src.answer}</p>`
        card.insertAdjacentElement(`afterbegin`, temp)
    }
    if (typeof src.text !== `undefined`) {
        const temp = document.createElement('div')
        temp.innerHTML = await `<p class="text">${src.text}</p>`
        card.insertAdjacentElement(`afterbegin`, temp)
    }
    if (typeof src.fact !== `undefined`) {
        const temp = document.createElement('div')
        temp.innerHTML = await `<p class="text">${src.fact}</p>`
        card.insertAdjacentElement(`afterbegin`, temp)
    }

    container.insertAdjacentElement(`afterbegin`, card)
}

doButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:${PORT}/do/`)
    .then((res) => {
        console.log(res.data)
        addCard(res.data)
    })
    .catch(err => console.log(err))
});


eatButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:${PORT}/eat/`)
    .then((res) => {
        console.log(res.data)
        addCard(res.data)
    })
    .catch(err => console.log(err))
});


seeButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:${PORT}/see/`)
    .then((res) => {
        console.log(res.data)
        addCard(res.data)
    })
    .catch(err => console.log(err))
});


learnButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:${PORT}/learn/`)
    .then((res) => {
        console.log(res.data)
        addCard(res.data)
    })
    .catch(err => console.log(err))
});


askButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:${PORT}/ask/`)
    .then((res) => {
        console.log(res.data)
        addCard(res.data)
    })
    .catch(err => console.log(err))
});


dogButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:${PORT}/dog/`)
    .then((res) => {
        console.log(res.data)
        addCard(res.data)
    })
    .catch(err => console.log(err))
});