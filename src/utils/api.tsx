// const API_BASE_URL = "http://localhost:5001";
const API_BASE_URL = "https://dinner-for-two-server.onrender.com";
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

/**
 * This function makes a get request to the database.
 * The database responds with json containing the list of items on the menu.
 */
export async function loader(signal?: AbortSignal): Promise<any> {
  const url = `${API_BASE_URL}/sushi`;
  return fetchJson(url, { signal });
}

/**
 * Current order used as a value to receipt in the Receipt interface.
 */
interface CurrentOrder {
  menu_item?: string;
  price?: number;
  quantity?: number;
}

/**
 * Receipt interface is used as the type for the parameter in postData function.
 * postData function makes a post request.
 */
interface Receipt {
  receipt: Array<CurrentOrder>;
}

/**
 * This function makes a post request to the database.
 */
export async function postData(data: Receipt) {
  const url = `${API_BASE_URL}/orders`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: data }),
  };
  return fetchJson(url, options);
}

/**
 * This function makes a get request to the database.
 * The database responds with the order that matches the orderId.
 */
export async function orderConfirmation(orderId: number, signal?: AbortSignal) {
  const url = `${API_BASE_URL}/orders/${orderId}`;
  return fetchJson(url, { signal });
}
