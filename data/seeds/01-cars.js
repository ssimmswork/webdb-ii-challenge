
exports.seed = function(knex, Promise) {

  return knex('cars').truncate()
    .then(function () {
           return knex('cars').insert([
        { make: 'Ford', model: 'Focus', mileage: 10000, vin: 123456, automatic: true, titleStatus: 'good' },
      ]);
    });
};
