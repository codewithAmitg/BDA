const  express = require('express');

//rest object
const app = express();

app.use('/api/v1/test',require('./routes/testRoutes'));
//port 
const PORT = 8080

//lisen
app.listen(PORT,()=>{
    console.log("Node Server Running");
});