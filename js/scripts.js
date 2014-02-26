var ToDoList = {

};

var Task = {

};


$(document).ready(function() {
  var currentList;

  $("form#add-list").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#new-list-name").val();

    var newList = Object.create(ToDoList);
    newList.tasks = [];
    newList.listName = inputtedName;

    $("ul#lists").append("<li><span class='list-name'>" + newList.listName + "</span></li>");

    $(".list-name").last().click(function() {
      currentList = newList;
      $("ul#display-tasks").text("");
      currentList.tasks.forEach(function(task) {
        $("ul#display-tasks").append("<li><span class='task'>" + task + "</span></li>");
      });
    });

    $("#enter-tasks").show();
    $("ul#display-tasks").text("");
    currentList = newList;
  });

  $("form#add-task").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#new-task-name").val();
    var newTask = Object.create(Task);
    newTask.status = "incomplete";

    //var newList = Object.create(ToDoList);
    currentList.tasks.push(inputtedTask);

    $("ul#display-tasks").append("<li><span class='task'>" + inputtedTask + "</span></li>");
    $(".task").last().click(function() {
      console.log("test");
      newTask.status = "complete";
      $("ul#display-tasks").append("<li><span class='task'>" + inputtedTask + "</span></li>");
      $(this).parent().remove();
    });

    // $("#list-name").last().click(function() {
    //   currentList = newList;
    // });
  });
  
});

