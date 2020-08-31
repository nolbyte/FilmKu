import axios from 'axios';

const api_key = "1776475728aba9c75f192f6c4e730941";
const base_url = "https://api.themoviedb.org/3/";

class moviedb {
    static nowplaying() {
        return axios.get(`${base_url}movie/now_playing?api_key=${api_key}&page=1`)
            .then(response => {
                return Promise.resolve(response.data.results);
            })
            .catch(function(error) {
                if(error.response){
                    return Promise.reject(error.status);
                }else if(error.request) {
                    return Promise.reject("request error");
                }else{
                    return Promise.reject(error.message);
                }
            });
    }

    static search(keyword) {
        return axios.get(`${base_url}search/movie?query=${keyword}&api_key=${api_key}`)
        .then(response => {
            return Promise.resolve(response.data.results);
        })
        .catch(function(error){
            if(error.response){
                return Promise.reject(error.status);
            }else if(error.request) {
                return Promise.reject("request error");
            }else{
                return Promise.reject(error.message);
            }
        })
    }
}
export default moviedb;