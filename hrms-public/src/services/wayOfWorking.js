import axios from 'axios';

export default class WayOfWorking{

    getAllWayOfWorking(){
        return axios.get("http://localhost:8080/api/wayofworking/getall")
    }
}