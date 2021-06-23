import axios from 'axios';

export default class CandidateService{

    getAllCandidate(){
        return axios.get("http://localhost:8080/api/candidate/getall")
    }
}