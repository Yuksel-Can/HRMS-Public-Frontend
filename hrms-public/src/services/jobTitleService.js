import axios from "axios";

export default class JobTitleService{

    getAllJobTitle(){
        return axios.get("http://localhost:8080/api/jobtitle/getall")
    }
}