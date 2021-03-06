/*
    In case I need to switch back to this server:

    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm run build && node server.js dev"
*/

const path = require('path'),
   express = require('express'),
   webpack = require('webpack'),
   webpackConfig = require('./webpack.config.js'),
   app = express(),
   port = process.env.PORT || 3000,
   opn = require('opn');

app.listen(port, () => { console.log(`App is listening on port ${port}`) });

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

//Check dev mode
process.argv.forEach(function (val) {
    if(val === 'dev') {
        webpackConfig.mode = 'development';
    }
});

let compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
   noInfo: true, publicPath: webpackConfig.output.publicPath, stats:    { colors: true }
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.resolve(__dirname, 'dist')));

opn('http://localhost:' + port);