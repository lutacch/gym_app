export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "773d010b18msh686a028f9bc1e05p18706fjsn83de8234e352",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};



export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '773d010b18msh686a028f9bc1e05p18706fjsn83de8234e352',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
