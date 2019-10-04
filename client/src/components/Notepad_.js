export default class Notepad {


  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  // save(note) {
  //   this._notes.push(note);
  //   return this._notes;
  // }

  // deleteNote(id) {
  //   this._notes = this._notes.filter(el => el.id !== id);
  // }

  // updateNote(note) {
  //     this._notes = note;
  //     return this._notes;
  // }

  // updateNotePriority(id, priority) {
  //   const note = this.findNoteById(id);
  //   if (note) {
  //     note.priority = priority;
  //     return note;
  //   }
  // }

  // filterNoteByQuery(query) {
  //   return this._notes.filter(el =>
  //     el.title.toLowerCase().includes(query.toLowerCase()) ||
  //     el.body.toLowerCase().includes(query.toLowerCase()));
  // }

  // filterNoteByPriority() {
  //   return this._notes.sort((a, b) => b.priority - a.priority);
  // }

  // findNoteById(id) {
  //   return this._notes.find(el => el.id === id);
  // }
}
