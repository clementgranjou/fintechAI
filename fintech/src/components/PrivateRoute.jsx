// import React from 'react';
// import { Route, Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext'; // Assurez-vous que le chemin est correct

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const { authToken } = useAuth();
//   const location = useLocation();

//   return (
//     <Route
//       {...rest}
//       element={
//         authToken ? (
//           <Element />
//         ) : (
//           <Navigate to="/Login" replace state={{ from: location }} />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
