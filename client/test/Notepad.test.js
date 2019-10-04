const Notepad = require('../src/components/Notepad');
const initialNotes = require('./db');

const { getNotes, deleteNotes } = require('../src/apiService/api');

// ==============get========= //

test(' get notes', async () => {
  const init = await getNotes();
  const notepad = new Notepad(init);
  expect(notepad._notes).toEqual(initialNotes);
});
//=============== save ===============//
describe('save note', () => {
  beforeAll(() => {
    console.log('test save note start ');
  });

  test(' save note', () => {
    let target, title, body, priority;

    const notepad = new Notepad();
    ({ title, body, priority } = initialNotes[4]);
    target = {
      title,
      body,
      priority
    };
    expect(
      notepad.saveNotes(target).then(note => {
        ({ title, body, priority } = note);
        const sourse = {
          title,
          body,
          priority
        };
        return sourse;
      })
    ).resolves.toEqual(target);
  });

  afterAll(() => {
    getNotes().then(data => {
      if (data.length > 0) {
        const { id } = data[data.length - 1];
        deleteNotes(id);
      }
    });
  });
});
//  =================== delete ============= //

// describe('delete note', () => {
//   beforeAll(() => {
//     console.log('start delete')
//     const { title, body, priority } = initialNotes[4];
//     const target = {
//       title,
//       body,
//       priority
//     };
//     const notepad = new Notepad();
//     notepad.saveNotes(target);
//   });
//   test('delete note', async () => {
//     const bd = await getNotes();
//     const notepad = new Notepad(bd);
//     const { id } = bd[bd.length - 1];
//     const newNotes = notepad.removeNotes(id)
//       .then(notes = await getNotes())
//     expect(newNotes)
//       .resolves
//       .toEqual(notes);
//   });
// });
