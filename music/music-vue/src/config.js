export default process.env.NODE_ENV === 'production' ?
    'https://musicmobilecomputing.herokuapp.com/' :
    'http://localhost:3000/';