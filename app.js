require("dotenv").config();
const Server = require("./models/server");

const main = () => {
    
    const server = new Server();

    server.listen();
}

main();




