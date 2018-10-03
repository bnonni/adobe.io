var jwt = require('jwt-simple');
var payload = {
    "exp": 1538263338,
    "iss": "ASDG7612839471346@AdobeOrg",
    "sub": "2345JKHG2O34H523L4K6J@techacct.adobe.com",
    "https://ims-na1.adobelogin.com/s/ent_marketing_sdk": true,
    "aud": ""
};

// HS256 secrets are typically 128-bit random strings, for example hex-encoded:
var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex');

//encode
var token = jwt.encode(payload, secret);
console.log(token);