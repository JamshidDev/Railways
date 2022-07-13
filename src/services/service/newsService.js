import axios from "../index"

const getAll = function(){
    return axios.get('/news/allnews')
}


export default {getAll}