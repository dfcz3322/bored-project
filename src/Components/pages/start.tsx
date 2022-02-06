import React from "react";
import { Link } from "react-router-dom";
import "./start.css";
import Slider from "@mui/material/Slider";
import { useDispatch } from "react-redux";
import { setMaxPrice, setMinPrice, setParticipants } from "../../action";


function Start() {
  const dispatch = useDispatch();
  const onParticipantsChange = (event: any) => {
    dispatch(setParticipants(parseInt(event.target.value)));
  };
  const onMaxPriceChange = (event: any) => {
    dispatch(setMaxPrice(event.target.value));
  };
  const onMinPriceChange = (event: any) => {
    dispatch(setMinPrice(event.target.value))
  };

  return (
    <div className="start-page__main">
      <div className="button-wrapper">
        {" "}
        <button type="button" className="bn30">
          <Link to="/activity" className="start-page__button-link">LET&prime;S START</Link>
        </button>
        <div className="filter-wrapper">
          <div>
            <label>number of participants<br/></label>
            <select 
            className="start__select"
            onChange={(e) => onParticipantsChange(e)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div>
            <div>
              <label>min price</label>
              <Slider
                onChange={(e) => onMinPriceChange(e)}
                defaultValue={0}
                valueLabelDisplay="auto"
                step={0.01}
                marks
                min={0}
                max={1}
              />
               <label>max price</label>
              <Slider
                aria-label="Temperature"
                defaultValue={0}
                onChange={(e) => onMaxPriceChange(e)}
                valueLabelDisplay="auto"
                step={0.01}
                marks
                min={0}
                max={1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
