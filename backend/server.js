import express from 'express';
import throwError from 'http-errors';
import logger from 'morgan';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
import { connectToMongoDB } from './config/db.js';
import apiRouter from './app/routes/index.js';

dotenv.config();
var port = normalizePort('3000');
connectToMongoDB();

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRouter);

var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

app.get('/', (req, res) => {
  res.send('The server is running');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
})

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

  console.log('App is running on http://localhost:'+bind); 
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'eAccess':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'eAddrInUse':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}