import { showFormattedDate } from "./utils";

/* eslint-disable react/prop-types */
function NoteItem({ title, body, createdAt, type }) {
  let secondButton;

  if(type === 'archive') {
    secondButton = <button type="submit" className="note-item__button-move">Move Note</button>
  } else{
    secondButton = <button type="submit" className="note-item__button-archive">Archive Note</button>
  }

  return (
    <div className="note-item">
      <h3 className="note-item__title">{ title }</h3>
      <p className="note-item__date">{ showFormattedDate(createdAt) }</p>
      <p className="note-item__body">{ body }</p>
      <div className="note-item__button-wrap">
        <div className="note-item__button">
          <button type="submit" className="note-item__button-delete">Delete Note</button>
          {secondButton}
        </div>
      </div>
    </div>
  );
}

export default NoteItem;