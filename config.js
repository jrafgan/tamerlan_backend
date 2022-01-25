const path = require('path');
const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, 'public/uploads'),
    dbUrl: process.env.URI_MONGO || 'mongodb://sofiya:ivtFq8EVC5pLcQh5@ds027345.mlab.com:27345/tamerlan-01',
    mongoOptions: {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false},
  accessTokenLife: 3600, // время задается в сек
  refreshTokenLife: 36000
};