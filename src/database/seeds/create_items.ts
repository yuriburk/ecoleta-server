import Knex from 'knex';

export async function seed(knex: Knex) {
  const insertItems = [
    { title: 'Lâmpadas', image: 'lampadas.svg' },
    { title: 'Pilhas e Baterias', image: 'baterias.svg' },
    { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
    { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
    { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
    { title: 'Óleo de cozinha', image: 'oleo.svg' },
  ];

  const items = await knex('items').whereIn(
    'title',
    insertItems.map((insertItem) => insertItem.title)
  );

  if (items.length === 0) {
    await knex('items').insert(insertItems);
  }
}
