var jwt = require('jwt-simple');
var payload = {
    "exp": 1538263338,
    "iss": "AD706AE15A1342930A495E66@AdobeOrg",
    "sub": "858F25455BAEB6B80A495CD7@techacct.adobe.com",
    "https://ims-na1.adobelogin.com/s/ent_marketing_sdk": true,
    "aud": "https://ims-na1.adobelogin.com/c/0dcc02eeb01945a3b365873b3e3499c2"
};

// HS256 secrets are typically 128-bit random strings, for example hex-encoded:
var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex');

//encode
var token = jwt.encode(payload, secret);
console.log(token);


/*JS API CALL*/
// var request = new XMLHttpRequest();
// request.open('GET', , true);

// request.onload = function(data) {
//     var data = JSON.parse(this.response);
//     console.log(data);
//     //data.forEach(movie => {console.log(movie.title);});
// };

// // Send request
// request.send();

// postData('https://ims-na1.adobelogin.com/ims/exchange/jwt/client_id=0dcc02eeb01945a3b365873b3e3499c2&client_secret=f622d5a9-fda0-40bc-8529-69a0cb2cdf84&jwt_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzgyNjMzMzgsImlzcyI6IkFENzA2QUUxNUExMzQyOTMwQTQ5NUU2NkBBZG9iZU9yZyIsInN1YiI6Ijg1OEYyNTQ1NUJBRUI2QjgwQTQ5NUNEN0B0ZWNoYWNjdC5hZG9iZS5jb20iLCJodHRwczovL2ltcy1uYTEuYWRvYmVsb2dpbi5jb20vcy9lbnRfbWFya2V0aW5nX3NkayI6dHJ1ZSwiYXVkIjoiaHR0cHM6Ly9pbXMtbmExLmFkb2JlbG9naW4uY29tL2MvMGRjYzAyZWViMDE5NDVhM2IzNjU4NzNiM2UzNDk5YzIifQ.HMIrRjXrkOQZchfBqCxZE8jFfwjb-a8LA05uiNc-CrM', {})
//     .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
//     .catch(error => console.error(error));

// function postData(url = '', data = {}) {
//     // Default options are marked with *
//     return fetch(url, {
//             method: "POST", // *GET, POST, PUT, DELETE, etc.
//             mode: "cors", // no-cors, cors, *same-origin
//             cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//             credentials: "include", // include, same-origin, *omit
//             headers: {
//                 "Content-Type": "application/json; charset=utf-8",
//                 // "Content-Type": "application/x-www-form-urlencoded",
//             },
//             redirect: "follow", // manual, *follow, error
//             referrer: "no-referrer", // no-referrer, *client
//             body: JSON.stringify(data), // body data type must match "Content-Type" header
//         })
//         .then(response => response.json()); // parses response to JSON
// }