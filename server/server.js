const express = require('express')
const path = require('path')
const app  = express()
const PORT = 3000;

app.use(express.json());

app.use('/build', express.static(path.resolve(__dirname , '../build')))
//this is sending the string with the response to the html file. path.resolve joins the strings before sending it back and send file sends the actual file to the client.
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'))
})



app.listen(PORT, () => console.log('Listening on 3000'));