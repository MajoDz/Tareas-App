const mongoose = require('mongoose');

const URI = 'mongodb+srv://MajoDz2:majodija2@majodz.t5vfg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;