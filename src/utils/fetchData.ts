import axios from 'axios';

const fetchData = async (pathname: string) => {
  try {
    return axios(pathname);
  } catch (err) {
    console.log(err);
  }
};

export default fetchData;
