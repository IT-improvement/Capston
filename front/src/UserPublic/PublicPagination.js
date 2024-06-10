import React from 'react';
import Pagination from "./Pagination";

const PublicPagination = ({ children }) => {
    return (
        <div>
            <Pagination />
            <main>{children}</main>
        </div>
    );
};

export default PublicPagination;