import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import "./styles.css"
import Clock from ".component/clock.jsx";
import BtnRefrescar from "..component/btnRefrescar.jsx"

const Home = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSegundos(prevSegundos => prevSegundos + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="reloj">
		<FontAwesomeIcon icon={faClock} className="icono-reloj"/>
      <Clock seg={segundos}/>
	  <BtnRefrescar/>
    </div>
  );
};

export default Home;