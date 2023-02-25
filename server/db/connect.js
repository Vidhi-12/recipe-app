const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/recipe-app",{
    UseNewUrlParser: true,
    UseUnifiedTopology: true
}).then(console.log("successfully connected"))
.catch(console.error());

