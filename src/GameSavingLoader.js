import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
    static load() {
        return new Promise(function(resolve, reject) {
            read()
            .then(json)
            .then((value) => {
                resolve(value)
            }, (Error) => {
                reject(new Error('Ошибка!'))
            });
        })
    }
}
