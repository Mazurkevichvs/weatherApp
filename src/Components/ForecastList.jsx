import React from 'react';
import DailyItem from './DailyItem';
import HourlyItem from './HourlyItem';
import './ForecastList.scss';

const ForecastList = ({ dailyWeather, active }) => {
  const hourlyFiltered = dailyWeather?.list?.filter((el, i) => i < 7);
  const hourItem = hourlyFiltered?.map((el, i) => (
    <HourlyItem key={i} timestamp={el.dt} icon={el.weather[0].icon} weather={el.main} />
  ));

  const dailyFiltered = dailyWeather?.list?.filter((el) => {
    return el.dt_txt.includes('12:00:00');
  });
  const dayItem = dailyFiltered?.map((el, i) => (
    <DailyItem
      key={i}
      timestamp={el.dt}
      icon={el.weather[0].icon}
      weather={el.main}
      desc={el.weather[0].main}
    />
  ));
  return <div className="forecast__wrapper">{active ? hourItem : dayItem}</div>;
};

export default ForecastList;
