const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() )

app.listen(
    PORT, 
    () => console.log(`Live on http://localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt : '🤪',
        color: 'Green',
        size: 'Large',
    })
});

app.post('/tshirt/:id', (req, res) => {
    const {id} = req.params;
    const {logo} = req.body;
    if (!logo) {
        res.status(418).send({message: "Logo Needed."})
    }
    res.send({
        tshirt: 'Your shirt has the following logo in the middle: ' + logo
    });
});