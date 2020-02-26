mkdir -p server/public
cp -r build/* server/public
cd server
node server.js
cd..