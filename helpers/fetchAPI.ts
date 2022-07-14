import Axios from 'axios';

interface Params {
  path: string;
  query: string;
}

export async function APIfetcher({ path, query }: Params) {
  try {
    const url = `${process.env.API_URL}/${path}/q=${query}`;

    const options = {
      method: 'GET',
      url,
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'SE',
        'X-RapidAPI-Key': `${process.env.RAPIDAPI_KEY}`,
        'X-RapidAPI-Host': `${process.env.RAPIDAPI_HOST}`,
      },
    };

    const response = await Axios.request(options);

    return response.data;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      console.log('Axios error: ', error.message);
      throw new Error(error.message);
    } else {
      console.log('Unexpected error: ', error);
      throw new Error('An unexpected error occurred');
    }
  }
}
