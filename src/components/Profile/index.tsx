import styles from "../../styles/components/Profile.module.css";


export function Profile() {
  return (
    <div
      className={styles.profile}
    >
      <img src="https://github.com/joaobispo2077.png" alt="João Bispo" />
      <div>
        <strong>João Bispo</strong>
        <p>
          <img src="icons/level.svg" alt="Nível do usuário" />
          Level 1
        </p>
      </div>
    </div>
  )
}