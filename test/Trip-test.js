const { expect } = require("chai");
const Trip = require("../src/Trip");

describe("Trip", () => {
  let trip;

  beforeEach(() => {
    const tripData = [
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
    trip = new Trip(tripData);
  });

  it("should be a function", () => {
    expect(Trip).to.be.a("function");
  });

  it("should be an instance of trip", () => {
    expect(trip).to.be.an.instanceOf(Trip);
  });

  it("should find a trip by id", () => {
    expect(trip.findTripByTripId(22)).to.deep.equal([
      {
        id: 22,
        userID: 7,
        destinationID: 22,
        travelers: 2,
        date: "2020/06/01",
        duration: 10,
        status: "approved",
      },
    ]);
  });

  it("should find a trip by destination id", () => {
    expect(trip.findTripByDestinationId(22)).to.deep.equal([
      {
        id: 22,
        userID: 7,
        destinationID: 22,
        travelers: 2,
        date: "2020/06/01",
        duration: 10,
        status: "approved",
      },
    ]);
  });

  it("should find a trip by the number of travelers", () => {
    expect(trip.retrieveNumTravelers(2)).to.deep.equal([
      {
        id: 22,
        userID: 7,
        destinationID: 22,
        travelers: 2,
        date: "2020/06/01",
        duration: 10,
        status: "approved",
      },
    ]);
  });

  it("should find a trip by duration", () => {
    expect(trip.retrieveTripDuration(10)).to.deep.equal([
      {
        id: 22,
        userID: 7,
        destinationID: 22,
        travelers: 2,
        date: "2020/06/01",
        duration: 10,
        status: "approved",
      },
    ]);
  });

  it("should return undefined if there is no destination id", () => {
    expect(trip.findTripByDestinationId(51)).to.equal(undefined);
  });

  it("should return undefined if there is no trip id", () => {
    expect(trip.findTripByTripId(100)).to.equal(undefined);
  });


});
