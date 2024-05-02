// import React, { useState } from 'react';
// import { Button } from './ui/button';
// import { Input } from "@/components/ui/input"
// import { useAuth } from '@/context/AuthContext';


// const LoginForm = () => {
//   const { login } = useAuth();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     login(username, password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </label>
//       <label>
//         Password:
//         <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </label>
//       <Button type="submit">Login</Button>
//     </form>
//   );
// };

// export default LoginForm;
