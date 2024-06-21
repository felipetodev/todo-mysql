const {
  PORT = 3000,
  DB_HOST = 'localhost',
  DB_USER = 'root',
  DB_PORT = 3306,
  DB_PASSWORD = '',
  DB_DATABASE = 'todolistdb'
} = process.env;

export const APP_PORT = PORT

export const mysqlConfig = {
  host: DB_HOST,
  user: DB_USER,
  port: Number(DB_PORT),
  password: DB_PASSWORD,
  database: DB_DATABASE
} as const;
