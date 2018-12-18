const path = require('path'),
   express = require('express'),
   request = require('request'),
   net = require('net'),
   VNDB = require('vndb'),
   app = express(),
   port = process.env.PORT || 3000,
   opn = require('opn');

app.use(express.static(path.join(__dirname, '')));

app.all('/api/vndb', (req, res) => {
    (async () => {
      try {
          const vndb = await VNDB.start();
          const res0 = await vndb.write('login {"protocol":1,"client":"VNDB-Reborn-Tester","clientver":"0.0.1"}');
          const res2 = await vndb.write('get vn basic,details,tags (search ~ "'+req.query.q+'") {"results": 25, "page": '+req.query.page+'}');
          res.json(res2.slice(8));
          await vndb.end();          
      } catch (e) {
        console.log('Something happened when connecting to VNDB API');
      }
    })();    
})

app.all('/api/shiki', (req, res) => {
  let shikimoriOptions = {
    url: `https://shikimori.org/api/${req.query.type}?search=${req.query.search}&limit=50`,
    headers: {
      "User-Agent": "Hyakka"
    }
  }
  request(shikimoriOptions, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)
      return res.json(body);
    }
  });
})

app.get('*', (req, res) => {
   res.sendFile('index.html');
});



app.listen(port, () => { console.log(`App is listening on port ${port}`) });
opn('http://localhost:' + port);

//https://github.com/Permagate/vndb-reborn
// (async () => {
//     try {
//         const vndb = await VNDB.start();
//         const res0 = await vndb.write('login {"protocol":1,"client":"VNDB-Reborn-Tester","clientver":"0.0.1"}');
//         const res2 = await vndb.write('get vn basic,details,tags (search ~ "witch")');
//         console.log(res2);
//         await vndb.end();
//     } catch (e) {
//       console.log('Something happened when connecting to VNDB API');
//     }
//   })();


// let vnDbClient = net.connect({ port: 19534, host: 'api.vndb.org' }, function () {
//     console.log('Connected');
// })
// vnDbClient.end(function(){
//     console.log('DisConnected');
// })
