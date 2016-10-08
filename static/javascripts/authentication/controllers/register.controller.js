/**
 * Register controller
 * @namespace thinkster.authentication.controllers
 */
(function () {
    // definition du mode strict :
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode
    'use strict';

    angular
        .module('thinkster.authentication.controllers')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$location', '$scope', 'Authentication'];

    /**
     * @namespace RegisterController
     */
    function RegisterController($location, $scope, Authentication) {
        var vm = this;

        vm.register = register;

        /**
         * @name register
         * @desc Register a new user
         * @memberOf thinkster.authentication.controllers.RegisterController
         */
        function register() {
            Authentication.register(vm.email, vm.password, vm.username);
        }
    }

})();