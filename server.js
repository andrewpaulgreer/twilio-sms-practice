require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: 'INSERT # Here',
    from: '+1 866 939 1612',
    body: "testing for twillio message"
}).then((message)=> console.log(message))
.catch((err) => console.log(err))