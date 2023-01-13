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
let trips = []

fetchAllData().then((data) => {
  console.log(data)
  traveler = data[0].travelerData;
  trip = data[1].tripData;
  destinations = data[2].destinationsData;
  loadPageFunctions();
});

//event listeners

// loginButton.addEventListener(click, loginFunction());
// submitButton.addEventListener(click, addTripToPending());
// backButton.addEventListener(click, goBack());

const loadPageFunctions = () => {
  showUserInfo()
  addDestToDropDown()
}

const addDestToDropDown = (destinationNames) => {
  destinationNames.forEach((destination) => {
    dropDownMenu.innerHTML += `<option value="${destination}">${destination}</option>`
  })
}

const showUserInfo = () => {
  userNameInput.innerText = `${traveler.name}`;
};

const showTotalYearlyCost = () => {

}

console.log('This is the JavaScript entry file - your code begins here.');



