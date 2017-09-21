/* eslint-disable no-console */
import mysql from 'mysql';

const dbOptions = {
  host: 'localhost',
  port: 3306,
  user: 'user',
  password: '12345678',
  database: 'node_mysql',
};

const con = mysql.createConnection(dbOptions);

// con.connect((err) => {
//   return (err) ? console.log(`Error to conect Mysql : ${err.stack}`) :
//     console.log(`Conexion establecida con MYSQL N.: ${con.threadId}`);
// });

export default con;
