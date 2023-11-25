/* eslint-disable react/prop-types */
function NoteSectionTitle({ title, desc }) {
  return (
    <div className="note-section">
      <h1 className="note-section__title">{title}</h1>
      <p className="note-section__desc">{desc}</p>
    </div>
  );
}

export default NoteSectionTitle;