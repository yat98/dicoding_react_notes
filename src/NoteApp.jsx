import React from "react";
import NoteHeader from "./NoteHeader";
import './assets/styles/style.css';

export default class NotesApp extends React.Component {
  render() {
    return (
      <div className="note-app">
        <NoteHeader />
      </div>
    );
  }
}