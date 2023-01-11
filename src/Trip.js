class Trip {
  constructor(id, data) {
    this.id = id;
    this.tripData = data.filter((obj) => obj.userID === this.id);
  }
}