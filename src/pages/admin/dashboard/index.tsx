
import DefaultLayout from '../../../components/layout/DefaultLayout'
import { box1, box2, box3, } from '../../../image'
import ChartTwo from '../../../components/fragments/Charts/ChartTwo'
import CardBox from '../../../components/fragments/cardBox/CardBox'
import { MdOutlineCalendarToday } from 'react-icons/md'
import { FaChevronDown } from 'react-icons/fa6'


const DashboardAdmin = () => {


    //card
    const dataCard = [

        {
            name: 'Total Students',
            value: 513,
            image: box1
        },
        {
            name: 'Total Certified Students ',
            value: 489,
            image: box2
        },
        {
            name: 'Average Certification Score',
            value: 84.62,
            image: box3
        },

    ]




    return (
        <DefaultLayout>

            <div className="lg:flex justify-between space-y-3 lg:space-y-0">
                <div className='flex bg-white py-2 px-3  items-center gap-2 rounded-md shadow-default' >
                    <MdOutlineCalendarToday size={16} color='#64748B' />
                    <h1 className='text-gray-500 text-small' >Dec 29, 2023 - Jan 4, 2024</h1>
                </div>

                <div className='flex bg-white py-2 px-3 items-center gap-4 rounded-md shadow-default'>
                    <h1 className='text-gray-500 text-small'  > Daily</h1>
                    <FaChevronDown size={13} color='#64748B' />
                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-4">
                {dataCard.map((item, index) => (
                    <CardBox key={index} image={item.image} title={item.name} value={item.value} />
                ))}
            </div >
            <ChartTwo />
        </DefaultLayout>

    )
}

export default DashboardAdmin