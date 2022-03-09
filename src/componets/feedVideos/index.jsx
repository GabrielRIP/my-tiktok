import VideoPlayer from '../videoPlayer/index.jsx'
import styles from './style.module.css'

const VIDEOS = [
  {
    id: 1,
    author: '@sino0173',
    description: '#fürdich #viral #foryou #fy #fyp #humor #schule',
    likes: 643,
    shares: 984,
    comments: 32,
    songTitle: 'Originalton - Sino',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e0d0d604dcb08eccae225c42eafa04ca~c5_720x720.jpeg?x-expires=1646863200&x-signature=ILCZ9k6NyOIKt%2FwXqm5PYHllEtQ%3D',
    src: 'https://v16-webapp.tiktok.com/5e288db88aaac11bfce5849b57518c6b/62282f55/video/tos/useast2a/tos-useast2a-pve-0068/f8c81be0353d454389479d09143a390f/?a=1988&br=1684&bt=842&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3pPnz7ThVigQDXq&l=202203082237170102231280502530E57C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anA4Ozw6ZnhwOjMzNzczM0ApZjg2PGg0OztlN2c5ZDM1PGc2NV5lcjRnLWhgLS1kMTZzc2ExMDZiM2NgX2JeMi4wNmE6Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    author: '@mr.magicx',
    description: '#fürdich #fürdeineseite #anotherone #russia #ukraine #ukraine🇺🇦 #kids #war #ww2 #ww3 #nowar #stopwar #humanity #unbelievable #sad #wow #respect #respekt #crazy #love',
    likes: 345,
    shares: 125,
    comments: 45673,
    songTitle: 'original sound - Jon From Denver',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c9d39bd0a1404575bee87f44f2067c75~c5_720x720.jpeg?x-expires=1646863200&x-signature=M%2Ben7TVx6woItZkhypgPAcZSVNw%3D',
    src: 'https://v16-webapp.tiktok.com/86493eb83b9a176d9c98e0279badb85c/622832e7/video/tos/useast2a/tos-useast2a-ve-0068c004/cdb679610afd42018325eeeed2b3118b/?a=1988&br=1938&bt=969&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=1&er=&ft=XOQ9-3pPnz7ThkBgQDXq&l=2022030822534801022307516008318013&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amk5dTw6Zjs2OzMzNzczM0ApaGg6PGZmNmU4NzplODs3M2dkc2NucjRvMGVgLS1kMTZzczA0NmBgLzQzMTI1Yy9fNS46Yw%3D%3D&vl=&vr='
  }
]

export default function FeedVideos () {
  return (
    VIDEOS.map(video => {
      return (
        <div key={video.id} className={styles.item}>
          <VideoPlayer {...video} />
        </div>
      )
    })
  )
}
