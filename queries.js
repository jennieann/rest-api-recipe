var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);

//get postgres DB
var db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'puppies',
  user: 'postgres',
  password: '7433'
});

function getAllKennels(req, res, next) {
  db
    .any('select * from kennel')
    .then(function(data) {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'Retrieved ALL kennels'
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function getAllPuppiesByKennel(req, res, next) {
  var kennelID = parseInt(req.params.id);
  db
    .any(
      'select pups.name, pups.id, pups.breed, pups.sex, pups.kennel_id from pups left join kennel on kennel.id=pups.kennel_id where kennel.id=$1',
      kennelID
    )
    .then(function(data) {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'Retrieved ALL pups from certain Kennel'
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
// add query functions
//GET all
function getAllPuppies(req, res, next) {
  db
    .any('select * from pups')
    .then(function(data) {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'Retrieved ALL puppies'
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

//GET
function getSinglePuppy(req, res, next) {
  var pupID = parseInt(req.params.id);
  db
    .one('select * from pups where id = $1', pupID)
    .then(function(data) {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'Retrieved ONE puppy'
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

//POST
function createPuppy(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db
    .none(
      'insert into pups(name, breed, age, sex, kennel_id)' +
        'values(${name}, ${breed}, ${age}, ${sex} ${kennelid})',
      req.body
    )
    .then(function() {
      res.status(200).json({
        status: 'success',
        message: 'Inserted one puppy'
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

//PUT
function updatePuppy(req, res, next) {
  db
    .none('update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5', [
      req.body.name,
      req.body.breed,
      parseInt(req.body.age),
      req.body.sex,
      parseInt(req.params.id)
    ])
    .then(function() {
      res.status(200).json({
        status: 'success',
        message: 'Updated puppy'
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

//DELTE
function removePuppy(req, res, next) {
  var pupID = parseInt(req.params.id);
  db
    .result('delete from pups where id = $1', pupID)
    .then(function(result) {
      /* jshint ignore:start */
      res.status(200).json({
        status: 'success',
        message: `Removed ${result.rowCount} puppy`
      });
      /* jshint ignore:end */
    })
    .catch(function(err) {
      return next(err);
    });
}
module.exports = {
  getAllPuppies: getAllPuppies,
  getSinglePuppy: getSinglePuppy,
  createPuppy: createPuppy,
  updatePuppy: updatePuppy,
  removePuppy: removePuppy,
  getAllKennels: getAllKennels,
  getAllPuppiesByKennel: getAllPuppiesByKennel
};
