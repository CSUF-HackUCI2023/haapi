import fetch from 'node-fetch'
import * as dotenv from 'dotenv'
dotenv.config()

export const getAapiBusinesses = async () => {
  const LIMIT = 15
  const LAT = 36.7783
  const LON = -119.4179
  const COUNTRY = 'US'
  const RADIUS = 321869// 15 miles in meters
  const TOMTOM_API_KEY = process.env['TOMTOM_API_KEY']
  const URL = `https://api.tomtom.com/search/2/categorySearch/asian.json?key=${TOMTOM_API_KEY}&limit=${LIMIT}&lat=${LAT}&lon=${LON}&countrySet=${COUNTRY}`
  const RESPONSE = await fetch(URL)
  const DATA = await RESPONSE.json()
  const LENGTH = Object.keys(DATA['results']).length
  
  let businesses = {}
  for (let index = 0; index < LENGTH; ++index) {
      const NAME = DATA['results'][index]['poi']['name']
      const ADDRESS = DATA['results'][index]['address']['freeformAddress']
      const PHONE_NUMBER = DATA['results'][index]['poi']['phone']
      const URL = DATA['results'][index]['poi'].hasOwnProperty('url') ? DATA['results'][index]['poi']['url'] : ""
      const CATEGORIES = DATA['results'][index]['poi']['categories']
      const INFORMATION = []
      INFORMATION.push(ADDRESS, PHONE_NUMBER, URL, CATEGORIES)
      if (!(NAME in businesses)) {
        businesses[NAME] = []
      }
      businesses[NAME].push(INFORMATION)
  }
  console.log(businesses)
}

getAapiBusinesses()