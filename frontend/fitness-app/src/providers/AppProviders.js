//  import React from 'react';
// // import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from '../context/AuthContext';
// import { OnboardingProvider } from '../context/OnboardingContext';
// // import { WorkoutContext } from '../context/WorkoutContext';
// // import { ChallengeContext } from '../context/ChallengeContext';
// // import { ThemeContext } from '../context/ThemeContext';
// // import { NotificationContext } from '../context/NotificationContext';
//  import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const AppProviders = ({ children }) => {
//   return (
//         <AuthProvider>
//           <OnboardingProvider>
//             {/* <WorkoutContext> */}
//               {/* <ChallengeContext> */}
//                 {/* <ThemeContext> */}
//                   {/* <NotificationContext> */}
//                     {children}
//                     <ToastContainer 
//                       position="top-right" 
//                       autoClose={3000}
//                       hideProgressBar={false}
//                       newestOnTop={false}
//                        closeOnClick
//                        rtl={false}
//                           pauseOnFocusLoss
//                        draggable
//                        pauseOnHover
//                     />
//                   {/* </NotificationContext> */}
//                 {/* </ThemeContext> */}
//               {/* </ChallengeContext> */}
//             {/* </WorkoutContext> */}
//           </OnboardingProvider>
//          </AuthProvider>
//     //  </React.StrictMode>
//    );
// };
import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import { OnboardingProvider } from '../context/OnboardingContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <OnboardingProvider>
        {children}
        <ToastContainer 
          position="top-right" 
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </OnboardingProvider>
    </AuthProvider>
  );
};