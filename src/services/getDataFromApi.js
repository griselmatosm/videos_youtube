import axios from 'axios';
// require('dotenv').config();
// import dotenv from 'dotenv'
// dotenv.config()
require('dotenv').config({ path: '../../.env' })

console.log(process.env.KEY);

const KEY = 'AIzaSyBuLzw7zVLEZ_3S-06cEvgicHD3v9ZI7f0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY
    }
})