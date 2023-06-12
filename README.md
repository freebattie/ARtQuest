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
2. run `npx expo update`
3. copy envFile(TEMPLATE).js and rename envFile.js
4. Go into envFile and change IP to your backend server
6. if you are running the server on a different port then 3033 you need to change the port in BASE_URL
7. run `npx expo start` to build and start the app
8. Open the app on your phone:
   - Android: Download and open "expo go" and scan the QR code from step 7
   - Iphone: Scan the qr code from step 7 with the camera app and open the link that pops up
11. You should now see a login page, either login with the test user (username: test@test.no, password: test), or create a user and login with **
12. If everything works you should now be on the home page of the app

