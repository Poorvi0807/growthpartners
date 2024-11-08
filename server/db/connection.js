const mongoose = require('mongoose');

const url = "mongodb+srv://poorvisinghthakur27:poorvimongdb27@cluster0.thxfeck.mongodb.net/?retryWrites=true&w=majority/chatApp"
mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))