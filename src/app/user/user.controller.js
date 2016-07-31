(function () {
  'use strict';
  angular
    .module('clientAngularJs')
    .controller('UserController', UserController)
  ;

  /** @ngInject */
  function UserController(User, modalServices, toastr) {
    var vm = this;

    vm.users = [];

    function getUsers() {
      User.getAll().then(function (users) {

        vm.users = users;
      });

    }

    vm.edit = function (user) {
      User.get(user._id).then(function (user) {
        console.log(user);
        vm.form = user;
      });
    };

    getUsers();

    vm.submit = function (form) {
      if (angular.isDefined(form._id.$viewValue)) {
        var id = vm.form._id;
        delete vm.form._id;
        User.update(vm.form, id).then(function () {
          toastr.success("Ok!!");
          vm.form = {};
          getUsers();

        }, function () {

          toastr.error("Error plz contact with support");
        });

      } else {
        User.create(vm.form).then(function () {
          toastr.success("Listo!");
          vm.form = {};
          getUsers();
        }, function () {
          toastr.error("Error plz contact with support");
        });
      }
    };

    vm.delete = function (user) {
      var modalOptions = {
        closeButtonText: 'Cancelar',
        actionButtonText: 'Eliminar Usuario',
        headerText: 'Eliminar ' + user.name + '?',
        bodyText: '¿Está seguro eliminar éste usuario?',
        classBtn: 'btn-danger'
      };

      modalServices.showModal({}, modalOptions).then(function () {
        User.delete(user._id).then(function () {
          toastr.success("Ok!!");
          getUsers();
        }, function () {
          toastr.error("Error plz contact with support")
        });
      });
    }

  }

})();
