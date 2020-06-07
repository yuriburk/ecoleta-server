import knex from './knexConnection';
import { migrations, seeds } from './knexfile';

const KnexMigrator = () => {
  knex.migrate
    .latest({
      directory: migrations.directory,
    })
    .then(() =>
      knex.seed.run({
        directory: seeds.directory,
      })
    )
    .then(() => console.log('Migrações concluídas'));
};

export default KnexMigrator;
