const fs = require('fs');
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
        return writeFile('db/db.json', JSON.stringify(entry))
    }

    view() {
        return this.read()
            .then((notes) => {
                let compiledNotes = [].concat(JSON.parse(notes))
                return compiledNotes;
            })
    }

    create(entry) {

        const newEntry = {
            id: uuid.v4(),
            title: entry.title,
            text: entry.text
        }

        return this.view() // return exact json
            .then((entry) => [...entry, newEntry])
            .then((updatedNotes) => this.write(updatedNotes))

    }

    delete(id) {

        return this.view() // return exact json
            .then((notes) => notes.filter((filtered) => filtered.id !== id))
            .then((filtered) => this.write(filtered))

    }

}

module.exports = new Update;
