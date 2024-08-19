import { FaCalendar, FaLocationDot } from "react-icons/fa6"
import { formatCatrgory, formatDate, statusChange } from "../../../utils/helper"
import CardLink from "../../elemets/card/CardLink"


type Props = {
    location: string
    image: any
    title: string
    address: string
    status: string
    date: string
    desc: string
}

const CardReport = ({ location, image, title, address, status, date, desc }: Props) => {
    return (
        <CardLink to={`${location}`}  >
            <div className="images h-[150px] w-full relative">
                <img className='rounded-lg w-full h-full' src={image} alt="jalan rusak" />
            </div>
            <div className="space-y-2 mt-1 flex flex-col justify-between h-full">
                <h1 className=' font-semibold text-lg'>{title}</h1>

                <div className="flex items-center gap-1 ">
                    <FaLocationDot color='#6E849C' />
                    <p className='text-gray-500 text-sm'>{address}</p>
                </div>
                <div className="flex items-center gap-1 ">
                    <FaCalendar color='#6E849C' />
                    <p className='text-gray-500 text-sm'>{formatDate(date)}</p>
                </div>
                <p className='text-gray-500' >{formatCatrgory(desc)}</p>

                {/* status */}
                <div className="flex items-end justify-end mt-2">
                    <p className={`text-white w-full text-sm p-1 rounded-lg ${statusChange(status)} text-center`}>{status}</p>
                </div>
            </div>
        </CardLink>
    )
}

export default CardReport