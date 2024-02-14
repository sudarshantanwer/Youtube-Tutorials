
const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

app.get('/api/currentTime', (req, res)=>{
    const currentTime = new Date().toLocaleTimeString();
    const updatedHTML = `<h2 id="counter">Time: <span>${currentTime}</span></h2>`;
    res.send(updatedHTML);
})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
