import fetch from 'isomorphic-fetch';

async function getData() {
  const response = await fetch('http://localhost:3000/images');
  const data = await response.json();
  return data;
}

export default getData;
