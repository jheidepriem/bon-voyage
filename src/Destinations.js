class Destinations {
  constructor(id, data) {
    this.id = id;
    this.destinData = data.find(destination =>  destination.id === id)
}












}
module.exports = Destinations;