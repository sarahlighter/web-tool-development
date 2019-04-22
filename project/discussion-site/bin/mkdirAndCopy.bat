mkdir server\public
xcopy build server\public /s /e /y
cd server
node server.js
cd..