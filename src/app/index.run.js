(function() {
  'use strict';

  angular
    .module('clientAngularJs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
