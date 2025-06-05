

/*

import React,{useEffect,useState} from "react";
const WeatherInfo=()=>{
    const[users,setUsers]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);
    useEffect(()=>{

        const lattitude=40.7128;
        const longitude = -74.006;

        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lattitude}&longitude=${longitude}&current_weather=true`)
        .then((res)=>{
            if(!res.ok)
            {
                throw new Error('Network response ok')
            }
            return res.json()
        })
        .then((data)=>{setUsers(data);
            setLoading(false)
        })
        .catch((err)=>{
            setError(err.message)
            setLoading(false)
        });
            },[]);

        if (loading) return <p>page is loading</p>
        if(error)return <p style={{color:'red'}}>error:{error}</p>
        return(
            <div>
                <h2>Weather Report</h2>
                <p><stront>Temprarature</stront>{users.temperature}</p>
                <p><stront>Wind Speed</stront>{users.windspeed}</p>
                <p><stront>Time</stront>{users.time}</p>
            </div>
        )

}

export default WeatherInfo;

*/


import React, { useEffect, useState } from "react";

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const latitude = 40.7128;
    const longitude = -74.006;

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data.current_weather);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={styles.loading}>Page is loading...</p>;
  if (error)
    return <p style={{ color: "red", fontWeight: "bold" }}>Error: {error}</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🌤️ Weather Report - New York</h2>
      <p style={styles.info}>
        <strong>Temperature:</strong> {weather.temperature}°C
      </p>
      <p style={styles.info}>
        <strong>Wind Speed:</strong> {weather.windspeed} km/h
      </p>
      <p style={styles.info}>
        <strong>Time:</strong> {weather.time}
      </p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#e0f7fa",
    padding: "30px",
    borderRadius: "10px",
    width: "400px",
    margin: "50px auto",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    fontFamily: "Arial",
    textAlign: "center"
  },
  title: {
    color: "#00796b",
    fontSize: "24px",
    marginBottom: "20px"
  },
  info: {
    fontSize: "18px",
    marginBottom: "10px"
  },
  loading: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "18px"
  }
};

export default WeatherInfo;
