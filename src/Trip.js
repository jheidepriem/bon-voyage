class Trip {
  constructor(data) {
    this.data = data;
  }

  calculateTripCost(destinations, userTrip) {
    let tripTotal = userTrip.reduce((sum, trip) => {
      destinations.forEach((destination) => {
        if (destination.id === trip.destinationID) {
          sum +=
            (destination.estimatedLodgingCostPerDay * trip.duration +
              destination.estimatedFlightCostPerPerson * trip.travelers) *
            1.1;
        }
      });
      return sum;
    }, 0);
    return Number(tripTotal.toFixed(0));
  }
}

module.exports = Trip;
