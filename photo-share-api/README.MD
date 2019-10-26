PhotoShare API
===========
This folder contains the finished files for the PhotoShare API at the end of chapter 5. To run these files, simply:

1. Run `npm install` on this folder.
2. Replace the values of the .env file with your unique variables. 

```
DB_HOST=<YOUR_MONGODB_HOST>
// For host on Atlas "mongodb+srv://<nameDBUser:paswordDBUser>@<nameClusterAtlas>-pmibj.gcp.mongodb.net/<nameDB>?retryWrites=true&w=majority"
CLIENT_ID=<YOUR_GITHUB_CLIENT_ID>
CLIENT_SECRET=<YOUR_GITHUB_CLIENT_SECRET>
// From github- setting - developer setting - App Oauth 
```
3. Run `npm start` and open your browser to `http://localhost:4000/playground`.
