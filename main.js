const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://face-detection6.p.rapidapi.com/img/face-age-gender',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'ba28e8c96dmshe49e8f288900d6ep1758cfjsn519587ef9d32',
    'X-RapidAPI-Host': 'face-detection6.p.rapidapi.com'
  },
  data: '{"url":"https://inferdo.com/img/face-3.jpg","accuracy_boost":3}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
