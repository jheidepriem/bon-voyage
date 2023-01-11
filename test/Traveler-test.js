const { expect } = require("chai");
const Traveler = require("../src/Traveler");
const Trip = require("../src/Trip");

describe("Traveler", () => {
  let traveler;

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
          destinationID: 62,
          travelers: 11,
          date: "2021/01/01",
          duration: 25,
          status: "pending",
        },
        {
          id: 22,
          userID: 7,
          destinationID: 78,
          travelers: 2,
          date: "2020/06/01",
          duration: 10,
          status: "approved",
        },
      ],
    });
  });
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
  expect(user.returnUserGreeting()).to.equal("Ham Leadbeater");
});

it("should return users past trips", () => {
  expect(user.viewPastTrips()).to.equal([
    {
      id: 22,
      userID: 7,
      destinationID: 78,
      travelers: 2,
      date: "2020/06/01",
      duration: 10,
      status: "approved",
    },
  ]);

  it("should return users pending trips", () => {
    expect(user.viewPendingTrips()).to.equal([
      {
        id: 55,
        userID: 7,
        destinationID: 62,
        travelers: 11,
        date: "2021/01/01",
        duration: 25,
        status: "pending",
      },
    ]);
  });

  it("should return users upcoming trips", () => {});
});
