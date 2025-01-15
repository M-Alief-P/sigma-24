const bodyparser = require('body-parser');
const express = require('express');
const path = require('path');
const webpush = require('web-push');

const app = express;

const publicVapidKey = 'BEBR0Cw7Jxfb2eDR2vfxbqOrbITPsCJJW0cN1qlvO5f_WV-QN5nuj1ZxtaFsEKvCy2_OkBhk-UpmL-vHK-snyMs';

const privateVapidKey = 'dqxRQps8jmUrsg-_TVBb4lfqXjxNOq2jH_iEIWe65Io';

webpush.setVapidDetails('mailto: g4lihru@gmail.com', publicVapidKey, privateVapidKey);

app.post('./subscribe', (req, res) => {
    const subcription = req.body;
    res.status(201).json({});


})
