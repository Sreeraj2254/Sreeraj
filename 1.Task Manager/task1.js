angular.module('taskManagerApp', [])
    .controller('TaskController', function () {
        var vm = this;
        
        vm.tasks = [
            { name: 'Task 1' },
            { name: 'Task 2' },
            { name: 'Task 3' }
        ];
        
        vm.addTask = function () {
            if (vm.newTask.trim() !== '') {
                vm.tasks.push({ name: vm.newTask });
                vm.newTask = '';
            }
        };
        
        vm.editTask = function (task) {
            var newName = prompt('Enter a new name for the task', task.name);
            if (newName && newName.trim() !== '') {
                task.name = newName;
            }
        };
        
        vm.deleteTask = function (task) {
            var index = vm.tasks.indexOf(task);
            if (index !== -1) {
                vm.tasks.splice(index, 1);
            }
        };
    });
