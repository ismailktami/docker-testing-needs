import http from 'k6/http';
import { sleep,check } from 'k6';


export let options = {
  stages: [
      // Ramp-up from 1 to 5 virtual users (VUs) in 5s
    { duration: "1m", target: 50 },

    // Stay at rest on 5 VUs for 10s
    { duration: "10s", target: 100 },

    // Ramp-down from 5 to 0 VUs for 5s
    { duration: "1m", target: 500 },    
    
    { duration: "2m", target: 2000 },


  ]
}

export default function () {
  let res = http.get('https://test.k6.io');
  check(res,{
      "status is good":(r)=> r.status === 200
  })
  check(res,{
    "staus timing":(r)=> r.timings.duration < 200
})
  sleep(1);
}