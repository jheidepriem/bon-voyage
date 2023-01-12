class Destinations {
  constructor(data) {
    this.data = data
}

findDestinationById(id) {
    return this.data.filter(destination => destination.id === id);
  }

findDestinationByDestination(destinName) {
  return this.data.filter(destination => destination.destination === destinName)
  }


findLodgingCost(lodgeCost) {
  return this.data.filter(destination => destination.estimatedLodgingCostPerDay === lodgeCost)
}

findFlightCost(flightCost) {
  return this.data.filter(destination => destination.estimatedFlightCostPerPerson === flightCost)
}

}


module.exports = Destinations;