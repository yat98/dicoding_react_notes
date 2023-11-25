function AddNote() {
  return (
    <div className="note-add">
      <h2 className="note-add__title">Note :</h2>
      <div>
        <div className="note-add__title-label">
          <label htmlFor="title">Title</label>
          <p className="note-add__textarea-character">Rest Character: 30</p>
        </div>
        <input type="text" id="title" className="note-add__input"/>
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea cols="30" id="body" rows="10" className="note-add__textarea"></textarea>
      </div>
      <button type="submit" className="note-add__button-save">Save Note</button>
    </div>
  );
}

export default AddNote;