import axios from "axios";
//import { mockyClient } from './mockyClient'

const apiClient = axios.create({});

if (import.meta.env.VITE_REACT_APP_API_URL) {
  apiClient.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_URL;
} else {
  apiClient.defaults.baseURL = "http://localhost:8000";
}

// export default mockyClient;
