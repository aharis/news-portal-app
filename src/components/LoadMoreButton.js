import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

const LoadMoreButton = ({ setPage }) => {


  const { news, totalResults } = useSelector(state => state.news);
  const [isDisabled, setIsDisabled] = useState(false);


  const handleButton = () => {
    setPage(prev => prev + 1);
  }

  useEffect(() => {
    if (news.length === totalResults) {
      setIsDisabled(true);
    }
    else {
      setIsDisabled(false);
    }
  }, [news, totalResults])

  return (
    <div>
      <Button variant='contained' onClick={handleButton} disabled={isDisabled}>
        Load More
      </Button>
    </div>
  )
}

export default LoadMoreButton