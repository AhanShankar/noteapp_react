const NoteHistory = ({ notearray }) => {
  console.log(notearray);
  if (notearray.length <= 5)
    return (
      <div id="notehistory">
        {notearray.map((note) => {
          return (
            <div className="note">
              <div className="notetext">{note.text}</div>
              <div className="notetime">{formatTime(note.timestamp)}</div>
            </div>
          );
        })}
      </div>
    );
  else {
    return (
      <div id="notehistory">
        {notearray.slice(-5).map((note) => {
          return (
            <div className="note">
              <div className="notetext">{note.text}</div>
              <div className="notetime">{formatTime(note.timestamp)}</div>
            </div>
          );
        })}
      </div>
    );
  }
};
function formatTime(timestamp) {
  let date = new Date(timestamp * 1000).toLocaleString();
  console.log(date);
  return date.slice(0, 10);
}
export default NoteHistory;
