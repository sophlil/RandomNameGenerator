const express = require('express');
const app = express();
const PORT = 3001;
// Cors allows two processes on different ports to communicate and share resources
const cors = require('cors');
app.use(cors());


app.get('/name', (req, res) => {
    const names = ['Daenerys', 'Brian', 'Deshawn', 'Anastasia', 'Ali', 
                    'Evelyn', 'Achilles', 'Priyanka', 'Phyllis', 'Mateo'];

    randomName = names[Math.floor(Math.random() * names.length)];
    res.json({ name: randomName });
    console.log('Response name sent!')
});


app.listen(PORT, () => {
    console.log('Express server listening on PORT 3001')
});
