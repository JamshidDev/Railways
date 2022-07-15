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

const paginationNews =async function (page_number, page_amount) {
    return axios.get(`/admin/news/all/${page_number}/${page_amount}`)
}
const getOneNewsAdmin = async function (id){
    return await axios.get(`/admin/news/one/${id}`)
}

const updateNews = async function (payload){
    return axios.put(`/admin/news/update`, payload);
}
const updateNoPicture = async function (payload){
    return axios.put(`/admin/news/updatenews`, payload);

}

const createNews = async function (payload){
    return axios.post("/admin/news/add", payload)
}

// delete new from database
const deleteNews = async function (id){
    return await axios.delete(`/admin/news/delete/${id}`)
}

export default {getAll, getRecently, getOneNews, getLenta, paginationNews, getOneNewsAdmin, updateNews, updateNoPicture, createNews, deleteNews}