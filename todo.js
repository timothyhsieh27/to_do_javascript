var choresTable = $('.chores')

var taskInput = $('.task-input')

var addButton = $('.add')

var editButton = $('.edit')

var deleteButton = $('.delete')

var editInput = $('.edit-original')

var editOutput = $('.edit-new')

addButton.click(function() {
  var task = taskInput.val();
  addChore(task)
})

function addChore(task) {
  var row = $('<tr class="task">').appendTo(choresTable)
  $('<td>').text(task).appendTo(row)
}

deleteButton.click(function() {
  var task = taskInput.val()
  deleteChore(task)
})

function deleteChore(task) {
  var tasks = $('.task')

  tasks.each(function(i, row) {
    row = $(row)
    var text = row.text()

    if (text == task) {
      row.remove()
    }
  })
}

editButton.click(function() {
  var newText = editOutput.val()
  var oldtask = editInput.val()
  editChore(oldtask, newText)
})

function editChore(oldtask, newText) {
  var tasks = $('.task')

  tasks.each(function(i, row) {
    row = $(row)

    if (oldtask == row.text()) {
      row.text(newText)
    }
  })
}
