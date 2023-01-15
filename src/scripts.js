import "./css/styles.css";
import "./images/bon-voyage7.jpg";
import "./images/bon-voyage7small.jpg";
import Traveler from "./Traveler";
import Trip from "./Trip";
import Destinations from "./Destinations";
import { fetchAllData, addData } from "./apiCalls";
const dayjs = require("dayjs");

const bookButton = document.getElementById("bookbutton");
const dateInput = document.getElementById("dateInput");
const dropDownMenu = document.getElementById("dropDownMenuDestinations");
const loginPage = document.getElementById("loginPage");
const durationInput = document.getElementById("durationInput");
const loginButton = document.getElementById("banana");
const loginMessage = document.getElementById("loginMessage");
const numTravelerInput = document.getElementById("numberOfTravelersInput");
const mainDashboard = document.getElementById("mainDashboard");
const pastTripSection = document.getElementById("pastTrips");
const passwordInput = document.getElementById("passwordInput");
const pendingTripSection = document.getElementById("pendingTrips");
const submitButton = document.getElementById("submitButton");
const tripTotalSection = document.getElementById("tripEstimate");
const upcomingTripSection = document.getElementById("upcomingTrips");
const userGreeting = document.getElementById("userGreetingHeader");
const userNameInput = document.getElementById("userNameInput");
const yearlyExpenses = document.getElementById("yearlyExpenses");

let destinationsData;
let travelersData;
let tripsData;
let traveler;
let trip;
let destinations;
let currentTraveler;

const getUser = (id) => {
  fetchAllData(id).then((data) => {
  destinationsData = data[0].destinations;
  travelersData = data[1];
  tripsData = data[2].trips;
  trip = new Trip(tripsData);
  destinations = new Destinations(destinationsData);
  currentTraveler = travelersData;
  traveler = new Traveler(currentTraveler, tripsData);
  loadPageFunctions();
})
};

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
  yearlyExpenses.innerText = `Your total yearly travel expenses are : $${traveler.calculateTotalTravelerCost(
    destinationsData,
    traveler.trips
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

const goBackToSearch = () => {
  dateInput.value = "";
  durationInput.value = "";
  numTravelerInput.value = "";
  dropDownMenu.value = "";
};

const displayError = (err) => {
  tripTotalSection.innerText = `UH OH! Something went wrong. Please try again. (${err})`;
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
    hide(tripTotalSection)
    goBackToSearch();
    show(submitButton);
    hide(bookButton);
    addData(postTrip, "trips")
      .then((data) => console.log(data))
      .then(() => updateTrips(traveler.id))
      .catch((err) => displayError(err));
  }
};

const updateTrips = (id) => {
  fetchAllData(id).then((data) => {
    destinationsData = data[0].destinations;
    travelersData = data[1];
    tripsData = data[2].trips;
    trip = new Trip(tripsData);
    destinations = new Destinations(destinationsData);
    currentTraveler = travelersData;
    traveler = new Traveler(currentTraveler, tripsData);
    loadPageFunctions();
  });
};

const displayTripTotal = () => {
  const tripObj = [
    {
      id: tripsData.length + 1,
      userID: traveler.id,
      destinationID: destinations.findIdByName(dropDownMenu.value),
      travelers: numTravelerInput.value,
      date: dayjs(dateInput.value).format("YYYY/MM/DD"),
      duration: Number(durationInput.value),
      status: null,
      suggestedActivities: [],
    },
  ];
  if (
    dateInput.value &&
    durationInput.value &&
    numTravelerInput.value &&
    dropDownMenu.value
  )
    tripTotalSection.innerText = `Your trip estimate is $${trip.calculateTripCost(
      destinationsData,
      tripObj
    )} 
            (includes a 10% travel agent booking fee)`;
  hide(submitButton);
  show(bookButton);
};

const getUserLogIn = (userNameInput, passwordInput) => {
 console.log("hello")
  const findUserNameId = userNameInput.value.split("traveler");
  const id = Number(findUserNameId[1]);
  console.log(findUserNameId)
  if (
    id >= 1 &&
    id <= 50 &&
    userNameInput.value === `traveler${id}` &&
    passwordInput.value === "travel"
  ) {
    show(mainDashboard)
    hide(loginPage)
    return getUser(id);
  } else {
    //innerhtml for error handling 
  }
};



const show = (element) => {
  element.classList.remove("hidden");
};

const hide = (element) => {
  element.classList.add("hidden");
};

loginButton.addEventListener("click", () => {getUserLogIn(userNameInput, passwordInput)});
submitButton.addEventListener("click", displayTripTotal);
bookButton.addEventListener("click", addTripToPending);
