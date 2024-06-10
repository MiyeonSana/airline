import axios from "axios";

const options = {
  method: "GET",
  url: "https://airport-info.p.rapidapi.com/airport",
  headers: {
    "X-RapidAPI-Key": "2dffe9ac03msh31126f98f89fdefp169feejsnabb49c40ce01",
    "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export default Http;
