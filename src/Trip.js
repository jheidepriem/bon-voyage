class Trip {
  constructor(id, data) {
    this.id = id;
    this.userHistory = data.filter((obj) => obj.userID === this.id);
  }
}