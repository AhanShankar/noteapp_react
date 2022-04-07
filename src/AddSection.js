const AddSection = ({ toggleModal }) => {
  //   console.log(props);
  return (
    <div id="addsection">
      <div
        id="addbutton"
        onClick={() => {
          toggleModal();
        }}
      >
        Add note
      </div>
    </div>
  );
};
export default AddSection;
