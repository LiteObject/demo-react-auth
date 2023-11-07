import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton: React.FC = () => {

    const { logout, isAuthenticated } = useAuth0();

    return (
        <>
        {isAuthenticated && (
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => logout()}
            >
                Log Out
            </button>
        )}
        </>
    )
};