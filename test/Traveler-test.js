const { expect } = require("chai");
const Traveler = require("../src/Traveler");

describe("Traveler", () => {
  let data;
  let destinations;
  let traveler;
  let trips;
  let trip1;
  let trip2;
  let trip3;
  let destination1;
  let destination2;
  let destination3;

  beforeEach(() => {
    data = {
      id: 7,
      name: "Ham Leadbeater",
    };
    (trip1 = {
      id: 2,
      userID: 7,
      destinationID: 25,
      travelers: 5,
      date: "2022/06/01",
      duration: 18,
      status: "approved",
    }),
      (trip2 = {
        id: 55,
        userID: 7,
        destinationID: 50,
        travelers: 11,
        date: "2021/01/01",
        duration: 25,
        status: "pending",
      }),
      (trip3 = {
        id: 22,
        userID: 7,
        destinationID: 22,
        travelers: 2,
        date: "2020/06/01",
        duration: 10,
        status: "approved",
      }),
      (destination1 = {
        id: 25,
        destination: "New York, New York",
        estimatedLodgingCostPerDay: 175,
        estimatedFlightCostPerPerson: 200,
        image:
          "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "people crossing the street during the day surrounded by tall buildings and advertisements",
      }),
      (destination2 = {
        id: 50,
        destination: "Hobart, Tasmania",
        estimatedLodgingCostPerDay: 1400,
        estimatedFlightCostPerPerson: 75,
        image:
          "https://images.unsplash.com/photo-1506982724953-b1fbe939e1e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        alt: "person sitting on brown rock in front of small body of water",
      }),
      (destination3 = {
        id: 22,
        destination: "Rome, Italy",
        estimatedLodgingCostPerDay: 90,
        estimatedFlightCostPerPerson: 650,
        image:
          "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "people standing inside a colosseum during the day",
      });
    trips = [trip1, trip2, trip3];
    destinations = [destination1, destination2, destination3];
    traveler = new Traveler(data, trips);
  });

  it("should be a function", () => {
    expect(Traveler).to.be.a("function");
  });

  it("should be an instance of traveler", () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it("should have a userID", () => {
    expect(traveler.id).to.equal(7);
  });

  it("should have a name", () => {
    expect(traveler.name).to.equal("Ham Leadbeater");
  });

  it("should be able to filter through travelers trips", () => {
    expect(traveler.trips).to.be.deep.equal([trip1, trip2, trip3]);
  });

  it("should return the name of user at login", () => {
    expect(traveler.returnUserGreeting()).to.equal("Ham");
  });

  it("should return users past trips", () => {
    expect(traveler.viewPastTrips()).to.deep.equal([
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
  it("should return users pending trips", () => {
    expect(traveler.viewPendingTrips()).to.deep.equal([
      {
        id: 55,
        userID: 7,
        destinationID: 50,
        travelers: 11,
        date: "2021/01/01",
        duration: 25,
        status: "pending",
      },
    ]);
  });

  it("should return users upcoming trips", () => {
    expect(traveler.viewUpcomingTrips()).to.deep.equal([
      {
        id: 2,
        userID: 7,
        destinationID: 25,
        travelers: 5,
        date: "2022/06/01",
        duration: 18,
        status: "approved",
      },
    ]);
  });

  it("should return traveler cost per year", () => {
    expect(traveler.calculateTotalTravelerCost(destinations, trips)).to.equal(
      "40,568"
    );
  });

  it("should return undefined if no destinatonID is found", () => {
    expect(traveler.calculateTotalTravelerCost()).to.equal(
      "No destinations or trip found!"
    );
  });

  it("should return undefined if no user trip is found", () => {
    expect(traveler.calculateTotalTravelerCost()).to.equal(
      "No destinations or trip found!"
    );
  });
});
