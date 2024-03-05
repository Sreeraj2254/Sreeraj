angular.module('authApp', [])
    .controller('AuthController', function () {
        var vm = this;

        vm.currentUser = null;
        vm.isLoggedIn = false;

        vm.signUpData = {
            username: '',
            password: ''
        };

        vm.logInData = {
            username: '',
            password: ''
        };

        vm.signUp = function () {
            // Perform signup logic, for example, send data to server
            // On successful signup, set currentUser and isLoggedIn
            vm.currentUser = { username: vm.signUpData.username };
            vm.isLoggedIn = true;
            // Clear sign-up form
            vm.signUpData = { username: '', password: '' };
        };

        vm.logIn = function () {
            // Perform login logic, for example, authenticate with server
            // On successful login, set currentUser and isLoggedIn
            vm.currentUser = { username: vm.logInData.username };
            vm.isLoggedIn = true;
            // Clear login form
            vm.logInData = { username: '', password: '' };
        };

        vm.logOut = function () {
            // Perform logout logic, for example, clear session
            // Reset currentUser and isLoggedIn
            vm.currentUser = null;
            vm.isLoggedIn = false;
        };
    });
