const Traveler = require("./Traveler");

class Trip {
  constructor(data) {
    this.data = data;
  }

  findTripByTripId(id) {
    return this.data.filter(trip => trip.id === id);
  }

  findTripByDestinationId(destinId) {
    return this.data.filter(trip => trip.destinationID === destinId);
  }

  retrieveNumTravelers(travelers) {
    return this.data.filter(trip => trip.travelers === travelers)
  }

  retrieveTripDuration(duration) {
    return this.data.filter(trip => trip.duration === duration)
  }


  


}
module.exports = Trip;
