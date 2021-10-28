# Node Websocket

A simple websocket server with a rest endpoint to get previous sent data.

Also features a client that sends a message through the websocket, gets messages by keys and listens to broadcast events to know when a new message is saved to the database.

Websocket server saves all previous messages to a mongodb database.

## Install & Run

`npm install`

set your ENV variables according to .env.example file and run

`npm run start:dev`
