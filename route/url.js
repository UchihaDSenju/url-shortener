const express = require('express');
const {generateShortUrl} = require('../controller/url')

const router = express.Router();

router.post('/', generateShortUrl);

router.get('/analytics/:id')

module.exports = router;