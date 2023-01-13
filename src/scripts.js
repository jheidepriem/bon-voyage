import './css/styles.css';
import './images/bon-voyage.jpg'
import './images/bon-voyage7small.jpg'
import './images/turing-logo.png'
import Traveler from './Traveler';
import Trip from './Trip'
import Destinations from './Destinations';
import { fetchAllData } from './apiCalls'
import * as dayjs from "dayjs";

const userNameInput = document.getElementById("userNameInput");
const passwordInput = document.getElementById("passwordImput");
const loginMessage = document.getElementById("loginMessage");
const loginButton = document.getElementById("loginButton");
const yearlyExpenses = document.getElementById("yearlyExpenses");
const userGreeting = document.getElementById("userGreetingHeader");
const dateInput = document.getElementById("dateInput");
const durationInput = document.getElementById("durationInput");
const numTravelerInput = document.getElementById("numberOfTravelersInput");
const dropDownMenu = document.getElementById("dropDownMenu");
const submitButton = document.getElementById("submitButton");
const tripTotalSection = document.getElementById("tripEstimate");
const pastTripSection = document.getElementById("pastTrips");
const pendingTripSection = document.getElementById("pendingTrips");
const upcomingTripSection = document.getElementById("upcomingTrips");
const backButton = document.getElementById("backButton")

let traveler
let trip
let destinations
let travelerData
let destinationsData

fetchAllData().then((data) => {
  console.log(data)
  travelerData = data[0].travelerData;
  tripData = data[1].tripData;
  destinationsData = data[2].destinationsData;
  
});

const newTraveler = () => (traveler = new Traveler(travelerData, trips))
const newTrip = () => (trip = new Trip(data))
const newDestination = () => (destinations = new Destinations(data))

//event listeners

// loginButton.addEventListener(click, loginFunction());
// submitButton.addEventListener(click, addTripToPending());
// backButton.addEventListener(click, goBack());

const loadPageFunctions = () => {
  addTravelerTripInfo()
  addDestToDropDown(destinations.findDestinationByDestination())
  newTraveler()
  newTrip()
  newDestination()
}

const addTravelerTripInfo = () => {
  showUserName()
  showTotalYearlyCost()
  displayUsersPastTrips()
  displayUsersUpComingTrips()
  displayUsersPendingTrips()
}

const addDestToDropDown = (destinationsNames) => {
  destinationsNames.forEach((destinations) => {
    dropDownMenu.innerHTML += `<option value="${destinations.findDestinationByDestination}">${destinations.findDestinationByDestination}</option>`
  })
}

const showUserName = () => {
  userGreeting.innerText = `Hello, ${traveler.name}!`;
};

const showTotalYearlyCost = () => {
  yearlyExpenses.innerText = `${traveler.calculateTotalTravelerCost(destinations.data, trip.data)}`
}

const displayUsersPastTrips = () => {
  pastTripSection.innerHTML = ''
  const pastTrips = traveler.viewPastTrips()
  pastTrips.forEach(trip => {
  const destination = destination.findDestinationByDestination(trip.destinationID)
  pastTripSection.innerHTML += ``
  })
 
}

const displayUsersUpComingTrips = () => {
  upcomingTripSection.innerHTML = ''
}

const displayUsersPendingTrips = () => {
  pendingTripSection.innerHTML = ''

}

const displayTripTotal = () => {
  tripTotalSection.innerText = `${trip.calculateTripCost(destinations.data, trip.data)}`
}


const goBackToSearch = () => {
  dateInput.value = '';
  durationInput.value = '';
  numTravelerInput.value = '';
  dropDownMenu.value = '';
}


const show = (element) => {
  element.classList.remove('hidden')
}

const hide = (element) =>  {
  element.classList.add('hidden')
}
