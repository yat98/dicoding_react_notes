import React from "react";
import AddNote from "./AddNote";
import NoteHeader from "./NoteHeader";
import './assets/styles/style.css';
import NoteSectionTitle from "./NoteSectionTitle";
import { getInitialData } from "./utils";
import NoteList from "./NoteList";

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    const notes = getInitialData();
    this.state = {
      notes,
      searchNotes: notes,
    };
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader />
        <NoteSectionTitle 
          title="Add Note" 
          desc="quick and intuitive tool that enables users to capture and store important information effortlessly" 
        />
        <AddNote />
        <NoteSectionTitle 
          title="List Note" 
          desc="create and manage organized lists of notes seamlessly" 
        />
        <NoteList notes={this.state.notes.filter(note => !note.archived)} type="list" />
        <NoteSectionTitle 
          title="Archive Note" 
          desc="seamlessly archive notes that are no longer immediately relevant but still important for reference" 
        />
        <NoteList notes={this.state.notes.filter(note => note.archived)} type="archive" />
        <div className="note-footer">
          <p>Made with 💙 from Gorontalo. Insipired from <a href="https://saweria.co/">saweria</a> UI design.</p>
          <p>PT Harta Tahta Sudah Saja</p>
        </div>
      </div>
    );
  }
}