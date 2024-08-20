import axios from "axios";

export const url = import.meta.env.VITE_BASE_API

export const getUsers = (callback: any) => {
    axios.get(`${url}/user`)
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}


export const updateUser = async (id: string, form: any, callback: any,) => {
    await axios.put(`${url}/user/${id}`, form)
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}