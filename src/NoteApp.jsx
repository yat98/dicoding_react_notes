import React from "react";
import AddNote from "./AddNote";
import NoteHeader from "./NoteHeader";
import './assets/styles/style.css';
import NoteSectionTitle from "./NoteSectionTitle";
import { getInitialData } from "./utils";
import NoteList from "./NoteList";
import autoBind from 'auto-bind';
import Swal from 'sweetalert2';

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    const notes = getInitialData();
    this.state = {
      notes,
      searchNotes: notes,
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
      notes: [
        notes,
        ...previousState.notes,
      ],
      searchNotes: [
        notes,
        ...previousState.notes,
      ]
    }));

    Swal.fire({
      title: "Added!",
      text: "Your note has been added.",
      icon: "success",
      confirmButtonColor: "#8BD3DD",
    });
  }

  onArchiveNoteEventHandler(id) {
    Swal.fire({
      title: "Are you sure to archive note?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8BD3DD",
      cancelButtonColor: "#DD8B8B",
      confirmButtonText: "Yes, archive it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Archived!",
          text: "Your note has been archived.",
          icon: "success",
          confirmButtonColor: "#8BD3DD",
        });
        console.log(id);
      }
    });
  }

  onMoveNoteEventHandler(id) {
    Swal.fire({
      title: "Are you sure to move note?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8BD3DD",
      cancelButtonColor: "#DD8B8B",
      confirmButtonText: "Yes, move it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Moved!",
          text: "Your note has been moved.",
          icon: "success",
          confirmButtonColor: "#8BD3DD",
        });
        console.log(id);
      }
    });
  }

  onDeleteNoteEventHandler(id) {
    Swal.fire({
      title: "Are you sure to delete note?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8BD3DD",
      cancelButtonColor: "#DD8B8B",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your note has been deleted.",
          icon: "success",
          confirmButtonColor: "#8BD3DD",
        });
        console.log(id);
      }
    });
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader />
        <NoteSectionTitle 
          title="Add Note" 
          desc="quick and intuitive tool that enables users to capture and store important information effortlessly" 
        />
        <AddNote addNote={this.onAddNoteEventHandler} />
        <NoteSectionTitle 
          title="List Note" 
          desc="create and manage organized lists of notes seamlessly" 
        />
        <NoteList notes={this.state.notes.filter(note => !note.archived)} type="list" 
          deleteNote={this.onDeleteNoteEventHandler}
          moveNote={this.onMoveNoteEventHandler}
          archiveNote={this.onArchiveNoteEventHandler} />
        <NoteSectionTitle 
          title="Archive Note" 
          desc="seamlessly archive notes that are no longer immediately relevant but still important for reference" 
        />
        <NoteList notes={this.state.notes.filter(note => note.archived)} type="archive" 
          deleteNote={this.onDeleteNoteEventHandler}
          moveNote={this.onMoveNoteEventHandler}
          archiveNote={this.onArchiveNoteEventHandler} />
        <div className="note-footer">
          <p>Made with 💙 from Gorontalo. Insipired from <a href="https://saweria.co/">saweria</a> UI design.</p>
          <p>PT Harta Tahta Sudah Saja</p>
        </div>
      </div>
    );
  }
}