// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);


  // import React from 'react';
  // import ReactDOM from 'react-dom/client';
  // import './index.css';
  // import App from './App';
  // import { BrowserRouter } from 'react-router-dom';
  // import { AuthProvider } from './context/AuthContext';
  // import reportWebVitals from './reportWebVitals';
  // import 'bootstrap/dist/css/bootstrap.min.css';
  // import { ToastContainer } from 'react-toastify';
  // import 'react-toastify/dist/ReactToastify.css';

  // ReactDOM.createRoot(document.getElementById('root')).render(
  //   <React.StrictMode>
  //     <BrowserRouter>
  //       <AuthProvider>
  //       <ToastContainer position="top-right" autoClose={3000} />
  //         <App />
  //       </AuthProvider>
  //     </BrowserRouter>
  //   </React.StrictMode>
  // );
  // reportWebVitals(console.log);

//   import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import { OnboardingProvider } from './context/OnboardingContext'; // ✅ Ajout
// import { WorkoutProvider } from './context/WorkoutContext';        // ✅ Si utilisé
// import { ChallengeProvider } from './context/ChallengeContext';    // ✅ Si utilisé
// import { ThemeProvider } from './context/ThemeContext';            // ✅ Si utilisé
// import { NotificationProvider } from './context/NotificationContext'; // ✅ Si utilisé
// import { ToastContainer } from 'react-toastify';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <OnboardingProvider>
//           <WorkoutProvider>
//             <ChallengeProvider>
//               <ThemeProvider>
//                 <NotificationProvider>
//                   <App />
//                   <ToastContainer position="top-right" autoClose={3000} />
//                 </NotificationProvider>
//               </ThemeProvider>
//             </ChallengeProvider>
//           </WorkoutProvider>
//         </OnboardingProvider>
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// reportWebVitals(console.log);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);

reportWebVitals(console.log);