import { error } from "console";

const API_BASE_URL = "http://localhost:5001";

const headers = new Headers();
headers.append("Content-Type", "application/json");

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
    console.log(payload);
    return payload.data;
  } catch (error: any) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
};

export async function loader(signal?: AbortSignal): Promise<any> {
  const url = `${API_BASE_URL}/sushi`;
  return fetchJson(url, { signal });
}

interface Receipt {
  receipt: Array<CurrentOrder>;
}

interface CurrentOrder {
  menu_item?: string;
  price?: number;
  quantity?: number;
}

export async function postData(data: Receipt) {
  const url = `${API_BASE_URL}/orders`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: data }),
  };
  return fetchJson(url, options);
}
