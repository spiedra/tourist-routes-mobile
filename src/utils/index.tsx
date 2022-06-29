import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import img9 from '../assets/9.jpg'
import img10 from '../assets/10.jpg'
import img11 from '../assets/11.jpg'
import img12 from '../assets/12.jpg'
import img13 from '../assets/13.jpg'
import img14 from '../assets/14.jpg'
import img15 from '../assets/15.jpg'
import img16 from '../assets/16.jpg'
import img17 from '../assets/17.jpg'
import img18 from '../assets/18.jpg'
import img19 from '../assets/19.jpg'
import img20 from '../assets/20.jpg'

const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20]
export const getRandomImage = (random:number) => {
  return imageArray[random]
}

export const randomNumberByRange = (lower:number, upper:number) => {
  const posibilities = upper - lower
  let random = Math.random() * (posibilities + 1)
  random = Math.floor(random)
  return lower + random
}