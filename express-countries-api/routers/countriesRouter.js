const express = require('express');
const router = express.Router();
const request = require('request');

/**
 * return the mapped json of all countries from https://restcountries.eu/rest/v2/all
 */
router.get('/countries', (req, res) => {
    request('https://restcountries.eu/rest/v2/all', (err, response) => {
        if (!err) {
            let countries = JSON.parse(response.body);
            let data = countries.map(country => {
                return {
                    'name': country['name'],
                    'alpha2Code': country['alpha2Code'],
                    'languagues': country['languages'].map(lang => lang['iso639_1']),
                    'flag': country['flag']
                }
            });
            res.json(data);
        } else {
            res.status(500).send(err);
        }
    });
});

/**
 * return the mapped json of the country with the alpha 2 code from https://restcountries.eu/rest/v2/all
 */
router.get('/countries/:code', (req, res) => {
    request('https://restcountries.eu/rest/v2/all', (err, response) => {
        if (!err) {
            let countries = JSON.parse(response.body);
            let alpha2Code = req.params['code'];
            let data = countries
                .filter(item => item['alpha2Code'].toLowerCase() === alpha2Code.toLowerCase())
                .map(country => {
                    return {
                        'name': country['name'],
                        'alpha2Code': country['alpha2Code'],
                        'languagues': country['languages'].map(lang => lang['iso639_1']),
                        'flag': country['flag']
                    }
                });
            res.json(data);
        } else {
            res.status(500).send(err);
        }
    });
});

module.exports = router;