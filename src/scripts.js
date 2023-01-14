import "./css/styles.css";
import "./images/bon-voyage7.jpg";
import "./images/bon-voyage7small.jpg";
import Traveler from "./Traveler";
import Trip from "./Trip";
import Destinations from "./Destinations";
import { fetchAllData, addData } from "./apiCalls";
const dayjs = require("dayjs");

const userNameInput = document.getElementById("userNameInput");
const passwordInput = document.getElementById("passwordImput");
const loginMessage = document.getElementById("loginMessage");
const loginButton = document.getElementById("loginButton");
const yearlyExpenses = document.getElementById("yearlyExpenses");
const userGreeting = document.getElementById("userGreetingHeader");
const dateInput = document.getElementById("dateInput");
const durationInput = document.getElementById("durationInput");
const numTravelerInput = document.getElementById("numberOfTravelersInput");
const dropDownMenu = document.getElementById("dropDownMenuDestinations");
const submitButton = document.getElementById("submitButton");
const tripTotalSection = document.getElementById("tripEstimate");
const pastTripSection = document.getElementById("pastTrips");
const pendingTripSection = document.getElementById("pendingTrips");
const upcomingTripSection = document.getElementById("upcomingTrips");
const backButton = document.getElementById("backButton");

let destinationsData;
let travelersData;
let tripsData;
let traveler;
let trip;
let destinations;
let currentTraveler;

fetchAllData().then((data) => {
  destinationsData = data[0].destinations;
  travelersData = data[1].travelers;
  tripsData = data[2].trips;
  trip = new Trip(tripsData);
  destinations = new Destinations(destinationsData);
  currentTraveler = travelersData[32];
  traveler = new Traveler(currentTraveler, tripsData);
  loadPageFunctions();
});

const loadPageFunctions = () => {
  addTravelerTripInfo();
  addDestToDropDown();
};

const addTravelerTripInfo = () => {
  showUserName();
  showTotalYearlyCost();
  displayUpComingTrips();
  displayPastTrips();
  displayPendingTrips();
};

const addDestToDropDown = () => {
  return destinationsData.forEach((destination) => {
    dropDownMenu.innerHTML += `<option value="${destination.destination}">${destination.destination}</option>`;
  });
};

const showUserName = () => {
  userGreeting.innerText = `Hello, ${traveler.name}!`;
};

const showTotalYearlyCost = () => {
  yearlyExpenses.innerText = `You're total yearly spending is : 
  $${traveler.calculateTotalTravelerCost(
    destinationsData,
    tripsData
  )}`;
};

const displayUpComingTrips = () => {
  upcomingTripSection.innerHTML = "";
  const upcomingTrips = traveler.viewUpcomingTrips();
  upcomingTrips.forEach((trip) => {
    const destination = destinations.findDestinationById(trip.destinationID);
    upcomingTripSection.innerHTML += `
  <section class='trip-section'>
    <section class="trip-info">
      <h3 class="trip-destination name">${destination[0].destination}</h3>
      <h3 class="trip-date">${trip.date}</h3>
      <h3 class="trip-duration">${trip.duration} day stay</h3>
      <h3 class="trip-status">${trip.status}</h3>
    </section>
    <section class="image-container">
    <img class="trip-image" src="${destination[0].image}" alt="${destination[0].alt}"/>
    </section>
  </section>`;
  });
};

const displayPastTrips = () => {
  pastTripSection.innerHTML = "";
  const pastTrips = traveler.viewPastTrips();
  pastTrips.forEach((trip) => {
    const destination = destinations.findDestinationById(trip.destinationID);
    pastTripSection.innerHTML += `
  <section class='trip-section'>
    <section class="trip-info">
      <h3 class="trip-destination name">${destination[0].destination}</h3>
      <h3 class="trip-date">${trip.date}</h3>
      <h3 class="trip-duration">${trip.duration} day stay</h3>
      <h3 class="trip-status">${trip.status}</h3>
    </section>
    <section class="image-container">
    <img class="trip-image" src="${destination[0].image}" alt="${destination[0].alt}"/>
    </section>
  </section>`;
  });
};

const displayPendingTrips = () => {
  pendingTripSection.innerHTML = "";
  const pendingTrips = traveler.viewPendingTrips();
  pendingTrips.forEach((trip) => {
    const destination = destinations.findDestinationById(trip.destinationID);
    pendingTripSection.innerHTML += `
  <section class='trip-section'>
    <section class="trip-info">
      <h3 class="trip-destination name">${destination[0].destination}</h3>
      <h3 class="trip-date">${trip.date}</h3>
      <h3 class="trip-duration">${trip.duration} day stay</h3>
      <h3 class="trip-status">${trip.status}</h3>
    </section>
    <img class="trip-image" src="${destination[0].image}" alt="${destination[0].alt}"/>
  </section>`;
  });
};

const addTripToPending = (e) => {
  e.preventDefault();
  if (
    dateInput.value &&
    durationInput.value &&
    numTravelerInput.value &&
    dropDownMenu.value
  ) {
    const postTrip = {
      id: Number(tripsData.length + 1),
      userID: Number(traveler.id),
      destinationID: destinations.findIdByName(dropDownMenu.value),
      travelers: Number(numTravelerInput.value),
      date: dayjs(dateInput.value).format("YYYY/MM/DD"),
      duration: Number(durationInput.value),
      status: "pending",
      suggestedActivities: [],
    };
    displayTripTotal(); goBackToSearch();
    addData(postTrip, "trips")
      .then((data) => updateTrips(data), "data")
      .catch((err) => displayError(err));
  }
};
const updateTrips = (data) => {
  fetchAllData();
};

const displayTripTotal = () => {
  return tripTotalSection.innerText = `Your trip estimate is ${trip.calculateTripCost(destinationsData, tripsData)} 
  + a 10% travel agent booking fee`;
};

const goBackToSearch = () => {
  dateInput.value = "";
  durationInput.value = "";
  numTravelerInput.value = "";
  dropDownMenu.value = "";
};

const displayError = (err) => {
  totalTripSection.innerText = `UH OH! Something went wrong. Please try again. (${err})`;
};

const show = (element) => {
  element.classList.remove("hidden");
};

const hide = (element) => {
  element.classList.add("hidden");
};

// loginButton.addEventListener(click, loginFunction());
submitButton.addEventListener("click", addTripToPending);
// backButton.addEventListener(click, goBack());
