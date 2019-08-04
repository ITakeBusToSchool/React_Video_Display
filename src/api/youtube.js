import axios from 'axios';

const KEY="AIzaSyA8J8XqzdIHk9V1CrHqRdsq5VFXgSidrGw";


export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResults:'5',
    key:KEY
  }
});
