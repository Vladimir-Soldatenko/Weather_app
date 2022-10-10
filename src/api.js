// @ts-nocheck

export const getWeather = async (searchValue) => {
  const apiKey = "a2e6c47ca45c1064421f7658b13972d9";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&lang=ru&units=metric&cnt=12&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      if (data) {
        return data;
      }
    }
    throw Error('Error')
  } catch (error) {
    console.log(error.message);
  }
};
