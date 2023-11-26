/* eslint-disable react/prop-types */
import React from "react";
import autoBind from 'auto-bind';

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      titleMaxLength: 50,
    };

    autoBind(this);
  }

  onKeyUpTitleEventHandler(e) {
    this.setState((previousState) => {
      let titleMaxLength = previousState.titleMaxLength;
      const title = e.target.value;

      titleMaxLength = 50 - (title.length);

      if(((e.keyCode >= 65 && e.keyCode <= 90) ||
      (e.keyCode >= 97 && e.keyCode <= 122) ||
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 111) ||
      (e.keyCode >= 186 && e.keyCode <= 222) ||
      (e.keyCode === 8 || e.keyCode === 61 || e.keyCode === 173 || e.keyCode === 59)) &&
      (titleMaxLength <= 50 && titleMaxLength >= 0)){
        return {
          title,
          titleMaxLength,
        };
      }
    });
  }

  onChangeTitleEventHandler(e) {
    const title = e.target.value;
    this.setState({ title });
  }

  onChangeBodyEventHandler(e) {
    const body = e.target.value;
    this.setState({ body });
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState({ 
      title: '',
      body: '',
      titleMaxLength: 50,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="note-add">
        <h2 className="note-add__title">Note :</h2>
        <div>
          <div className="note-add__title-label">
            <label htmlFor="title">Title</label>
            <p className="note-add__textarea-character">Rest Character: {this.state.titleMaxLength}</p>
          </div>
          <input type="text" id="title" className="note-add__input" value={this.state.title} maxLength={50} 
            onChange={this.onChangeTitleEventHandler}
            onKeyUp={this.onKeyUpTitleEventHandler} />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea cols="30" id="body" rows="10" className="note-add__textarea" value={this.state.body}
            onChange={this.onChangeBodyEventHandler}></textarea>
        </div>
        <button type="submit" className="note-add__button-save">Save Note</button>
      </form>
    );
  }
}

export default AddNote;