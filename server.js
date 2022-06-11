const express = require('express')
const axios = require('axios')
const app = express();
const cors = require('cors');
const https = require('https');

const agent = new https.Agent({rejectUnauthorized: false});
app.use(cors({origin: '*'}))
app.use(cors());
app.use(express.json());

const PORT = 5500;

// DO 
let boredAPI = `https://www.boredapi.com/api/activity/`;
let activity = {
    text: ``,
};

axios.get(boredAPI, { httpsAgent: agent })
    .then(async (res) => {
        activity.text = await res.data.activity;
    })
    .catch((err) => console.log(err));

app.get(`/do`, (req, res) => {

        axios.get(boredAPI, { httpsAgent: agent })
        .then(async (res) => {
            activity.text = await res.data.activity;
        })
        .catch((err) => console.log(err));
    
        res.status(200).send(activity);
});

// EAT 
let eatAPI = `https://foodish-api.herokuapp.com/api/`;
let eatURL = {url: ``};

axios.get(eatAPI, { httpsAgent: agent })
    .then(async (res) => {
        eatURL.url = await res.data.image;
    })
    .catch((err) => console.log(err))

app.get(`/eat`, (req, res) => {
    axios.get(eatAPI, { httpsAgent: agent })
        .then(async (res) => {
            eatURL.url = await res.data.image
        })
        .catch((err) => console.log(err))

    res.status(200).send(eatURL)
})

// GIF
let gifAPI = `https://api.giphy.com/v1/gifs/random?api_key=kHX6KWFVTA4CpWm45qGS08UezlRaAOrw&limit=1&tag=funny+animal`
let gifURL = {gif: ``};

axios.get(gifAPI, { httpsAgent: agent })
    .then(async (res) => {
        gifURL.gif = res.data.data.embed_url;
    })
    .catch((err) => console.log(err))

app.get(`/see`, async (req, res) => {
    axios.get(gifAPI, { httpsAgent: agent })
    .then(async (res) => {
        gifURL.gif = res.data.data.embed_url;
    })
    .catch((err) => console.log(err))
    
    await res.status(200).send(gifURL)
})

// ADVICE 
let adviceAPI = `https://api.adviceslip.com/advice`
let advice = {text: ``};

axios.get(adviceAPI, { httpsAgent: agent })
    .then(async (res) => {
        advice.text = res.data.slip.advice;
    })
    .catch((err) => console.log(err))

app.get(`/learn`, (req, res) => {
    axios.get(adviceAPI, { httpsAgent: agent })
        .then(async (res) => {
            advice.text = res.data.slip.advice;
        })
        .catch((err) => console.log(err))

    res.status(200).send(advice)
})

// JEOPARDY 
let triviaAPI = `https://jservice.io/api/random`
let trivia = {
    title: ``,
    question: ``,
    answer: ``
};

axios.get(triviaAPI, { httpsAgent: agent })
    .then(async (res) => {
        trivia.title = res.data[0].category.title;
        trivia.question = res.data[0].question;
        trivia.answer = res.data[0].answer;
    })
    .catch((err) => console.log(err))

app.get(`/ask`, (req, res) => {
    axios.get(triviaAPI, { httpsAgent: agent })
        .then(async (res) => {
            trivia.title = res.data[0].category.title;
            trivia.question = res.data[0].question;
            trivia.answer = res.data[0].answer;
        })
        .catch((err) => console.log(err))

    res.status(200).send(trivia)
})

// DOG
let dogFactAPI = `https://dog-api.kinduff.com/api/facts`;
let dogPicAPI = `https://random.dog/woof.json?ref=publicapis.dev`;
let dog = {
    fact: ``,
    url: ``
};

axios.get(dogFactAPI, { httpsAgent: agent })
    .then(async (res) => {
        dog.fact = await res.data.facts[0]
    })
    .catch((err) => console.log(err))

axios.get(dogPicAPI, { httpsAgent: agent })
    .then(async (res) => {
        dog.url = await res.data.url
    })
    .catch((err) => console.log(err))

app.get(`/dog`, (req, res) => {
    axios.get(dogFactAPI, { httpsAgent: agent })
        .then(async (res) => {
            dog.fact = await res.data.facts[0]
        })
        .catch((err) => console.log(err))

    axios.get(dogPicAPI, { httpsAgent: agent })
        .then(async (res) => {
            dog.url = await res.data.url
        })
        .catch((err) => console.log(err))

    res.status(200).send(dog)
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})