export default () => ({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  user: decodeURIComponent(process.env.DB_USER),
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: Boolean(process.env.DB_SSL) || false,
  autoLoad: Boolean(process.env.AUTO_LOAD) || true,
});