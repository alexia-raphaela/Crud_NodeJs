import mysql from "mysql";

export const banco = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '*****',
  database: 'crud'
})