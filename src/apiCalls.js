
export const fetchAllData = (dataType) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2${dataType}`) 
    .then(response => response.json())
}



// const fetchAllData = (path) => {
//     return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2${path}`)
//         .then(response => {
//             if(!response.ok) {
//              throw Error (response.status + ":" + response.text)
//             } else {
//             return response.json()
//             }
//         }) 
//         .catch(error => console.log(error))    
// }

// const getAllData = (data) => {
//     const result = Promise.all([fetchAllData(data)])
//     .then(responses => {
//         return responses
//     })
//     return result;
// }

// export { getAllData };