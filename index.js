/* Your Code Here */

function createEmployeeRecord(employee) {
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}
function createEmployeeRecords(employeeData) {
  return employeeData.map((employee) => createEmployeeRecord(employee));
}

function createTimeInEvent(dateTime) {
  let [date, hour] = dateTime.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date,
  });
  return this;
}

function createTimeOutEvent(dateTime) {
  let [date, hour] = dateTime.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date,
  });
  return this;
}

function hoursWorkedOnDate(date) {
  let inEvent = this.timeInEvents.find((event) => event.date === date);
  let outEvent = this.timeOutEvents.find((event) => event.date === date);
  return (outEvent.hour - inEvent.hour) / 100;

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find((employee) => employee.firstName === firstNameString);
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce(
    (total, employee) => total + allWagesFor.call(employee),
    0
  );
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
