import { Rating } from 'flowbite-react'
const RatingStar = ({ point }) => {
  const roundedStar = Math.floor(point)
  return (
    <Rating>
      <Rating.Star filled={roundedStar >= 1 ? true : false} />
      <Rating.Star filled={roundedStar >= 2 ? true : false} />
      <Rating.Star filled={roundedStar >= 3 ? true : false} />
      <Rating.Star filled={roundedStar >= 4 ? true : false} />
      <Rating.Star filled={roundedStar >= 5 ? true : false} />
    </Rating>
  )
}

export default RatingStar
