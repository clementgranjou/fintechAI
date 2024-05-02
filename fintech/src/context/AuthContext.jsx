// import React, { createContext, useContext, useState } from 'react';

// // Création du contexte d'authentification
// const AuthContext = createContext(null);

// // Fournisseur du contexte d'authentification qui encapsule toute la logique
// export const AuthProvider = ({ children }) => {
//   const [authToken, setAuthToken] = useState(localStorage.getItem('token')); // récupère le token du localStorage

//   // Fonction pour gérer la connexion
//   const login = (token) => {
//     localStorage.setItem('token', token); // Stocke le token dans le localStorage
//     setAuthToken(token); // Met à jour le state avec le nouveau token
//   };

//   // Fonction pour gérer la déconnexion
//   const logout = () => {
//     localStorage.removeItem('token'); // Supprime le token du localStorage
//     setAuthToken(null); // Réinitialise le state du token
//   };

//   return (
//     <AuthContext.Provider value={{ authToken, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook personnalisé pour utiliser le contexte d'authentification
// export const useAuth = () => useContext(AuthContext);
