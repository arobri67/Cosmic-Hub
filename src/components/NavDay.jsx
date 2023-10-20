import "./NavDay.css";
const NavDay = ({ selectedDate, setSelectedDate }) => {
  const handleDatePlusOne = () => {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() + 1);
    setSelectedDate(date.toISOString().slice(0, 10));
  };
  const handleDateMinusOne = () => {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() - 1);
    setSelectedDate(date.toISOString().slice(0, 10));
  };
  return (
    <>
      <div
        role="button"
        id="minus-one"
        onClick={() => handleDateMinusOne()}
      ></div>

      <div
        role="button"
        id="plus-one"
        onClick={() => handleDatePlusOne()}
      ></div>
    </>
  );
};

export default NavDay;
