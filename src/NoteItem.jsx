import { showFormattedDate } from "./utils";

/* eslint-disable react/prop-types */
function NoteItem({ id, title, body, createdAt, type, deleteNote, moveNote, archiveNote }) {
  let secondButton;

  if(type === 'archive') {
    secondButton = <button type="submit" className="note-item__button-move" onClick={() => moveNote(id)}>Move Note</button>
  } else{
    secondButton = <button type="submit" className="note-item__button-archive" onClick={() => archiveNote(id)}>Archive Note</button>
  }

  return (
    <div className="note-item">
      <h3 className="note-item__title">{ title }</h3>
      <p className="note-item__date">{ showFormattedDate(createdAt) }</p>
      <p className="note-item__body">{ body }</p>
      <div className="note-item__button-wrap">
        <div className="note-item__button">
          <button type="submit" className="note-item__button-delete" onClick={() => deleteNote(id)}>Delete Note</button>
          {secondButton}
        </div>
      </div>
    </div>
  );
}

export default NoteItem;