require('dotenv').config();
const configExpress = require('./config/configExpress');
const config = require('config');

app = configExpress()

app.listen(config.get('api.port'), () =>{
    console.log('Pai ta online e roteando \uD83D\uDE1D \uD83E\uDD2A \uD83D\uDE0E \uD83C\uDF7A')
})