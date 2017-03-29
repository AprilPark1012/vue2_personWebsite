import {md5} from './md5function';

export function simpleFetch(url) {

  let md5str = "%$#(*&*aeere1234234"
  
  let paramsMD5 = md5(`${md5str}`);
  console.log(paramsMD5);
  return fetch(url).then(function(response) {
     return response.json();
  });
}