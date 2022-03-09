import styles from './style.module.css'
import { Heart } from '../icons/Heart.jsx'

export default function VideoPlayerActions () {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
      </div>
      <div className={styles.action}>
        <Heart />
      </div>
      <div className={styles.action}>
        <Heart />
      </div>
    </aside>
  )
}
