import { BASE_URL } from "./constants.js";

export const fetchData = async(url) => {
    const newUrl = url.startsWith('/') ? url.substring(1) : url;

    try {
        const response = await fetch(`${BASE_URL}${newUrl}`);

        return response.json();
    } catch(e) {
        alert(e);
    }
}
