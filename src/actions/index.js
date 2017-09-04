// import axios from 'axios';

export const CREATE_PARTIES = 'create_parties';

// const ROOT_URL = '';

export function createParty(values) {
  console.log('** In create parties action');
  // const request = axios.post(`${ROOT_URL}/parties`, values);
  return {
    type: CREATE_PARTIES,
    payload: {}, //request,
  };
}
