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