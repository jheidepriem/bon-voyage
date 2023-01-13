import './css/styles.css';
import './images/bon-voyage.jpg'
import './images/bon-voyage7small.jpg'
import './images/turing-logo.png'
import Traveler from './Traveler';
import Trip from './Trip'
import Destinations from './Destinations';
import { fetchAllData } from './apiCalls'
import * as dayjs from "dayjs";

let traveler
let trip
let destinations

fetchAllData().then((data) => {
  console.log(data)
  traveler = data[0].travelerData;
  trip = data[1].tripData;
  destinations = data[2].destinationsData;
  loadPageFunctions();
});


console.log('This is the JavaScript entry file - your code begins here.');



