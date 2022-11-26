import express from 'express';


const app = express();
const PORT = process.env.PORT || 3001

app.get('/api', (req, res) => {
    const data = {
        title: "jesus",
        age: 10
    }
    res.json(data);
});

app.listen(PORT, console.log(`port is running on ${PORT} port`));