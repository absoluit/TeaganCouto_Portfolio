const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.MONGODB_URI || 'secretkey',
  mongoUri: process.env.MONGODB_URI || 
  "mongodb+srv://app_db_user:202054906@cluster004.q3jtytj.mongodb.net/" ||
  process.env.MONGO_HOST ||
  'mongodb://'+ (process.env.IP || 
  'localhost') + ':' +
  (process.env.MONGO_PORT || '27017') +
  '/mernproject'
}

export default config 