# Adobe Target API: How To Make an API Call Using CURL

## [Adobe Online Instructions](https://www.adobe.io/authentication/auth-methods.html#!adobeio/adobeio-documentation/master/auth/JWTAuthenticationQuickStart.md)

### Step-by-Step Instructions

#### Step 1. Generate "certificate_pub.crt" & "private.key" using the following terminal command

       ```
       openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt
       ```

#### Step 2. Once an integration is created in the adobe admin console, upload the "certificate_pub.crt" in the "public keys certificates" section

### Step 3. Navigate to the JWT tab and paste the entirety of the private.key file in the field at the bottom and click "Generate JWT."

### Step 4. Copy the CURL command that is generated and run in the terminal (see JWT-Post.curl)

### Step 5. Take the "Bearer token" from the response (see bearer access-token.json) and input into 'authorization: ' field in report-api-call.curl

### Step 6. Paste the API Key (Client ID) from the Overview tab of the adobe.io integration console into the 'x-api-key: ' filed in report-api-call.curl

### Step 7. Copy and paste report-api-call.curl into the terminal and run the command

### Step 8. Copy and paste response