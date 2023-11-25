import React from "react";
import AddNote from "./AddNote";
import NoteHeader from "./NoteHeader";
import './assets/styles/style.css';
import NoteSectionTitle from "./NoteSectionTitle";

export default class NotesApp extends React.Component {
  render() {
    return (
      <div className="note-app">
        <NoteHeader />
        <NoteSectionTitle 
          title="Add Note" 
          desc="quick and intuitive tool that enables users to capture and store important information effortlessly" 
        />
        <AddNote />
      </div>
    );
  }
}