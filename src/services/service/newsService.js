import axios from "../index"

const getAll =async function(){
    return await axios.get('/news/allnews')
}

const getRecently = async function(){
    return await axios.get('/news/recently/-1');
}

const getOneNews= async function(payload='62ce62ce7381492f3bf352c0'){
    return await axios.get(`/news/one/${payload}`)
}


export default {getAll, getRecently, getOneNews}