const { expect } = require("chai");
const Traveler = require("../src/Traveler");
const Destinations = require("../src/Destinations")


describe("Traveler", () => {
  let traveler
  let destinations
  
  beforeEach(() => {
    traveler = new Traveler({
      userID: 7,
      name: "Ham Leadbeater",
      trips: [
        {
          id: 2,
          userID: 7,
          destinationID: 25,
          travelers: 5,
          date: "2022/06/01",
          duration: 18,
          status: "approved",
        },
        {
          id: 55,
          userID: 7,
          destinationID: 50,
          travelers: 11,
          date: "2021/01/01",
          duration: 25,
          status: "pending",
        },
        {
          id: 22,
          userID: 7,
          destinationID: 22,
          travelers: 2,
          date: "2020/06/01",
          duration: 10,
          status: "approved",
        },
      ],
    });
     destinations = [
     {
      id: 25,
      destination: "New York, New York",
      estimatedLodgingCostPerDay: 175,
      estimatedFlightCostPerPerson: 200,
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      alt: "people crossing the street during the day surrounded by tall buildings and advertisements"
    },
    {
      id: 50,
      destination: "Hobart, Tasmania",
      estimatedLodgingCostPerDay: 1400,
      estimatedFlightCostPerPerson: 75,
      image: "https://images.unsplash.com/photo-1506982724953-b1fbe939e1e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      alt: "person sitting on brown rock in front of small body of water"
    },
    {
      id: 22,
      destination: "Rome, Italy",
      estimatedLodgingCostPerDay: 90,
      estimatedFlightCostPerPerson: 650,
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      alt: "people standing inside a colosseum during the day"
      }
    ]
  });

it("should be a function", () => {
  expect(Traveler).to.be.a("function");
});

it("should be an instance of traveler", () => {
  expect(traveler).to.be.an.instanceOf(Traveler);
});

it("should have a userID", () => {
  expect(traveler.userID).to.equal(7);
});

it("should have a name", () => {
  expect(traveler.name).to.equal("Ham Leadbeater");
});

it("should be able to add trips to user trip array", () => {
  expect(traveler.trips).to.equal(traveler.trips);
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
})
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

  it("should calculate total yearly cost for all trips", () => {
    expect(traveler.calculateYearlyTripCost(destinations, trips)).to.equal(2200)
    })
  });

