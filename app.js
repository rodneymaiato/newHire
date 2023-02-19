//! date variables
const milisecondsToDays = 86400000;
//! Get start date from form
const hireDate = document.getElementById("hireDate"); // assign hireDate object to a variable name hireDate
//! Get the last day of the current year in number format
const lastDayOfYear = function () {
  const currYear = new Date();
  currYear.setMonth(11);
  currYear.setDate(31);
  currYear.setHours(0, 0, 0);
  return currYear.getTime() / milisecondsToDays;
};
function calcSickDays(start, end) {
  const startDate = new Date(hireDate.value + "T00:00");
  start = startDate.getTime() / milisecondsToDays;
  end = lastDayOfYear();
  const eligSickDays = Math.round(((end - start) / 365) * 2 * 6) / 2;

  const result = document.getElementById("sick-day-calc");
  return (result.innerHTML = `<mark>${eligSickDays} paid sick days</mark>, per hire date of ${startDate.toLocaleDateString()}`);
}
//! What to run when you click submit
formSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  calcSickDays();
});
