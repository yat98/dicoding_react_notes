import React from "react";
import AddNote from "./AddNote";
import NoteHeader from "./NoteHeader";
import '../assets/styles/style.css';
import NoteSectionTitle from "./NoteSectionTitle";
import { confirmAlert, getInitialData, notificationAlert } from "../utils";
import NoteList from "./NoteList";
import autoBind from 'auto-bind';
import NoteFooter from "./NoteFooter";

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    const notes = getInitialData();
    this.state = {
      notes,
      searchNotes: notes,
      keyword: ''
    };

    autoBind(this);
  }

  onAddNoteEventHandler({ title, body }) {
    const notes = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    this.setState((previousState) => ({
      notes: [ notes, ...previousState.searchNotes ],
      searchNotes: [ notes, ...previousState.searchNotes ]
    }));

    notificationAlert("Added!", "Your note has been added.");
  }

  onArchiveNoteEventHandler(id) {
    confirmAlert("Are you sure to archive note?", "You won't be able to revert this!", "Yes, archive it!")
      .then((result) => {
        if (result.isConfirmed) {
          this.setState((previousState) => {
            const noteIndex = previousState.searchNotes.findIndex((note) => note.id === id);
            const note = previousState.searchNotes.find((note) => note.id === id);
            note.archived = true;

            previousState.searchNotes[noteIndex] = note;

            return {
              notes: previousState.searchNotes,
              searchNotes: previousState.searchNotes
            };
          });

          notificationAlert("Archived!", "Your note has been archived.");
        }
      });
  }

  onMoveNoteEventHandler(id) {
    confirmAlert("Are you sure to move note?", "You won't be able to revert this!", "Yes, move it!")
      .then((result) => {
        if (result.isConfirmed) {
          this.setState((previousState) => {
            const noteIndex = previousState.searchNotes.findIndex((note) => note.id === id);
            const note = previousState.searchNotes.find((note) => note.id === id);
            note.archived = false;

            previousState.notes[noteIndex] = note;

            return {
              notes: previousState.searchNotes,
              searchNotes: previousState.searchNotes
            };
          });
          
          notificationAlert("Moved!", "Your note has been moved.");
        }
      });
  }

  onDeleteNoteEventHandler(id) {
    confirmAlert("Are you sure to delete note?", "You won't be able to revert this!", "Yes, delete it!")
      .then((result) => {
        if (result.isConfirmed) {
          this.setState((previousState) => {
            const notes = previousState.searchNotes.filter((note) => note.id !== id);

            return {
              notes,
              searchNotes: notes
            };
          });

          notificationAlert("Deleted!", "Your note has been deleted.")
        }
      });
  }

  onChangeSearchNoteEventHandler(e) {
    const keyword = e.target.value.toLowerCase();
    if(keyword.length === 0 || keyword === '') {
      this.setState((previousState) => ({
        keyword,
        notes: previousState.searchNotes,
      }));
    } else {
      this.setState((previousState) => ({
        keyword,
        notes: previousState.searchNotes.filter((note) => note.title.toLowerCase().includes(keyword)),
      }));
    }
  }

  render() {
    const notes = this.state.notes;
    const keyword = this.state.keyword;

    const listNotes = notes.filter((note) => 
      note.title.toLowerCase().includes(keyword.toLocaleLowerCase()) 
      && !note.archived
    );

    const archiveNotes = notes.filter((note) => 
      note.title.toLowerCase().includes(keyword.toLocaleLowerCase()) 
      && note.archived
    );
    
    return (
      <div className="note-app">
        <NoteHeader searchNote={this.onChangeSearchNoteEventHandler} />
        <NoteSectionTitle 
          title="Add Note" 
          desc="quick and intuitive tool that enables users to capture and store important information effortlessly" 
        />
        <AddNote addNote={this.onAddNoteEventHandler} />
        <NoteSectionTitle 
          title="List Note" 
          desc="create and manage organized lists of notes seamlessly" 
        />
        <NoteList type="list" 
          notes={listNotes} 
          deleteNote={this.onDeleteNoteEventHandler}
          moveNote={this.onMoveNoteEventHandler}
          archiveNote={this.onArchiveNoteEventHandler} />
        <NoteSectionTitle 
          title="Archive Note" 
          desc="seamlessly archive notes that are no longer immediately relevant but still important for reference" 
        />
        <NoteList type="archive" 
          notes={archiveNotes} 
          deleteNote={this.onDeleteNoteEventHandler}
          moveNote={this.onMoveNoteEventHandler}
          archiveNote={this.onArchiveNoteEventHandler} />
        <NoteFooter />
      </div>
    );
  }
}