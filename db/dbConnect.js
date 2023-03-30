const moongoose = require('mongoose');
require('dotenv').config();

async function dbConnect() {
    moongoose
        .connect(
            process.env.DB_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => console.log('DB connected'))
        .catch((err) => {
            console.log(`DB connection error:`);
            console.log(err);
        });
}

module.exports = dbConnect;