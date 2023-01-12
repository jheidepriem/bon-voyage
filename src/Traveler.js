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

calculateTripCost(destinations) {
  let tripTotal = destinations.reduce((sum, destination) => {
   this.trips.forEach(trip => {
      if(trip.destinationID === destinations.id) {
        sum += (destination.estimatedLodgingCostPerDay * trip.duration) + 
        (destination.estimatedFlightCostPerPerson * trip.travelers)
      }
      return sum
    }, 0)
    return tripTotal
    })
  }
}

calculateYearlyExpenses() {
  
}
  

 
  
  


//if the destination id is the same as the trip id, multiply the destination. estimatedLodgingCostPerDay
// by the trips.duration and add that to estimatedFlightCostPerPerson 8 this.trips.travelers


module.exports = Traveler;