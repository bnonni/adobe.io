# Adobe Target API: How To Make an API Call Using CURL

## [Adobe Online Instructions](https://www.adobe.io/authentication/auth-methods.html#!adobeio/adobeio-documentation/master/auth/JWTAuthenticationQuickStart.md)

### Step-by-Step Instructions

#### Step 1. Generate "certificate_pub.crt" & "private.key" using the following terminal command

```bash
openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt
```

#### Step 2. Create an integration in the adobe admin console and upload the "certificate_pub.crt" in the "public keys certificates" section

![Adobe I/O Console Integration section](auth_jwtqs_03.png)

#### Step 3. Navigate to the JWT tab and paste the entirety of the private.key file in the field at the bottom and click "Generate JWT."

```key
-----BEGIN PRIVATE KEY-----
exampleexampleexampleexampleexampleexampleexampleexampleexample1
exampleexampleexampleexampleexampleexampleexampleexampleexample2
exampleexampleexampleexampleexampleexampleexampleexampleexample3
exampleexampleexampleexampleexampleexampleexampleexampleexample4
exampleexampleexampleexampleexampleexampleexampleexampleexample5
exampleexampleexampleexampleexampleexampleexampleexampleexample6
exampleexampleexampleexampleexampleexampleexampleexampleexample7
exampleexampleexampleexampleexampleexampleexampleexampleexample8
exampleexampleexampleexampleexampleexampleexampleexampleexample9
exampleexampleexampleexampleexampleexampleexampleexampleexampl10
exampleexampleexampleexampleexampleexampleexampleexampleexampl11
exampleexampleexampleexampleexampleexampleexampleexampleexampl12
exampleexampleexampleexampleexampleexampleexampleexampleexampl13
exampleexampleexampleexampleexampleexampleexampleexampleexampl14
exampleexampleexampleexampleexampleexampleexampleexampleexampl15
exampleexampleexampleexampleexampleexampleexampleexampleexampl16
exampleexampleexampleexampleexampleexampleexampleexampleexampl17
exampleexampleexampleexampleexampleexampleexampleexampleexampl18
exampleexampleexampleexampleexampleexampleexampleexampleexampl19
exampleexampleexampleexampleexampleexampleexampleexampleexampl20
exampleexampleexampleexampleexampleexampleexampleexampleexampl21
exampleexampleexampleexampleexampleexampleexampleexampleexampl22
exampleexampleexampleexampleexampleexampleexampleexampleexampl23
exampleexampleexampleexampleexampleexampleexampleexampleexampe24
exampleexampleexampleexampleexampleexampleexampleexampleexampl25
exexexexexexexexexexexe=
-----END PRIVATE KEY-----
```

#### Step 4. Copy the CURL command that is generated, and run it in the terminal (see JWT-Post.curl)

##### Client ID and Client Secret can be found here:

![Adobe I/O Client Credential Example](auth_jwtqs_04.png)

```curl
curl -X POST
-H "Cache-Control: no-cache"
-H "Content-Type: multipart/form-data"
-F "client_id=<Your Client ID>"
-F "client_secret=<Your Client Secret>"
-F "jwt_token=eyJhbGciOiJSUzI1NiJ9.ew0KICAgICJleHAiOiAxNTM4NjY2NzUxLA0KICAgICJpc3MiOiAiQUQ3MDZBRTE1QTEzNDI5MzBBNDk1RTY2QEFkb2JlT3JnIiwNCiAgICAic3ViIjogIkVFNzQzNjY0NUJCNERGNzcwQTQ5NUNGNEB0ZWNoYWNjdC5hZG9iZS5jb20iLA0KICAgICJodHRwczovL2ltcy1uYTEuYWRvYmVsb2dpbi5jb20vcy9lbnRfbWFya2V0aW5nX3NkayI6IHRydWUsDQogICAgImF1ZCI6ICJodHRwczovL2ltcy1uYTEuYWRvYmVsb2dpbi5jb20vYy9mNzEzNzAzZGM2MDA0Mzc1ODAwYTA4ZDA2NmY3NDZmMiINCn0.fMGNmKr79d-EurUhJq7chBJbrLHSZGZwgs0rGkaqHE3gy3wDsqJs3JAyqLph2gXzsCdS6H74_077KfAlG8f5nvZJ2sSpDeewF1RYE0lSTMFb0qUWLImjAco33ADdaXtfKrUOvdLnFspve6JHFJEVB_NDP5u8DuORfBaopr56Jki6ITUoGTmX5EAnlrSrRaiNCsppdOzzNP7-5VDrI7B8VyNhkMTdNTTJuTTak6p4ePDmhLwnXpa3Vg-9Teb5ywdlQBSMGLokCdpm4vethJImZBsiv7AZsdUz7UhswAGjxoH9loX7FrF92NklJSp-PbL29wgi90uSOGajSYEhMrhu6w" "https://ims-na1.adobelogin.com/ims/exchange/jwt/"
```

#### Step 5. Take the "Bearer token" from the response (see bearer access-token.json) and input into 'authorization: ' field in report-api-call.curl

#### Step 6. Paste the API Key (Client ID) from the Overview tab of the adobe.io integration console into the 'x-api-key: ' filed in report-api-call.curl

#### Step 7. Copy and paste report-api-call.curl into the terminal and run the command

#### Step 8. Copy and paste response