const app = require('./app');

//Server
const server = app.listen(8000, function() {
    console.log('Server is Up')
})