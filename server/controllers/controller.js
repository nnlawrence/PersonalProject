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
        const { truck_name, food_type, image, contact, latitude, longitude, user_id } = req.body
        console.log( truck_name, food_type, image, contact, latitude, longitude, user_id )
        const db = req.app.get('db')
        db.add_truck([truck_name, food_type, image, contact, latitude, longitude, user_id])
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.status(500).send(err)
        })
    },
    deleteTruck: (req, res) => {
        const { truck_id, user_id } = req.params
        console.log(typeof truck_id)
        console.log(req.params)
        const db = req.app.get('db')
        db.delete_truck([+truck_id, +user_id])
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.status(500).send(err)
        })
    },
    getAdminTruck: (req, res) => {
        const db = req.app.get('db')
        const { user_id } = req.params
        console.log(user_id)
        db.get_admin_truck(+user_id)
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.status(500).send(err)
        })
    },
    editTruck: (req, res) => {
        console.log(req.params)
        const { truck_id, user_id } = req.params
        const db = req.app.get('db')
        const { truck_name, food_type, image, contact, latitude, longitude } = req.body
        console.log(req.body)
        console.log(req.params)
        db.edit_truck([+truck_id, truck_name, food_type, image, contact, latitude, longitude, +user_id])
        .then(data => {
            console.log(data)
            return res.status(200).send(data)
        })
    },
    getAddresses: (req, res) => {
        const { latitude, longitude } = req.body
        const db = req.app.get('db')
        // console.log(data)
        db.get_addresses(latitude, longitude)
        .then(data => {
            console.log(data)
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    }
}