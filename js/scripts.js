var ToDoList = {

};


$(document).ready(function() {
  
  $("#add-task").click(function() {
    $("#new-tasks").append('<div class="new-task-append">' + 
                              '<div class="form-group">' + 
                                  '<label for="new-task">Enter a task</label>' + 
                                  '<input type="text" class="form-control new-task">' + 
                              '</div>' +                                 
                            '</div>');
  });


  $("form#toDoList").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#new-list-name").val();

    var newList = Object.create(ToDoList);
    newList.tasks = [];
    newList.listName = inputtedName;

    console.log(newList.listName);

    var inputtedTask = $("input#new-task-name").val();
    newList.tasks.push(inputtedTask);

    $(".new-task-append").each(function() {
      var inputtedTask = $(this).find("input.new-task").val();

      newList.tasks.push(inputtedTask);
    });

    $("ul#lists").append("<li><span class='list'>" + newList.listName + "</span></li>");
    $("#lists").show();

    $("#lists").last().click(function() {

      $("#show-list").show();

      $("#show-list h2").text(newList.listName);

      $("ul#display-tasks").text("");

      newList.tasks.forEach(function(task) {
        $("ul#display-tasks").append("<li class = 'task-click'>" + task + "</li>");
        $(".task-click").last().click(function() {
          alert(task);
        });
      });

      
    });
  });
  
});

