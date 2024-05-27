    /* eslint-disable */

    import Sidebar from "./Sidebar";


    const PublicSidebar = ({ children }) => {
        return (
            <div>
                <Sidebar />
                <main>{children}</main>
            </div>
        );
    };

    export default PublicSidebar;