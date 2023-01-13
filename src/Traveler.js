const dayjs = require("dayjs");
class Traveler {
  constructor(data, trips) {
    this.id = data.id;
    this.name = data.name;
    this.trips = trips.filter(trip => trip.userID === this.id)
  }

  returnUserGreeting() {
    return this.name.split(" ")[0];
  }

  viewPendingTrips() {
    const pending = this.trips.filter((trip) => trip.status === "pending");
    return pending;
  }

  viewPastTrips() {
    const past = this.trips.filter((trip) =>
      dayjs(trip.date).isBefore("2021/01/01")
    );
    return past;
  }

  viewUpcomingTrips() {
    const futureTrips = this.trips.filter((trip) =>
      dayjs(trip.date).isAfter("2021/01/01")
    );
    return futureTrips;
  }

  calculateTotalTravelerCost(destinations, userTrip) {
    let tripTotal = userTrip.reduce((sum, trip) => {
      destinations.forEach(destination => {
        if (destination.id === trip.destinationID) {
          sum += (destination.estimatedLodgingCostPerDay * trip.duration + 
          destination.estimatedFlightCostPerPerson * trip.travelers) * 1.1
        }
      })
      return sum
    }, 0)
    return Number(tripTotal.toFixed(0))
  }
}

module.exports = Traveler;
