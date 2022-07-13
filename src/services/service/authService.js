import axios from "../index"

const loginAdmin = function(payload){
    return axios.post("/admin/login", payload)
}

const getAllAdmin = function(){
    return axios.get("/admin/all")
}

const updateAdmin = function(payload){
    return axios.put("/admin/update", payload);
}

const deleteAdmin = function(){
    return axios.delete(`/admin/delete`)
}

export default {loginAdmin,getAllAdmin,  updateAdmin,deleteAdmin }