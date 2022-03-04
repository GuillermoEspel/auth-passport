# Authentication with Passport (OAuth2)

## Technologies

- Express
- Passport
- Passport Google OAuth2

## Previous steps

- Replace the file name "example.env" with ".env" and fill in the variables.

## Start the application:

```
npm run start
```

## Develop:

```
npm run dev
```

## How to get Google credentials:

1. Login to Google Cloud Platform and go to https://console.cloud.google.com/apis/credentials
2. Here go to Credentials > Create Credentials > OAuth Client ID
3. Complete form:

- Application Type: Web Application
- Name: For example, "Passport App"
- Authorized redirects URIs > Add URI > For example, "http://localhost:3000/auth/google/callback"

4. Get your GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET
5. Copy this client ID and client secret into your .env file.
