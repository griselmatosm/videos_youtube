import axios from 'axios';

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