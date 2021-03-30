// importing express from package.json
const express = require('express')
// importing path from package.json
const path = require('path')
// initialize espress and store its instance inside a variable
const app  = express()
// declare variable port and assign it to a number which will be the port designaded to run the code
const PORT = 3000;

// parse the request from json to a javascript object and add it to the body of the 
app.use(express.json());

//this is sending the string with the response to the html file. path.resolve joins the strings before sending it back and send file sends the actual file to the client.
app.use('/build', express.static(path.resolve(__dirname , '../build')))

// receiving a get request to '/' which will send the file back to the client. Here it will be the html file
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'))
})



app.listen(PORT, () => console.log('Listening on 3000'));