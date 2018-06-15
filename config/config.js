module.exports = {
  development: {
    username: 'demo_app',
    password: '',
    database: 'tasks',
    host: 'localhost',
    dialect: 'postgres',
    port: 26257,
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
  }
};
