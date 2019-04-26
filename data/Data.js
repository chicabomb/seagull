import payload from 'data/helpers/payload';
import 'isomorphic-fetch';
import data from 'contexts/BundleResponse';

// export default async () => {
//   const res = await fetch(
//     process.env.REQUEST_URL_CN,
//     {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payload)
//     });

//   const data = await res.json();
//   return data.data;
// }

export default () => {
  return data;
}
