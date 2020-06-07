import path from 'path';

const config = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(
      process.cwd(),
      'dist',
      'database',
      'database.sqlite'
    ),
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.resolve(process.cwd(), 'dist', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(process.cwd(), 'dist', 'database', 'seeds'),
  },
};

export const { client, connection, migrations, seeds } = config;
