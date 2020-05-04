import React from 'react';

const IsAuthorizedHOC = WrappedComponent => props => {
    return (
        <WrappedComponent isAuthorized={true} {...props} />
    );
};

export default IsAuthorizedHOC;