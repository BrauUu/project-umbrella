const router = require('express').Router();
const umbrellaController = require('../controllers/umbrellaController');

router.get('/getAll', async (req, res) => {
    umbrellaController.findAll(req, res);
});

router.get('/:id', async (req, res) => {
    umbrellaController.findOne(req, res);
});

router.post('/', async (req, res) => {
    umbrellaController.store(req, res);
});

router.put('/:id', async (req, res) => {
    umbrellaController.update(req, res);
});

router.delete('/:id', async (req, res) => {
    umbrellaController.destroy(req, res);
});

module.exports = app => app.use('/umbrella', router);


    

