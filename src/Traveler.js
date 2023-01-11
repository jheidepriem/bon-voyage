const dayjs = require('dayjs')
class Traveler {
  constructor(travelerData) {
    this.userID = travelerData.userID;
    this.name = travelerData.name;
    this.trips = travelerData.trips
    }


viewPendingTrips() {
return this.trips.filter(trip => trip.status === 'pending')
}

viewPastTrips() {
return this.trips.filter(trip => dayjs(trip.date)).isBefore(dayjs('2021/01/01')) 

}

viewFutureTrips(){
return this.trips.filter(trip => dayjs(trip.date)).isAfter('2021/01/01')

}

calculateTripCost() {
  
}

}
module.exports = Traveler;