import React from 'react'

const Pagination = ({ memesperpage, totalmemes, currentPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalmemes / memesperpage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='pagination justify-content-center align-items-center' style={{ width: "100%" }}>
            <div className='page-item'>
                <button className={`page-link bg-primary text-white variant-dark p-2 m-2 
               `}
                    style={{
                        borderRadius: "0.75rem", fontSize: "1.25rem", width: "8rem"
                    }}

                    onClick={() => paginate('previous')}
                >
                    Previous
                </button>

            </div>
            <div className='page-item'>
                <button className={`page-link bg-primary text-white variant-dark p-2 m-2
                `}
                    style={{ borderRadius: "0.75rem", fontSize: "1.25rem", width: "8rem" }}
                    onClick={() => paginate('next')}>Next</button>
            </div>
        </div>
    )
}

export default Pagination
