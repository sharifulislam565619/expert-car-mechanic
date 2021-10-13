import React from 'react';
import { Redirect, Route, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    useLocation()
    const { user } = useAuth()
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.displayName ? children :

                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    >

                    </Redirect>


            }




        >

        </Route >
    );
};

export default PrivetRoute;