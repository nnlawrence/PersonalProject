module.exports = {
    getTrucks: (req, res) => {
        const db = req.app.get('db')
        db.get_trucks()
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.status(500).send({errormessage: 'Cannot Get'})
        })
    }
}