/* eslint-disable react/prop-types */
import NoteItem from "./NoteItem";

function NoteList({ notes, type }) {
  if(notes.length === 0) return (
    <div className="note-list-empty">
      <h4>Note is empty</h4>
    </div>
  )
  return (
    <div className="note-list">
      { notes.map((note) => <NoteItem type={type} key={note.id} {...note} />) }
    </div>
  );
}

export default NoteList;