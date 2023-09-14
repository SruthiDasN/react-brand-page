import styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className={styles.navigation}>
        <div className="logo">
            <img src="/images/brand_logo.png" alt="brand_logo" />
        </div>

        <ul>
            <li href='#'>Home</li>
            <li href='#'>About</li>
            <li href='#'>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation