const { postNotes, deleteNotes } = require('../apiService/api');
class Notepad {


  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  saveNotes(note) {
    return postNotes(note)
    .then(data => {
      this._notes.push(data);
      return data;
    })
  }

  removeNotes(id) {
    return deleteNotes(id)
    .then(() => {this._notes = this._notes
    .filter(el => el.id !== id)
    });
  }
}

module.exports = Notepad;