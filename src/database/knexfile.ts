import path from 'path';

const config = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(process.cwd(), 'src', 'database', 'database.sqlite'),
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.resolve(process.cwd(), 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(process.cwd(), 'src', 'database', 'seeds'),
  },
};

export const { client, connection, migrations, seeds } = config;
