import path from 'path';

const rootName = process.env.NODE_ENV === 'development' ? 'src' : 'dist';

const config = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(
      process.cwd(),
      rootName,
      'database',
      'database.sqlite'
    ),
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.resolve(process.cwd(), rootName, 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(process.cwd(), rootName, 'database', 'seeds'),
  },
};

export const { client, connection, migrations, seeds } = config;
