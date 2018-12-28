const express = require('express');
const people = require('./people.json');

const app = express();
const port = process.env.PORT || 5009;

app.engine('pug', require('pug').__express);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render(
        'index', 
        { 
            title: "Homepage",
            people: people.profiles
        });
});

//test...
app.get('/profile', (req, res) => {
    const person = people.profiles.find(p => p.id === req.query.id);
    res.render(
        'profile', 
        {
            title: `About ${person.firstname} ${person.lastname}`,
            person,
        });
});

const server = app.listen(port, () => {
    console.log(`Express running -> PORT ${port}`);
});