# Authentication with Passport (OAuth2)

## Technologies

- Express
- Passport
- Passport Google OAuth2
- Passport Twitter

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

## How to get Twitter credentials:

1. Login to Twitter Developers and go to https://developer.twitter.com/en/portal/dashboard
2. Create a new Project or use an existing project.
3. Raise the project access level to "Elevated"
4. Create an application in the project.
5. In app section, "Settings" tab:

- Enable "OAuth 2.0"
- Select Type of App > Web App
- Callback URI / Redirect URL > For example, "http://localhost:3000/auth/twitter/callback"
- Website URL > Your Website URL

6. In app section, "Keys and tokends" tab, get your client key and client secret.
7. Copy this client key and client secret into your .env file.
