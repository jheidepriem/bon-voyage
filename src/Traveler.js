class Traveler {
  constructor(id, data) {
    this.id = id;
    this.travelerData = data.filter((obj) => obj.userID === this.id);
  }
}