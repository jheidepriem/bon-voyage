class Destinations {
  constructor(data) {
    this.data = data;
  }

  findDestinationById(id) {
    if (!id) return "Sorry, no id found!"
    return this.data.filter((destination) => destination.id === id);
  }

  findIdByName(destinName) {
    if (!destinName) return "No destination name found!"
    const destinID = this.data.find((destination) => {
      return destination.destination === destinName;
    });
    return destinID.id;
  }
}

module.exports = Destinations;
