import axios from 'axios';

export function getGithubData(name, result, error){
    axios.get(`https://api.github.com/users/${name}/repos?per_page=100&sort=created:asc`)
    .then(response => {
      if(result != null){
         result(response);
      }
    })
    .catch(err => {
      if(error != null){
         error(err);
      }
    })
}