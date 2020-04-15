// load up our new route for games
const gameRoutes = require('./games');

const appRouter = (app, fs) => {

    // we've added in a default route here that handles empty routes
    // at the base API url
    //default route
    app.get('/', (req, res) => {
        res.send('welcome to the ort wo du nicht sein solltest');
    });


    // run our user route module here to complete the wire up
    //other routes
    gameRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;

