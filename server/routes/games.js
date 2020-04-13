const gameRoutes = (app, fs) => {

    // variables
    const dataPath = './data/games.json';

    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    function Game(title, id){           //Konstruktor
        this.title = title;
        this.id = id;
    }
    var games = require('../data/games.json')
    

    // READ ----------------------------------------------------------------------

    //GET games - ges datei
    app.get('/games', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });

    //GET names - nur namen und id                  // geht 
    app.get('/names', (req, res) => {

        var names = [];
        games.forEach(elem => {
            var curr = new Game(elem.title, elem.id)
            names.push(curr)
        })        
        res.send(names);
    });

    // CREATE ----------------------------------------------------------------------
    
    // neues Spiel erstellen über New.vue
    //https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files/
    app.post('/new', (req, res) => {

        console.log(req.body);          //logging

        readFile(data => {
            const newGameId = Object.keys(data).length + 0;         //id erstellen
            req.body.id = newGameId;            //id zuweisen

            // add the new user
            data[newGameId.toString()] = req.body;          // wert zuweisen
            


            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('new game added');
            });
        },
            true);
    });

    
    // UPDATE ----------------------------------------------------------------------
    // app.put('/users/:id', (req, res) => {

    //     readFile(data => {

    //         // add the new user
    //         const userId = req.params["id"];
    //         data[userId] = req.body;

    //         writeFile(JSON.stringify(data, null, 2), () => {
    //             res.status(200).send(`users id:${userId} updated`);
    //         });
    //     },
    //         true);
    // });


    // DELETE ----------------------------------------------------------------------
    // app.delete('/users/:id', (req, res) => {

    //     readFile(data => {

    //         // add the new user
    //         const userId = req.params["id"];
    //         delete data[userId];

    //         writeFile(JSON.stringify(data, null, 2), () => {
    //             res.status(200).send(`users id:${userId} removed`);
    //         });
    //     },
    //         true);
    // });
};

module.exports = gameRoutes;