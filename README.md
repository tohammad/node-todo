## Documentation

A brief introduction of all api endpoints:

### Get all Todo:

url -  http://localhost:3000/api/todos   
method - get

Response:

{
  status: true,
  todo :[{
          "_id":"5d31c2ffd0264f487474e2c9",
          "todo":"Learn Node js",
          "completed" : false,
          "__v":0
  }]
}

### Post a todo

url - http://localhost:3000/api/todos/
method - post
params: {todo: "Learn Javascript"} 

Response:

{
  status: true,
  todo:[{
  		"_id":"5d31c2ffd0264f487474e2c9",
          "todo":"Learn Javascript",
          "completed" : false,
          "__v":0
  }]
}

### Update status

url: http://localhost:3000/api/todos/_id

method - put

params: {completed: status }

status - boolean value

Response:

{status: true, message: "Status updated successfully"}


### Deleting a todo
url: http://localhost:3000/api/todos/_id
method: delete

Response:

{status: true, message: "Todo deleted successfully"}
