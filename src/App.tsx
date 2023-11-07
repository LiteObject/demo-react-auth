import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton';
import { Profile } from './components/Profile';

function App() {

  const { isLoading, error } = useAuth0();

  return (
    <div className="App">
      <h1 className="m-6 text-xl font-bold">
        Auth0 Login
      </h1>
      {error && <p>{error.message}</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </>
      )}

    </div>
  );
}

export default App;
