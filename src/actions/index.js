//axios to make ajax request, return promise 

import axios from 'axios';


const API_KEY = '200f5a12876a23367cd6b73fb61da407';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


//convention to avoid bug, typo mistake on reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

//async operation, need promise, wrapped by redux-promise
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	// console.log('Request: ',request);
//return promise to the payload
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}