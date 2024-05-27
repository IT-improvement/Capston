import React from 'react';
import Header from './Header';

const PublicHeader = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default PublicHeader;