import express from 'express'
import mongoose from 'mongoose'
import Data from './data.js'
import Videos from './dbModel.js'



//57x8dbbeXyerl84b


// app config
const app = express();
const Port = process.env.PORT || 9000;

// middlewares
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
        res.setHeader('Access-Control-Allow-Headers', '*'),
        next()
})


//Db config
const connection_url = 'mongodb+srv://admin:57x8dbbeXyerl84b@cluster0.8q8as.mongodb.net/tiktok?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

})
mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo');
})

mongoose.connection.on('error', (err) => {
    console.log("Error occured", err);
})

// api endpoints
app.get('/', (req, res) => {
    res.status(200).send('helloooo Vijay');
})

app.get('/v1/posts', (req, res) => {
    res.status(200).send(Data)
})

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

app.post('/v2/posts', (req, res) => {
    // Post request is to add data to the database
    // it will let us add a video document to the videos collection
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})
// listerners
app.listen(Port, () => console.log('application started at port 9000!'))