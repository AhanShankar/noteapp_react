import "./ModalForm.css";
const ModalForm = ({ toggle, toggleModal, addNote, createNote }) => {
  const submitnote = (text) => {
    if (text.length > 0) {
      const timestamp = Date.now() / 1000;
      const note = createNote(text, timestamp);
      addNote(note, timestamp);
      toggleModal();
    }
  };
  if (toggle) {
    return (
      <div
        id="modalform"
        onSubmit={(e) => {
          e.preventDefault();
          let text = e.target.text.value;
          submitnote(text);
        }}
      >
        <form>
          <textarea type="text" className="noteinput" name="text"></textarea>
          <div id="buttonarea">
            <button
              onClick={() => {
                toggleModal();
              }}
            >
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  } else {
    return null;
  }
};
export default ModalForm;
