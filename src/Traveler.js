const dayjs = require('dayjs')
class Traveler {
  constructor(travelerData) {
    this.userID = travelerData.userID;
    this.name = travelerData.name;
    this.trips = travelerData.trips
    }


returnUserGreeting() {
    return this.name.split(" ")[0];
  }

viewPendingTrips() {
const past = this.trips.filter(trip => trip.status === 'pending')
return past
}

viewPastTrips() {
const past = this.trips.filter(trip => dayjs(trip.date).isBefore('2021/01/01')) 
return past 

}

viewUpcomingTrips(){
const futureTrips = this.trips.filter(trip => dayjs(trip.date).isAfter('2021/01/01'))
return futureTrips

}

calculateYearlyTripCost() {
  
}

}
module.exports = Traveler;