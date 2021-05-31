const Umbrella = require('../models/umbrellaModel');

async function findOne(req, res) {
    
    try {
        const umbrella = await Umbrella.findOne({ _id : req.params.id})
        res.status(200).json(umbrella)
    } catch (err) {
        res.status(400).json("error : Bad request")
    };
};

async function findAll(req, res) {
    
    try {
        const umbrellas = await Umbrella.find()
        res.status(200).json(umbrellas)
    } catch (err) {
        res.status(400).json("error : Bad request")
    };
};

async function store(req, res) {
    
    try {
        const umbrella = await Umbrella.create(req.body)
        res.status(200).json(umbrella)
    } catch (err) {
        res.status(400).json("error : Bad request")
    };
};

async function update(req, res) {
    
    try {
        await Umbrella.updateOne({_id : req.params.id}, req.body);
        res.status(204).json()
    } catch (err) {
        res.status(400).json("error : Bad request")
    };
};

async function destroy(req, res) {
    
    try {
        await Umbrella.deleteOne({_id : req.params.id});
        res.status(204).json()
    } catch (err) {
        res.status(400).json("error : Bad request")
    };
};

module.exports = {
    findOne,
    findAll,
    store,
    update,
    destroy
}
