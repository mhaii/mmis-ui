import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
    res.status(404).send('Not found')
});

export default router;
