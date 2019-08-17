
exports.up = function(knex) {
    return knex.schema
    .createTable('cars', tbl => {
      tbl.increments();
      tbl.string('make', 128).notNullable();
      tbl.string('model', 128).notNullable();
      tbl.decimal('mileage');
      tbl.decimal('vin');
      tbl.boolean('automatic');
      tbl.string('titleStatus');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
  };
  

  