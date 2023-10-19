const FilterDate = ({ setSelectedDate, todayDate }) => {
  const handleDate = (e) => {
    setSelectedDate(e.target.value.toLocaleString());
  };

  return (
    <div className="date-selector">
      <span>Select a date:</span>
      <input type="date" max={todayDate} onChange={handleDate} />
    </div>
  );
};
export default FilterDate;
