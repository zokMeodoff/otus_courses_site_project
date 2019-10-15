import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

class AxiosService {

    async axiosGet(url) {
        return await axios.get(url);
    }


    async axiosPost(url, data) {
        return await axios.post(url, data);
    }
}

export default AxiosService;