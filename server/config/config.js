const env = process.env.NODE_ENV || "development";

if (env === 'development' || env === 'test') {
    const config = require('./config.json');
    const envConfig = config[env];
    for (let key in envConfig) {
        process.env[key] = envConfig[key];
    }
}