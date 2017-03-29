import * as requestService from '../../util/request';

import {md5} from '../../util/md5function';

export function fetchApi(name, fn) {

  let md5str = "%$#(*&*aeere1234234"
  
  let paramsMD5 = md5(`${md5str}`);
  console.log(paramsMD5);
  // window.fn = fn;
  //eturn requestService.simpleFetch("https://jasongan.cn/api/weather");
  return fetch("https://jasongan.cn/api/" + name).then((response) => {
     return response.json();
  }).then((res) => {
  	 return res;
  	 // delete window.fn;
  });
}


export function fetchWeather(fn) {
   window.fn = fn;
  //eturn requestService.simpleFetch("https://jasongan.cn/api/weather");
  fetch("https://jasongan.cn/api/weather").then((response) => {
     return response.json();
  }).then((res) => {
  	 fn(res);
  	 delete window.fn;
  });
}