require("dotenv").config();
const Server = require("./src/server/server");

const main = () => {
    
    const server = new Server();

    server.listen();
}

main();




