import { img } from "motion/react-client"

const Card = ({style,text, image}) => {
  return image&& !text?(
    <img className="absolute w-15 cursor-grab" src={image}/>
  ):(
    <div className="absolute px-1 py-4 text-lg text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
        style={style}
    >
      {text}
    </div>
  )
}

export default Card
