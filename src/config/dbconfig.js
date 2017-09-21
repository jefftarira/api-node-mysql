/* eslint-disable no-console */
import mysql from 'mysql';

const dbOptions = {
  HOST: 'localhost',
  PORT: 3306,
  USER: 'user',
  PASSWORD: 'reload',
  DATABASE: 'node_mysql',
};

const con = mysql.createConnection(dbOptions);

con.connect((err) => {
  return (err) ? console.log(`Error to conect Mysql : ${err.stack}`) :
    console.log(`Conexion establecida con MYSQL N.: ${con.threadId}`);
});

export default con;
