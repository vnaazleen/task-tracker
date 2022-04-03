import axios from 'axios'

const url = 'http://localhost:3500/'

export const readTasks = () => axios(
    {
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3500/tasks",
    }
)

export const createTask = (data) => axios(
  {
    method: "POST",
    data: data,
    withCredentials: true,
    url: "http://localhost:3500/add",
  }
)

export const editTask = (data, id) => axios(
  {
    method: "PUT",
    data: data,
    withCredentials: true,
    url: "http://localhost:3500/tasks/edit/" + id,
  }
)

export const deleteTask = (id) => axios(
  {
    method: "DELETE",
    withCredentials: true,
    url: "http://localhost:3500/tasks/delete/" + id,
  }
)