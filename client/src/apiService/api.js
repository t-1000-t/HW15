import "core-js/stable";
import "regenerator-runtime/runtime";
const axios = require('axios');



axios.defaults.baseURL = 'http://localhost:8089';

const getNotes = async () => {
  try {
    const response = await axios.get('/notes');
    const { data } = await response;
    return data;
  } catch (err) {
    throw (err);
  }
};

const postNotes = async value => {
  try {
    const response = await axios.post('/notes', value);
    const { data } = await response;
    return data;
  } catch (err) {
    throw (err);
  }
};

const deleteNotes = async id => {
  try {
    const response = await axios.delete(`/notes/${id}`);
    const { data } = await response;
    return data;
  } catch (err) {
    throw (err);
  }
};

// ================================================== //

module.exports = { getNotes, postNotes, deleteNotes };