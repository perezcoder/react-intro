import { pb } from '../../pocketbase';
import { ResponseLogin } from './useAuth';

// export function login(username: string, password: string) {
//   return fetch('http://127.0.0.1:8090/api/admins/auth-with-password', {
  
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method:'POST',
//       body: JSON.stringify({
//         identity: username,
//         password: password
//       })
//     }).then((r: any) => {

//       console.log('res', r)
//       console.log('res', r.admin)
//       console.log('res', r.token)
//     })
//   // const res = await fetch('http://127.0.0.1:8090/api/admins/auth-with-password', {
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   method:'POST',
//   //   body: JSON.stringify({
//   //     identity: username,
//   //     password: password
//   //   })
//   // })
//   // return res
//   //return pb.collection("admins").authWithPassword(username, password);
// }

export async function login(username: string, password: string):Promise<ResponseLogin> {
  const response = await fetch('http://127.0.0.1:8090/api/admins/auth-with-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identity: username, password }),
  });

  console.log('response', response)

  // Se la risposta non è OK, lancia un errore
  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.message || 'Login failed');
  }

  // Restituisci il JSON della risposta
  const data = await response.json();

  console.log('data', data)

  // Salva token se vuoi
  localStorage.setItem('pb_token', data.token);
  localStorage.setItem('admin', JSON.stringify(data.admin));

  return data; // <-- ritorna il risultato del fetch
  //return await pb.admins.authWithPassword(username, password)
  // return await pb.collection("_superusers").authWithPassword(username, password);
}

export async function logout() {
  pb.authStore.clear();
}

export function getToken() {
  return pb.authStore.token;
}

export function isLogged() {
  return pb.authStore.isValid;
}