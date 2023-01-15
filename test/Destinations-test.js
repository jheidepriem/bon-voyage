const { expect } = require("chai");
const Destinations = require("../src/Destinations");

describe("Destinations", () => {
  let destinations;

  beforeEach(() => {
    const destinationsData = [
      {
        id: 25,
        destination: "New York, New York",
        estimatedLodgingCostPerDay: 175,
        estimatedFlightCostPerPerson: 200,
        image:
          "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "people crossing the street during the day surrounded by tall buildings and advertisements",
      },
    ];
    destinations = new Destinations(destinationsData);
  });

  it("should be a function", () => {
    expect(Destinations).to.be.a("function");
  });

  it("should be an instance of traveler", () => {
    expect(destinations).to.be.an.instanceOf(Destinations);
  });

  it("should find a destination by id", () => {
    expect(destinations.findDestinationById(25)).to.deep.equal([
      {
        id: 25,
        destination: "New York, New York",
        estimatedLodgingCostPerDay: 175,
        estimatedFlightCostPerPerson: 200,
        image:
          "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "people crossing the street during the day surrounded by tall buildings and advertisements",
      },
    ]);
  });

  it("should return the destination ID when given the destination name", function () {
    expect(destinations.findIdByName("New York, New York")).to.equal(25);
  });
});
