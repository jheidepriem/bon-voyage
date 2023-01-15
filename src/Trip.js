class Trip {
  constructor(data) {
    this.data = data;
  }

  findTripByDestinationId(id) {
    return this.data.filter((trip) => trip.destinationID === id);
  }

  retrieveNumTravelers(travelers) {
    return this.data.filter((trip) => trip.travelers === travelers);
  }

  retrieveTripDuration(duration) {
    return this.data.filter((trip) => trip.duration === duration);
  }

  calculateTripCost(destinations, userTrip) {
    let tripTotal = userTrip.reduce((sum, trip) => {
      destinations.forEach((destination) => {
        if (destination.id === trip.destinationID) {
          sum +=
            (destination.estimatedLodgingCostPerDay * trip.duration +
            destination.estimatedFlightCostPerPerson * trip.travelers) * 1.1 
        }
      });
      return sum;
    }, 0);
    return Number(tripTotal.toFixed(0));
  }
}

module.exports = Trip;
