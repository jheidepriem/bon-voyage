const { expect } = require("chai");
const Trip = require("../src/Trip");

describe("Trip", () => {
  let trip;
  let tripData1;
  let tripData2;
  let tripData3;
  
  beforeEach(() => {
    tripData1 = {
      id: 2,
      userID: 7,
      destinationID: 25,
      travelers: 5,
      date: "2022/06/01",
      duration: 18,
      status: "pending",
    };
    tripData2 = {
      id: 55,
      userID: 7,
      destinationID: 62,
      travelers: 11,
      date: "2021/01/01",
      duration: 25,
      status: "approved",
    };
    tripData3 = {
      id: 22,
      userID: 7,
      destinationID: 78,
      travelers: 2,
      date: "2020/06/01",
      duration: 10,
      status: "approved",
    };
   trip = new Trip(tripData);
  })
});