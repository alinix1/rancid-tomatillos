export const fetchAllData = (dataType) => {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2${dataType}`
  ).then((response) => {
    if (!response.ok) {
      throw Error(response.status + ":" + response.text);
    } else {
      return response.json();
    }
  });
};
