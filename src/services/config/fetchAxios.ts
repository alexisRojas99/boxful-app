import axios from 'axios';

const fetchAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BOXFUL_API
});

export default fetchAuth;