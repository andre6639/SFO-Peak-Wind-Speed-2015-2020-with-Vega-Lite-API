import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/andre6639/d1c2a41f82286e210bfaa2e158117b4a/raw/49de362c1f2762ccd9c1934c3afb850985983d60/SFO_dailyClimate_data_2015thr2020_concise.csv';

export const getData = async () => {
  const data = await csv(csvUrl);
  
  // Have a look at the attributes available in the console!
  console.log(data[0]);

  return data;
};