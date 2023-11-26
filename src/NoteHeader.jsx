/* eslint-disable react/prop-types */
import NoteSearch from "./NoteSearch";

function NoteHeader({ searchNote }) {
  return (
    <header className="note-app__header">
      <div className="note-app__header-logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <NoteSearch searchNote={searchNote} />
    </header>
  );
}

export default NoteHeader;