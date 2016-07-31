(function () {
  'use strict';

  angular
    .module('clientAngularJs')
    .service("modalServices", modalServices)
  ;


  function modalServices($uibModal) {

    var modalDefaults = {
      backdrop: true,
      keyboard: true,
      modalFade: true,
      templateUrl: 'app/components/modals/modal.html'
    };

    var modalOptions = {
      closeButtonText: 'Close',
      actionButtonText: 'OK',
      headerText: 'Proceed?',
      bodyText: 'Perform this action?',
      classBtn: 'btn-primary'
    };

    this.showModal = function (customModalDefaults, customModalOptions) {
      if (!customModalDefaults) customModalDefaults = {};
      customModalDefaults.backdrop = 'static';
      return this.show(customModalDefaults, customModalOptions);
    };

    this.show = function (customModalDefaults, customModalOptions) {
      var tempModalDefaults = {};
      var tempModalOptions = {};

      angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

      angular.extend(tempModalOptions, modalOptions, customModalOptions);

      if (!tempModalDefaults.controller) {
        /** @ngInject */
        tempModalDefaults.controller = function ($scope, $uibModalInstance) {
          $scope.modalOptions = tempModalOptions;
          $scope.modalOptions.ok = function (result) {
            $uibModalInstance.close(result);
          };
          $scope.modalOptions.close = function () {
            $uibModalInstance.dismiss('cancel');
          };
        }
      }

      return $uibModal.open(tempModalDefaults).result;
    };

  }


})();
