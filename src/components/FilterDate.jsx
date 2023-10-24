const FilterDate = ({ setSelectedDate, todayDate }) => {
  // Function to handle date selection and update state
  const handleDate = (e) => {
    setSelectedDate(e.target.value.toLocaleString());
  };

  return (
    // List item for selecting a date
    <li className="date-selector">
      <span>Select a date:</span>
      {/* Input element to choose a date with a maximum value of 'todayDate' */}
      <input type="date" max={todayDate} onChange={handleDate} />
    </li>
  );
};
export default FilterDate;
