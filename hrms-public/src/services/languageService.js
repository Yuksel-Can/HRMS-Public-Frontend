import axios from 'axios';

export default class LanguageService{

    getAllLanguage(){
        return axios.get("http://localhost:8080/api/language/getall")
    }
    getLanguageWithResumeIdSortByDateDesc(){
        return axios.get("http://localhost:8080/api/language/getLanguageDetailsWithResumeIdOrderByDesc")
    }
}