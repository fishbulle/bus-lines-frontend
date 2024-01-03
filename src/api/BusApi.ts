import axios from "axios";

export async function getTopBusLines() {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/bus");
    if (response.status == 200) return response;
  } catch (error) {
    console.error(`Something went wrong: ${error}`)
  }
}
