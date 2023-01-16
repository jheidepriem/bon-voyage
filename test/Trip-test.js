const { expect } = require("chai");
const Trip = require("../src/Trip");

describe("Trip", () => {
  let trips;
  let tripData;
  let destinations;
  let trip;

  beforeEach(() => {
    trips = [
      {
        id: 22,
        userID: 7,
        destinationID: 22,
        travelers: 2,
        date: "2020/06/01",
        duration: 10,
        status: "approved",
      },
    ];

    destinations = [
      {
        id: 22,
        destination: "Rome, Italy",
        estimatedLodgingCostPerDay: 90,
        estimatedFlightCostPerPerson: 650,
        image:
          "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "people standing inside a colosseum during the day",
      },
    ];

    trip = new Trip(trips);
  });

  it("should be a function", () => {
    expect(Trip).to.be.a("function");
  });

  it("should be an instance of trip", () => {
    expect(trip).to.be.an.instanceOf(Trip);
  });

  it("should calculate trip cost", () => {
    expect(trip.calculateTripCost(destinations, trips)).to.equal(2420);
  });

  it("should return undefined if no destinatonID is found", () => {
    expect(trip.calculateTripCost()).to.equal("No destinations or trip found!");
  });

  it("should return undefined if no user trip is found", () => {
    expect(trip.calculateTripCost()).to.equal("No destinations or trip found!");
  });
});
