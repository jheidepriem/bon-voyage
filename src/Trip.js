class Trip {
  constructor(tripData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
  }

  returnDestination(id) {
  return this.tripData = data.filter(user => user.userID === id);
  }


//create cost for pending trips, takes in destination cost parameters





}
module.exports = Trip;
