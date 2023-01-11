class Destinations {
  constructor(destinData) {
    this.id = destinData.id;
    this.destination = destinData.destination;
    this.estimatedLodgingCostPerDay = destinData.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = destinData.estimatedFlightCostPerPerson;

  }

returnDestination(id) {
  return this.destinData.find(destination =>  destination.id === id);
  }











}