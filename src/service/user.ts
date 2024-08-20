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

export const createUser = async (form: any, callback: any) => {
    axios.post(`${url}/user`, form)
        .then((result) => {
            callback(result.data)
        }).catch((err) => {
            callback(err)
        });
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

export const deleteUSer = async (id: string, callback: any,) => {
    await axios.delete(`${url}/user/${id}`)
        .then((result) => {
            callback(result.data)
        }).catch((err) => {
            callback(err)
        });
}