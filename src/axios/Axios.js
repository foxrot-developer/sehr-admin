import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://3.133.0.29/api/',
});

Axios.interceptors.request.use((request) => {
    document.querySelector(".loading-bg-call").style.display = "flex";
    return request;
});

Axios.interceptors.response.use(
    (response) => {
        document.querySelector(".loading-bg-call").style.display = "none";

        return response;
    },
    (error) => {
        document.querySelector(".loading-bg-call").style.display = "none";
        throw error;
    }
);

export default Axios;