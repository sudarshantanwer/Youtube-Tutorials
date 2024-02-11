
const express = require('express');
const app = express();
const port = 3000;


let counter = 0;
app.use(express.static('public'));

app.get('/api/increment', (req, res)=>{
    counter++;
    const updatedHTML = `<h2 id="counter">Counter: <span>${counter}</span></h2>`;

    res.send(updatedHTML);
})



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
