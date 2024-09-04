
import contact from "../assets/contact.svg"
const Sticker = ({connectStatus,showConnect}) => {
  return (
    <div className='contact-sticker  bottom-[10vh] lg:bottom-[80px] ' onClick={()=>connectStatus(!showConnect)}>
        <img src={contact} alt="" className='w-[70%] h-[70%] object-cover '/>
        {/* <p className='font-semibold text-sm lg:text-xl capitalize '>connect</p> */}
    </div>
  )
}

export default Sticker