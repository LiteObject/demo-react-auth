import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Profile: React.FC = () => {

    const { user, isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated && (
                <article>
                    <div className='flex justify-center'>
                        {user?.picture && <img src={user.picture} alt={user.name} />}
                    </div>

                    <h2>{user?.name}</h2>
                    <div className='flex items-center justify-center'>
                        <ul className='text-left list-disc'>
                            {user && Object.keys(user).map((key, i) => <li className='mb-2' key={i}>{key} : {user[key]}</li>)}
                        </ul>
                    </div>

                </article>
            )}
        </>
    )
};