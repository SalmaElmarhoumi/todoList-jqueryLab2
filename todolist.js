$(document).ready(function () {
    $("#addTask").on("click", function () {
        var taskText = $("#newTask").val();
        if (taskText.trim() !== "") {
            var task = $("<li>").addClass("task").text(taskText);
            var doneBtn = $("<button>").text("Done").addClass("done-btn");
            var deleteBtn = $("<button>").text("Delete").addClass("delete-btn");

            task.append(doneBtn, deleteBtn);
            $("#taskList").append(task);

            $("#newTask").val("");
        }
    });

    $("#taskList").on("click", ".done-btn", function () {
        var listItem = $(this).closest("li");
        listItem.toggleClass("completed");

        listItem.animate({
            opacity: "toggle",
            height: "toggle"
        }, 500);
    });

    $("#taskList").on("click", ".delete-btn", function () {
        var listItem = $(this).closest("li");

        listItem.animate({
            opacity: "toggle",
            height: "toggle"
        }, 500, function () {
            listItem.remove();
        });
    });
});