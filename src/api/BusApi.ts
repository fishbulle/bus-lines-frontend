import axios from 'axios';

export async function getTopBusLines() {
  const URL = import.meta.env.VITE_API_URL;

  try {
    const response = await axios.get(URL);
    if (response.status == 200) return response;
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
  }
}
