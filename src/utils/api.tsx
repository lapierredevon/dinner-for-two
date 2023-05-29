import { error } from "console";

const API_BASE_URL = "http://localhost:5001";

// const loadMenu = async () => {
//   url = `${API_BASE_URL}/sushi`;
//   const menu = await fetch(API_BASE_URL);
//   const response = await menu.json();

//   return response;
// };

// export async function loader(): Promise<any> {
//   let menu = await loadMenu();
//   return { menu };
// }

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
  url = `${API_BASE_URL}/sushi`;
  await fetchJson(url, { signal });
}

interface Receipt {
  receipt: Array<CurrentOrder>;
}

interface CurrentOrder {
  menu_item?: string;
  price?: number;
  quantity?: number;
}

// export async function postTables(table, signal) {
//   const url = `${API_BASE_URL}/tables`;
//   const options = {
//     method: "POST",
//     headers,
//     body: JSON.stringify({ data: table }),
//     signal,
//   };
//   return await fetchJson(url, options, {});
// }

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
 * export async function postData(
  url: string = "http://localhost:5001/orders",
  data: Receipt
) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: data }),
  });

  if (!response.ok) {
    throw new Error("Network response was not okay");
  }

  const responseData = await response.json();

  return responseData;
}
*/
