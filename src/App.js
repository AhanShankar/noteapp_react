import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import AddSection from "./AddSection";
import NoteHistory from "./NoteHistory";
import ModalForm from "./ModalForm";
import NoteList from "./NoteList";
function App() {
  const [notes, setNotes] = useState([
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      timestamp: "1301090400",
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ",
      timestamp: "1301090400",
    },
    {
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
      timestamp: "1646656601",
    },
    { text: "learn js", timestamp: "1617799001" },

    {
      text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,",
      timestamp: "1503936148",
    },
    {
      text: "The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains",
      timestamp: "1303831956",
    },
  ]);
  const [modaltoggle, setModaltoggle] = useState(false);
  const toggleModal = () => {
    setModaltoggle(!modaltoggle);
  };
  const addNote = (Note) => {
    setNotes([...notes, Note]);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <ModalForm
          toggle={modaltoggle}
          toggleModal={toggleModal}
          createNote={createNote}
          addNote={addNote}
        ></ModalForm>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddSection toggleModal={toggleModal}></AddSection>
                <NoteHistory notearray={notes}></NoteHistory>
              </>
            }
          ></Route>
          <Route
            path="/history"
            element={<NoteList notearray={notes}></NoteList>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function createNote(text, timestamp) {
  return { text, timestamp };
}
const dummydata = [{ text: "a1", timestamp: "1649328534171" }];

export default App;
