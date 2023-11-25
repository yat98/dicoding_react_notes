function AddNote() {
  return (
    <div className="note-add">
      <h2 className="note-add__title">Note :</h2>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" className="note-add__input"/>
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea cols="30" id="body" rows="10" className="note-add__textarea"></textarea>
        <p className="note-add__textarea-character">Rest Character: 30</p>
      </div>
      <button type="submit" className="note-add__button-save">Save Note</button>
    </div>
  );
}

export default AddNote;