import axios from 'axios'

export default function useAxios() {
  const useGet = async(url) => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/${url}`)
      console.log({response})
    } catch(error) {
      console.log(error)
    }
  }

  const usePost = async(url, body) => {
    try {
      const { status, data } = await axios.post(`http://127.0.0.1:3000/${url}`, body)
      if (status === 200) return data
    } catch(error) {
      console.log(error)
    }
  }

  return { useGet, usePost }
}