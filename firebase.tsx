// import {getMessaging, getToken as token, onMessage} from "firebase/messaging";
// import {initializeApp} from 'firebase/app';
// import {firebaseConfig} from './src/Domain/Utils';
// import {PUSH_CERTIFICATE} from "./src/Core/FireBaseConfig";
//
// initializeApp(firebaseConfig);
// const firebaseApp = initializeApp(firebaseConfig);
// const messaging = getMessaging(firebaseApp);
//
// // @ts-ignore
// export const getToken = (setTokenFound) => {
//     return token(messaging, {vapidKey: PUSH_CERTIFICATE}).then((currentToken: any) => {
//         if (currentToken) {
//             console.log('current token for client: ', currentToken);
//             setTokenFound(true);
//             // Track the token -> client mapping, by sending to backend server
//             // show on the UI that permission is secured
//         } else {
//             console.log('No registration token available. Request permission to generate one.');
//             setTokenFound(false);
//             // shows on the UI that permission is required
//         }
//     }).catch((err: any) => {
//         console.log('An error occurred while retrieving token. ', err);
//         // catch error while creating client token
//     });
// }