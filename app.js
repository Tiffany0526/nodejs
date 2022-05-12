const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

////////////////////////////////////////////////////////////////
const app = express();
// middleware
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
	console.log('Hello!');
    next();
});
app.use((req, res, next) => {
	console.log('World!');
    next();
});

app.get('/', (req, res) => {
    res.status(200)
        .render('index', {
            pageTitle: 'Book Your Books online'
        });
});

app.get('/login', (req, res) => {
    res.status(200)
        .render('login', {
            pageTitle: 'Login'
        });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.redirect('/');
    } else {
        console.log('欄位尚未填寫完成！')
    }
});

app.get('*', (req, res) => {
    res.status(404)
        .render('404', {
            pageTitle: 'Page Not Found'
        });
});

app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});
