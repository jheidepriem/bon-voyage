const { expect } = require("chai");
const Traveler = require("../src/Traveler");
const Trip = require("../src/Trip");

describe("Traveler", () => {
  let trips;
  let tripData1;
  let tripData2;
  let tripData3;
  let traveler;
  let travelerData;
 
  beforeEach(() => {
    travelerData = {
      id: 1,
      name: "Ham Leadbeater",
      trips: [
        tripData1 = {
        id: 2,
        userID: 7,
        destinationID: 25,
        travelers: 5,
        date: "2022/06/01",
        duration: 18,
        status: "pending",
      },
      tripData2 = {
        id: 55,
        userID: 7,
        destinationID: 62,
        travelers: 11,
        date: "2021/01/01",
        duration: 25,
        status: "approved",
      },
      tripData3 = {
        id: 22,
        userID: 7,
        destinationID: 78,
        travelers: 2,
        date: "2020/06/01",
        duration: 10,
        status: "approved",
      }]
    }
    traveler = new Traveler(travelerData)
    trips = new Trip([tripData1, tripData2, tripData3])
  });
  it("should be a function", () => {
    expect(Traveler).to.be.a("function");
  });

  it("should be an instance of traveler", () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it("should have an id", () => {
    expect(traveler.id).to.equal(1);
  });

  it("should have a name", () => {
    expect(traveler.name).to.equal("Ham Leadbeater");
  })

});
