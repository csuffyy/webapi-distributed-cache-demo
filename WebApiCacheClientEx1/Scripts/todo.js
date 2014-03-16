
function TodoCtrl($scope) {

    var cacheNotificationHub = $.connection.cacheNotificationHub;
    cacheNotificationHub.client.cacheNotification = onCacheNotification;

    $.connection.hub.url = 'http://webapicachereplicateone.apphb.com/signalr';
    $.connection.hub.start();

    function onCacheNotification(cId, cacheMessage) {

        kendoConsole.log(cacheMessage);
    }

    $scope.todos = [
      { Text: 'learn about distributed caching methods', Done: true },
      { Text: 'take flying lesson', Done: false }
    ];

    $scope.addTodo = function () {

        if (($scope.todoText == null) || ($scope.todoText == "")) {
            return;
        }

        var newToDo = { Text: $scope.todoText, Done: false };
        $scope.todos.push(newToDo);
        $scope.todoText = '';

        $.post('http://webapicachereplicateone.apphb.com/api/todo', newToDo);
    };

    $scope.remaining = function () {

        var count = 0;

        angular.forEach($scope.todos, function (todo) {
            count += todo.Done ? 0 : 1;
        });
        return count;
    };

    $scope.archive = function () {

        var oldTodos = $scope.todos;

        $scope.todos = [];
        angular.forEach(oldTodos, function (todo) {
            if (!todo.Done) $scope.todos.push(todo);
        });
    };
}

$(document).ready(function () {
    
    
});