# Hydrophonic Mini Server

Simple server to serve as a means of communication between
an arduino microprocessor and firebase database

## Setup
- clone Repo
- cd into project root directory
- run `npm install`
- rename the file called `.example.envrc.jon` to `.envrc.jon` in the 
root directory of the project and provide the values for the various fields
(Since this is mainly a firebase project, the fields are keys and IDs from firebase
setup). You can also replace the default field with the content of the secret.json
file provided by firebase for web
- run `npm run start`

## Accessing the API

There are just two main routes for this API
- `/data/get`: get the data from firebase
- `/data/send`: post data to firebase

## Additional Sections
To post data to firebase using the `/data/send` route, use the url query format. 
The data the API takes at the moment is 
- Temperature
- Humidity
- Water-Temperature
- ph
- PumpStatus

These are the keys/IDs for the data query. So making the query will look like this:

`http://localhost:8080/data/send?Temperature=32.4&Humidity=58.1&Water-Temperature=23.8&ph=38&PumpStatus=true`
