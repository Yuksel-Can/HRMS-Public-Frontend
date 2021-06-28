import axios from 'axios';

export default class TechnologyService{

    getAllTechnology(){
        return axios.get("http://localhost:8080/api/technology/getall")
    }
    getTechnologyWithResumeIdSortByDateDesc(){
        return axios.get("http://localhost:8080/api/technology/getTechnologyDetailsWithResumeIdOrderByDesc")
    }
}