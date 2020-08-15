const express = require('express');
const path = require('path');

const app = express();

const port = 3000;





console.log(__dirname);
app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
    res.render('inde') 
  })

  

      app.listen(port, () => {
        console.log('My Portfoli')
      })