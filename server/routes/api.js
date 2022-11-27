import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    const data = {
        title: "jesus",
        age: 10
    }
    res.json(data);
});
router.get('/name', (req, res) => {
    const data = {
        title: "Andres",
        age: 10
    }
    res.json(data);
});

export default router;
