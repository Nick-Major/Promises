import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {
    static load() {
        return new Promise(function(resolve, reject) {
            read()
            .then(data => json(data))
            .then(value => resolve(JSON.parse(value)))
            .catch((error) => {
                throw new Error(error.message);
            });   
        });
    };
};
