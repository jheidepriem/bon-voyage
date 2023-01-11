class Destinations {
  constructor(destinationData) {
    this.destinationData = destinationData
  }


returnDestination(id) {
  return this.destinationData.find(destination =>  destination.id === id);
  }





}