import styles from "../../styles/components/ExperienceBar.module.css";


export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{width: '50%'}}/>

        <span 
          className={styles.currentExperience}
          style={{left: '50%'}}
        >512 xp</span>
      </div>
      <span>1024 xp</span>
    </header>
  )
}