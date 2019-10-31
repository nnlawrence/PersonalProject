module.exports = {
    getTrucks: (req, res) => {
        const db = req.app.get('db')
        db.get_trucks()
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.status(500).send({errormessage: 'Cannot Get'})
        })
    },
    addTruck: (req,res) => {
        const { truck_name, food_type, image, contact, latitude, longitude } = req.body
        const db = req.app.get('db')
        db.add_truck(truck_name, food_type, image, contact, latitude, longitude)
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.status(500).send(err)
        })
    },
    deleteTruck: (req, res) => {
        const { truck_id } = req.params
        const db = req.app.get('db')
        db.delete_truck(truck_id)
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.status(500).send(err)
        })
    }
}