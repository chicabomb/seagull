import payload from 'data/helpers/FlightPayload';
import 'isomorphic-fetch';

export default async () =>  {
    console.log('rerererer')
    const response = await fetch(process.env.REACT_APP_REQUEST_URL_CN, payload)
    return response.json()
}
