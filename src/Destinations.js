class Destinations {
  constructor(data) {
    this.data = data;
  }

  findDestinationById(id) {
    return this.data.filter((destination) => destination.id === id);
  }

  findIdByName(destinName) {
    const destinID = this.data.find((destination) => {
      return destination.destination === destinName;
    });
    return destinID.id;
  }
}

module.exports = Destinations;
