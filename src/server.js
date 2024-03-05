
import {server} from "./app.js";

server.listen(8080, () => {
    console.log(`Listening on port 8080`);
	console.log(`Live: http://localhost:8080/ `);
});
