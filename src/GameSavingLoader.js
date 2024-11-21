import read from "./reader.js";
import json from "./parser.js";

// export default class GameSavingLoader {
//     static load() {
//         return new Promise(function(resolve) {
//             read()
//             .then(data => json(data))
//             .then(value => resolve(value))            
//         })
//     }
// }


export default class GameSavingLoader {
    static async load() {
        const data = await read();
        const value = await json(data);
        return value;
    }
}
