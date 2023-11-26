/* eslint-disable react/prop-types */
function NoteSearch({ searchNote }) {
  return (
    <div className="note-app__header-search">
      <input type="text" placeholder="Search" className="note-app__header-search-input" onChange={searchNote} />
    </div>
  );
}

export default NoteSearch;