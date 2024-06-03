/* eslint-disable */
import "./page.css";
function Pagination() {
    return (
        <div>
            <div className="page-container">
                <nav className="" aria-label="navigation">
                    <ul className="pagination pagination-bordered ">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Prev</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active"><a className="page-link" href="#">2</a></li>
                        <li className="page-item disabled"><a className="page-link" href="#">..</a></li>
                        <li className="page-item"><a className="page-link" href="#">15</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default Pagination;