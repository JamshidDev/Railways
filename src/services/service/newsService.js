import axios from "../index"

const getAll =async function(){
    return await axios.get('/news/allnews')
}

const getRecently = async function(){
    return await axios.get('/news/recently/-1');
}

const getOneNews= async function(payload="0"){
    return await axios.get(`/news/one/${payload}`)
}
const getLenta= async function(){
    return await axios.get(`/news/lenta`)
}


export default {getAll, getRecently, getOneNews, getLenta}