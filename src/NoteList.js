import { useState } from "react";
const NoteList = ({ notearray }) => {
  const [sortoption, setSortoption] = useState("none");
  const [yearoption, setYearoption] = useState(+0);
  const [monthoption, setMonthoption] = useState(0);
  const handlesortChange = (e) => {
    setSortoption(e.target.value);
  };
  const handleYearchange = (e) => {
    setYearoption(e.target.value);
  };
  const handleMonthchange = (e) => {
    setMonthoption(e.target.value);
  };
  function comparefnc(note_a, note_b) {
    if (sortoption === "ascending")
      return note_a.timestamp >= note_b.timestamp ? 1 : -1;
    // return Date(note_a.timestamp) >= Date(note_b.timestamp) ? 1 : -1;
    else if (sortoption === "descending")
    return note_a.timestamp <= note_b.timestamp ?1:-1;
      // return Date(note_a.timestamp * 1000) < Date(note_b.timestamp * 1000)
        // ? 1
        // : -1;
    else return 0;
  }
  function filterYear(note) {
    if (yearoption != 0) {
      let date = new Date(note.timestamp * 1000);
      let year = date.getFullYear();
      if (year == yearoption) return true;
      else return false;
    }
    return true;
  }
  function filterMonth(note) {
    if (monthoption != 0) {
      let date = new Date(note.timestamp * 1000);
      let month = date.getMonth() + 1;
      if (month == monthoption) return true;
      else return false;
    } else return true;
  }
  return (
    <div id="notelist">
      <div id="displayoptions">
        <select
          id="sortdropdown"
          value={sortoption}
          onChange={handlesortChange}
        >
          <option value="none">none</option>
          <option value="ascending">Sort Ascending</option>
          <option value="descending">Sort Descending</option>
        </select>
        <select
          id="yeardropdown"
          value={yearoption}
          onChange={handleYearchange}
        >
          {generateYears(1970, 2022)}
        </select>
        <select
          id="monthdropdown"
          onChange={handleMonthchange}
          value={monthoption}
        >
          {generateMonths()}
        </select>
      </div>
      <div id="notedisplay">
        {notearray
          .filter(filterYear)
          .filter(filterMonth)
          .sort(comparefnc)
          .map((note) => {
            return (
              <div className="note">
                <div className="notetext">{note.text}</div>
                <div className="notetime">{formatTime(note.timestamp)}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
function formatTime(timestamp) {
  let date = new Date(timestamp * 1000).toLocaleString();
  return date.slice(0, 10);
}
function generateYears(start, end) {
  let years = [];
  years.push(<option value={0}>None</option>);
  for (let i = start; i <= end; i++) {
    years.push(<option value={i}>{i}</option>);
  }
  return years;
}

function generateMonths() {
  let monthnames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let months = [];
  months.push(<option value={0}>none</option>);
  for (let i = 1; i <= 12; i++) {
    months.push(<option value={i}>{monthnames[i - 1]}</option>);
  }
  return months;
}
export default NoteList;
