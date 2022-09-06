import axios from "axios";
import { baseUrl } from "../api";

export const getData = (setData) => {
    axios.get(baseUrl)
    .then(res => setData(res.data.data))
}

export const deleteData = (id) => {
    axios.delete(baseUrl + '/' + id)
}

export const postData = () => {
    axios.post(baseUrl,{
        id:10,
        email:"byron.fields@reqres.in",
        first_name:"Byron",
        last_name:"Fields",
        avatar:"https://reqres.in/img/faces/10-image.jpg"
    })
}