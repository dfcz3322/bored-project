import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer';
import { BoredResponse } from '../interface';
import './activity.css';

function Activity() {
  const [boredResult, setBoredResult] = useState<BoredResponse>();
  const participants = useSelector((store: RootState) => store.participants);
  const minValue = useSelector((store:RootState) => store.priceRange.minValue);
  const maxValue = useSelector((store:RootState) => store.priceRange.maxValue);

  useEffect(() => {
    const url = new URL('http://www.boredapi.com/api/activity/');
    const params = {
      ...(participants && {participants: participants.toString()}),
      ...(minValue && {minprice: minValue.toString()}),
      ...(maxValue && {maxprice: maxValue.toString()}),
    }

    url.search = new URLSearchParams(params).toString();

    fetch(url.toString())
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setBoredResult(response);
      });
  }, []);
  return (
    <div>
      {boredResult ? (
        <div className="second-page__main">
          <div className="activity-details">activity:<br/>{boredResult.activity}</div>
          <div className="activity-details">price:<br/>{boredResult.price}</div>
          <div className="activity-details">participants:<br/>{boredResult.participants}</div>
        </div>
      ) : null}
    </div>
  );
}
export default Activity;
