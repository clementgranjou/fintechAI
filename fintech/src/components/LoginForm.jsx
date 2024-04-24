import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from "@/components/ui/input"


const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
