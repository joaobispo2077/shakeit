import { useEffect, useState } from "react";
import styles from "../../styles/components/Countdown.module.css";

const INITIAL_COUNTDOWN_MINUTES = .1 * 60;

export function Countdown() {
  const [time, setTime] = useState(INITIAL_COUNTDOWN_MINUTES);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  useEffect(() => {
    let countdownTimeout: NodeJS.Timeout | null = null;
    
    const isCountDownFinished = time === 0 && isActive;
    const isCountdownRunning = isActive && time > 0;

    if (isCountdownRunning) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    };

    if(isCountDownFinished) {
      alert("finalizou");
      setHasFinished(true);
      setIsActive(false);
    };

    return () => {
      if (countdownTimeout) {
        clearTimeout(countdownTimeout)
      };
    };
  }, [isActive, time]);

  function startCountdown() {
    setIsActive(true);
  };

  function resetCountdown() {
    setIsActive(false);
    setTime(INITIAL_COUNTDOWN_MINUTES);
  };

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
      {hasFinished ? (
        <button 
        disabled
        type="button" 
        className={styles.countdownButton}
      >
        Ciclo encerrado
      </button>
      ): (
        <>
        {isActive && !hasFinished ? (
          <button 
          type="button" 
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
          onClick={resetCountdown}  
        >
          Abandonar ciclo
        </button>
        ) : (
          <button 
          type="button" 
          className={styles.countdownButton}
          onClick={startCountdown}  
        >
          Iniciar um ciclo
        </button>
        )}
        </>
      )}
    </div>
  )
}