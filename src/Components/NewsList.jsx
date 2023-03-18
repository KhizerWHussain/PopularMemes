import React, { useState } from 'react'
import { useEffect } from 'react'
import Loading from './Loading';
import Pagination from './Pagination';

const NewsList = () => {
    const [memes, setMemes] = useState([]);
    const [memesperpage] = useState(6);
    const [pageCount, setPageCount] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMemesData = () => {
        setIsLoading(true);
        fetch('https://api.imgflip.com/get_memes')
            .then(response => {
                return response.json();
            }).then(data => {
                if (Array.isArray(data?.data?.memes)) {
                    console.log(data);
                    setMemes(data.data.memes);
                    setIsLoading(false);
                }
                else {
                    console.log('Data is not in expected format: ', data);
                }
            }).catch((error) => {
                console.log("Error Fetching Memes API: ", error);
            })
    }
    useEffect(() => {
        fetchMemesData();
    }, [])

    const lastmemeindex = pageCount * memesperpage;
    const firstmemeindex = lastmemeindex - memesperpage;
    const currentMemes = memes.slice(firstmemeindex, lastmemeindex);

    const paginate = (direction) => {
        if (direction === "next") {
            if (pageCount < (Math.ceil(memes.length / memesperpage))) {
                setPageCount(pageCount + 1);
                window.scrollTo(0, 0);
            }
        }
        else if (direction === "previous") {
            if (pageCount > 1) {
                setPageCount(pageCount - 1);
                window.scrollTo(0, 0);
            }

        }
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <h4 className='p-2 text-center'>
                    Total {memes.length} Memes
                </h4>
                <h5 className='page-number text-info'>Page: {pageCount}</h5>
            </div>
            {
                isLoading ? <Loading /> : (
                    <div className='d-flex flex-wrap'
                        style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                        {
                            currentMemes.map((meme) => (
                                <div className="d-flex flex-wrap card m-4 bg-light"
                                    style={{
                                        width: "22rem",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                    key={meme.id}>
                                    <img src={meme.url} alt={meme.name} className='card-img-top'
                                        style={{ maxWidth: "100%", height: "14rem", zIndex: "1" }}
                                    />
                                    <div className="card-body" style={{ width: "100%" }}>
                                        <h5 className="card-title text-center text-primary">
                                            <a href={meme.url} target='_blank'
                                                rel='noreferrer' className='text-decoration-none'
                                            >
                                                {meme.name}</a>
                                        </h5>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }

            <div className='pages'>
                <Pagination
                    memesperpage={memesperpage}
                    totalmemes={memes.length}
                    paginate={paginate} />
            </div>
        </>
    )
}


export default NewsList
