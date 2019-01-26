const express = require('express')
const app = express()
const cors = require('cors')
const convert = require('xml-js');
const serviceAccount = require("./serviceAccountKey.json");
const admin = require("firebase-admin");
var bodyParser = require('body-parser');

//Initialize the app with a service account, granting admin privileges
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sigma-44788.firebaseio.com"
});

const db = admin.firestore()

//Takes care of cors
app.use(cors())
app.use(bodyParser.json({ type: 'application/json' }));

//Initialize server
app.listen(8080, () => {
    console.log(`Server Started on http://localhost:8080`)
})

//Endpoint responsible for adding a new record in db
app.put('/new', (req, res) => {
    let stat = {
        ltv: getRandomID(100, 180),
        tdsr: getRandomID(30, 80),
        pti: getRandomID(1, 6),
        program: 'Platinum',
        riskTier: getRandomID(1, 5),
        status: 'Active',
    }
    let id = getRandomID(10000000, 99999999)
    createDBDocument(convertXMLtoJSON('./data/dt-resp.xml'), 'dt', id)
    createDBDocument(convertXMLtoJSON('./data/cbb-resp.xml'), 'cbb', id)
    createDBDocument(convertXMLtoJSON('./data/equifax-resp.xml'), 'equifax', id)
    createDBDocument(stat, 'app', id)
    res.send('New application added ...')
})

//Endpoint responsible for updating a document in a collection
app.put('/update/:collection/:id', (req, res) => {
    let {collection, id} = req.params
    let {decision} = req.body
    updateDBDocument(decision, collection, id)
    res.send('Updating application ...')
})

//Endpoint responsible for getting specific documents from collection
app.get('/app/:collection/:id', (req, res) => {
    let {collection, id} = req.params
    var applicationsRef = db.collection(`${collection}`).doc(`${id}`);
    var getDoc = applicationsRef.get()
        .then(doc => {
            if (!doc.exists) {
                console.log('No such document!');
            } else {
                res.json(doc.data())
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
            res.send('Error getting document requested')
        });
})

//Endpoint responsible for getting all documents
app.get('/apps/:collection', (req, res) => {
    let {collection} = req.params
    var applicationsRef = db.collection(`${collection}`);
    var applications = []
    applicationsRef.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                applications.push({id: doc.id, data: doc.data()})
            });
            res.json(applications)
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
})

//Endpoint responsible for root
app.get('/', (req, res) => {
    res.send(('Server is Running ...'))
})

//Endpoint responsible for redirecting invalid url
app.get('/*', function (req, res) {
    res.redirect('/')
});

//Takes care of converting XML to Compact JSON
function convertXMLtoJSON(xml){
    var xml = require('fs').readFileSync(xml, 'utf8');
    var options = {
        compact: true,
        nativeType: true,
        ignoreComment: true,
        ignoreDeclaration: true
    };
    var data = convert.xml2js(xml, options);
    return data
}

//Takes care of adding data to firestore
function createDBDocument(data, collection, id){
    return db.collection(`${collection}`).doc('DT' + id + 'CRC02').set(data).then(() => {
    })
}

//Takes care of update document in a collection
function updateDBDocument(decision, collection, id, ) {
    db.collection(`${collection}`).doc(id).update({
        "status": decision
    })
}

//Takes care of generating random ID for the same data
function getRandomID(a, b) {
    let min = a
    let max = b
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

