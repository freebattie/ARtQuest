# ARtQuest

ARtQuest is an app that aims to make the experience at Munch more engaging and fun. 
The app is made with React Native and uses expo for easy and fast iteration. 
This project is part of the course PRO202 at Høyskolen Kristiania. 

## Requirements

The project requires the following to be installed:
- Node.js v18 or later
- Either an Iphone or Android phone with expo go installed

## Setup instructions
1. run `npx expo install` in folder
2. copy lib/envFile(TEMPLATE).js and rename lib/envFile.js
3. Go into envFile and change the IP and PORT to your backend server
6. run `npx expo start` to build and start the app
7. Open the app on your phone:
   - Android: Download and open "expo go" and scan the QR code from step 7
   - Iphone: Scan the qr code from step 7 with the camera app and open the link that pops up
8. You should now see a login page, either login with the test user (username: test@test.no, password: test), or create a user and login with it
9. If everything works you should now be on the home page of the app

## NOTE:
> if you run the project localy, make sure both run on the same router  
> (We had issues connecting between frontend and backend when testing on our school network)
