
exports.up = function(knex) { //oque devo criar
    return  knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();

  });
};

exports.down = function(knex) { //oque devo excluir se der problema
    return  knex.schema.dropTable('ongs');
};
