import conn from '../../config/dbconfig';

export function getAll() {
  conn.connect((err) => {
    return (err) ? console.log(`Error to conect Mysql : ${err.stack}`) :
      console.log(`Conexion establecida con MYSQL N.: ${conn.threadId}`);
  });

  return new Promise((resolve, reject) => {
    conn.query('SELECT * FROM movies', (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

export function createMovie(args) {
  return new Promise((resolve, reject) => {

    conn.query('INSERT INTO movies(title,description,year) values(?,?,?)',
      [args.title, args.description, args.year],
      (err, data) => {
        if (err) reject(err);
        else resolve(data);
      })
  });
}
