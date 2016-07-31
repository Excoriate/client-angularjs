(function () {
  'use strict';

  angular
    .module('clientAngularJs')
    .service('User', User);

  /** @ngInject */
  function User(Restangular) {

    User.getAll = function () {
      return Restangular.all('users').getList()
    };

    User.get = function (id) {
      return Restangular.one('users', id).get()
    };

    User.create = function (user) {
      return Restangular.one('users').customPOST(user);
      //curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "Alberto", "email": "alberto@alberto.xyz"}' http://localhost:9000/users
    };

    User.update = function (user, id) {
      return Restangular.one('users', id).customPUT(user);
    };

    User.delete = function (id) {
      return Restangular.one('users', id).remove(); 
      //curl -i -X DELETE http://localhost:9000/users/575a5b1adee023db367c9b3e
    };

    return User;
  }
})();
