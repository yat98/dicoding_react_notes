import { showFormattedDate } from "./utils";

/* eslint-disable react/prop-types */
function NoteItem({ title, body, createdAt }) {
  return (
    <div className="note-item">
      <h3 className="note-item__title">{ title }</h3>
      <p className="note-item__date">{ showFormattedDate(createdAt) }</p>
      <p className="note-item__body">{ body }</p>
      <div className="note-item__button-wrap">
        <div className="note-item__button">
          <button type="submit" className="note-item__button-delete">Delete Note</button>
          <button type="submit" className="note-item__button-archive">Archive Note</button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;