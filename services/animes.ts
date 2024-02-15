"use server";

const API_BASE_URL = process.env.VITE_API_BASE_URL;

const MAX_LIMIT = 8;
const ORDER_TYPE = "popularity";

interface AnimesOptions {
  page?: number;
  limit?: number;
  order?: string;
}

export const fetchAnimes = async ({
  page = 1,
  limit = MAX_LIMIT,
  order = ORDER_TYPE,
}: AnimesOptions) => {
  try {
    const res = await fetch(
      `${API_BASE_URL}?page=${page}&limit=${limit}&order=${order}`
    );

    if (!res.ok)
      throw new Error(`Failed to fetch animes. Status: ${res.status}`);

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(`Error getting animes`);
  }
};
