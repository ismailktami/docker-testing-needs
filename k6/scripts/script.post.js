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
    var url="127.0.0.1:8080/questions";
    var data = {
        "title":"title",
        "description":"description question",
        "createdAt":"",
        "updatedAt":""
    };
    let r = http.post("http://127.0.0.1:8080/questions", JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
      });

    check(r,{"status is good":(r)=> r.status === 200}
    )
  sleep(1);
}