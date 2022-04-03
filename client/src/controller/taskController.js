import axios from 'axios'

const URL = 'http://localhost:3500/tasks/'

export const readTasks = () => axios(
    {
      method: "GET",
      withCredentials: true,
      url: URL,
    }
)

export const readTask = (id) => axios(
  {
    method: "GET",
    withCredentials: true,
    url: URL + id,
  }
)

export const createTask = (data) => axios(
  {
    method: "POST",
    data: data,
    withCredentials: true,
    url: URL + "add",
  }
)

export const editTask = (data, id) => axios(
  {
    method: "PUT",
    data: data,
    withCredentials: true,
    url: URL + "edit/" + id,
  }
)

export const deleteTask = (id) => axios(
  {
    method: "DELETE",
    withCredentials: true,
    url: URL + "delete/" + id,
  }
)