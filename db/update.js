const fs = require('fs');
// const data = require('../db/db');
const util = require("util");
const uuid = require('uuid');

// Promisify for response as promise object on callbacks
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Update {

    read() {
        return readFile("db/db.json", "utf8")
    }

    write(entry) {
        return writeFile("test.txt", entry)
    }

    view() {
        return this.read()
    }


    // view() {
    //     let notes = [];
    //     return notes = fs.readFile('db/db.json', 'utf8')
    // }

    // create(note) {
    //     return fs.writeFile('db/db.json', JSON.stringify(note))
    // }


    delete(id) {
        let current = data.filter(entry => entry.id !== id)
        return fs.writeFile('db/db.json', JSON.stringify(current))
    }

}

module.exports = new Update;
