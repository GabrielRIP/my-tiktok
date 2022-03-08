import { useRef, useState } from 'react'
import styles from './style.module.css'
const SRC = 'https://v16-webapp.tiktok.com/e6cf518c02222d3078bb6b8eaf6daa57/6226fdd2/video/tos/useast2a/tos-useast2a-ve-0068c004/5ee8fea759f64e248f0547fdfadd4478/?a=1988&br=2100&bt=1050&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3pPnz7ThtqXQDXq&l=202203080055000102230840490032241B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amY8aWQ6ZnlmOzMzNzczM0ApPDhkM2c2N2U4Nzo0Zjo3NGcxbDBicjRfcmJgLS1kMTZzczMyMDFiYC4yYmEvNGAtLjE6Yw%3D%3D&vl=&vr='

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div>
      <video ref={video} className={styles.video} src={SRC} controls={false} />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}
