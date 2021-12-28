const express = require('express')
const db = require('./config/database.js')
const Router = require('./routes/routes.js')

const app = express();
app.use(express.json());

try {
    async () => {
        await db.authenticate();
        // db.sync({force: true})
    }
    console.log('Connection has been establish');
} catch (error) {
    console.error('Unable to connect to the database', error);
}

app.use(Router);

app.listen(5000, () => {
    console.log('Server running at http://localhost:5000')
});