var todo=angular.module('todoList',[]);
todo.controller('todoCtr',['$scope',function ($scope) {
  $scope.todoLists=localStorage.todoList?
  angular.fromJson(localStorage.todoList)
  :[];
  $scope.current=$scope.todoLists.length?$scope.todoLists[0]:null;
  $scope.saveDate=function () {
    localStorage.todoList=angular.toJson($scope.todoLists);
  }
  $scope.addList=function () {
    var le=$scope.todoLists.length;
    var id=(le===0)?1001:Math.max.apply(null,$scope.todoLists.map(function (v,i) {
      return v.id;
    }))+1;
    var newTodo={
      id:id,
      name:'新事项'+(le+1),
      color:'color'+((le)%7),
      item:[]
    }
    $scope.todoLists.push(newTodo);
    $scope.saveDate();
    $scope.current=newTodo;
  }
  $scope.cgeState=function (v) {
    v.state=!v.state;
    $scope.saveDate();
  }
  $scope.currentList=function (i) {
     $scope.current=$scope.todoLists[i];
  }
  $scope.addItem=function (items) {
    var newItem={name:'事项'+(items.length+1),state:false};
    items.push(newItem);
    $scope.saveDate();
  }
  $scope.clearDone=function (cur) {
    cur.item=cur.item.filter(function(v,i){
      return !v.state;
    })
    $scope.saveDate();
  }
  $scope.color=['color0','color4','color3','color1','color6','color5','color2'];
  $scope.changeColor=function (cur,i) {
    cur.color=$scope.color[i];
    $scope.saveDate();
  }
}])
