const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/urlShortner',{
    useNewUrlParser: true, useUnifiedTopology: true
}, ()=>{
    console.log('connect to db')
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.get('/', async (req , res) => {
    const shortUrls = await ShortUrl.find()
    res.render('index', {shortUrls : shortUrls})
})

app.post('/shortUrls' , async (req,res)=>{
    await ShortUrl.create({full: req.body.fullUrl})
    res.redirect('/')
})

app.get('/:findshortUrl', async (req,res)=>{
    const findshortUrl = await ShortUrl.findOne({short : req.params.findshortUrl})
    if(findshortUrl === null) return res.sendStatus(404)

    findshortUrl.clicks++
    findshortUrl.save()

    res.redirect(findshortUrl.full)
})

app.listen(process.env.PORT || 5000 , ()=> {
    console.log('server started at 5000')
})

