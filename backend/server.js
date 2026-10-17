import app from './config/express.js';
import http from 'http';
import dotenv from 'dotenv';
import { connectToMongoDB } from './config/db.js';

dotenv.config();
var port = normalizePort(process.env.PORT || '3000');
connectToMongoDB();

var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

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
  console.log('App is running on http://localhost:'+port); 
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'eAccess':
      console.error(bind + ' requires elevated privileges');
      return process.exit(1);
    case 'eAddrInUse':
      console.error(bind + ' is already in use');
      return process.exit(1);
    default:
      throw error;
  }
}