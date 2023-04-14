import { promises } from "stream";

const API_BASE_URL = "http://localhost:5001";

const headers = new Headers();
headers.append("Content-Type", "application/json");
let url: string;

const fetchJson = async (
  url: string,
  option?: RequestInit,
  onCancel?: any
): Promise<any> => {
  try {
    const response = await fetch(url, option);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      throw new Error(payload.error);
    }
    return payload.data;
  } catch (error: any) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
};

export default async function recallMenuItems(
  signal: AbortSignal
): Promise<any> {
  url = `${API_BASE_URL}/sushi`;
  return await fetchJson(url, { signal });
}
