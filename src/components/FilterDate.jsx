const FilterDate = ({ setSelectedDate, todayDate }) => {
  const handleDate = (e) => {
    setSelectedDate(e.target.value.toLocaleString());
  };

  return (
    <li className="date-selector">
      <span>Select a date:</span>
      <input type="date" max={todayDate} onChange={handleDate} />
    </li>
  );
};
export default FilterDate;
