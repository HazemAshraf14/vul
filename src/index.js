const express = require('express');
const app = express();
const PORT = 4000;
//asdasd
//sdddd

app.get('/' , (req,res) => res.send('<h1>Hello Hazem! kkkkkkkkk</h1>'))
app.listen(PORT,() => console.log(`app is up and running on port: ${PORT}`));