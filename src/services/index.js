import axios from "axios";
const instance = axios.create({
    baseURL: `https://calm-fjord-14028.herokuapp.com`
});

instance.interceptors.request.use(function (config) {
    let token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null;
    if (token) {
        config.headers.common['Access-Control-Allow-Origin'] = '*'
        config.headers.common['Authorization'] = 'Bearer ' + token
    }

    return config;
})

instance.interceptors.response.use(
    response => response,
    error => {
        console.log(error);
        return Promise.reject(error)
    }
);

export default instance