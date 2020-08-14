const fs = require('fs');
const data = require('../db/db');

class Update {

    create(note) {
        
    }

    delete(id) {
        let current = data.filter(entry => entry.id !== id)
        return fs.writeFileSync('db/db.json', JSON.stringify(current))
    }

}

module.exports = new Update;