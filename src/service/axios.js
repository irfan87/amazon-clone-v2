import axios from "axios";

// the baseURL is the API (cloud function)
const instance = axios.create({
	baseURL: "http://localhost:5001/clone-v2-c67f8/us-central1/api",
});

export default instance;
