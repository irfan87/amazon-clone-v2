import axios from "axios";

// the baseURL is the API (cloud function)
const instance = axios.create({
	// baseURL: "http://localhost:5001/clone-v2-c67f8/us-central1/api",
	baseURL: "https://us-central1-clone-v2-c67f8.cloudfunctions.net/api",
});

export default instance;
