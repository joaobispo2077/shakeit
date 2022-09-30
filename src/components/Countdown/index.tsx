import { useEffect, useState } from "react";
import styles from "../../styles/components/Countdown.module.css";


export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  useEffect(() => {
    let countdownTimeout: NodeJS.Timeout | null = null;

    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    };

    return () => {
      if (countdownTimeout) {
        clearTimeout(countdownTimeout)
      }
    };
  }, [isActive, time]);

  function toggleCountdown() {
    setIsActive((isActive) => !isActive);
  };

  return (
    <div>
      <div className={styles.countdown}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      <button 
        type="button" 
        className={styles.countdownButton}
        onClick={toggleCountdown}  
      >
        {isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo'}
      </button>
    </div>
  )
}