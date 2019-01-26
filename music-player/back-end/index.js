const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

//Takes care of setting port server should listen on
app.listen(8000, () => {
    console.log('listening on port: 8000')
})

//playList data
const songs = [{
    id: 0,
    title: 'Get Lucky',
    releaseDate: 'April 19, 2013',
    songLength: '6:08',
    albumCover: '/img/daft_punk_ram.jpg',
    album: 'Random Access Memories',
    path: '/audio/GetLucky.mp3',
    backgroundImg: '/img/daft-punk-grp4.png'

}, {
    id: 1,
    title: 'Harder, Better, Faster, Stronger',
    releaseDate: 'October 13, 2001',
    songLength: '3:45',
    albumCover: '/img/daft_punk_discovery.jpg',
    album: 'Discovery',
    path: '/audio/hbfs.mp3',
    backgroundImg: '/img/daft-punk-grp4.png'

}, {
    id: 2,
    title: 'Around the World',
    releaseDate: 'March 17, 1997',
    songLength: '7:09',
    albumCover: '/img/daft_punk_homework.jpg',
    album: 'Homework',
    path: '/audio/atw.mp3',
    backgroundImg: '/img/daft-punk-grp4.png'

}, {
    id: 3,
    title: 'Lose Yourself to Dance',
    releaseDate: 'August 13, 2013',
    songLength: '5:53',
    albumCover: '/img/daft_punk_ram.jpg',
    album: 'Random Access Memories',
    path: '/audio/lytd.mp3',
    backgroundImg: '/img/daft-punk-grp4.png'
}, ]

//Takes care of setting endpoint for frontend app
app.get('/', (req, res) => {
    res.send(songs)
})