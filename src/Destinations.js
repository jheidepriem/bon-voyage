class Destinations {
  constructor(data) {
    this.data = data;
  }

  findDestinationById(id) {
    return this.data.filter((destination) => destination.id === id);
  }

  findDestination() {
    const result = this.data
      .map((location) => {
        return location.destination;
      })
      .sort((a, b) => {
        return a.localeCompare(b);
      });
    return result;
  }

  findIdByName(destinName) {
    const destinID = this.data.find((destination) => {
      return destination.destination === destinName;
    });
    return destinID.id;
  }

  findLodgingCost(lodgeCost) {
    return this.data.filter(
      (destination) => destination.estimatedLodgingCostPerDay === lodgeCost
    );
  }

  findFlightCost(flightCost) {
    return this.data.filter(
      (destination) => destination.estimatedFlightCostPerPerson === flightCost
    );
  }
}

module.exports = Destinations;
