import NoteSearch from "./NoteSearch";

function NoteHeader() {
  return (
    <header className="note-app__header">
      <div className="note-app__header-logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <NoteSearch />
    </header>
  );
}

export default NoteHeader;