import React, { useState } from 'react';
import LandingPage from './LandingPage';
import LoadMoreButton from './LoadMoreButton'

const Home = () => {
    const [page, setPage] = useState(1);
  
    return (
        <div>
            <h1>Home</h1>
            <LandingPage page={page} />
            <LoadMoreButton setPage={setPage} />
        </div>
    )
}

export default Home