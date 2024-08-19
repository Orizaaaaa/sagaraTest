import Card from "../../elemets/card/Card"


type Props = {
    image: any
    title: string
    value: number
}

const CardBox = ({ image, title, value }: Props) => {
    return (
        <Card padding='p-3'>
            <div className="w-full">
                <div className="flex justify-between items-center">
                    <p className='text-slate-500 font-semibold' >{title}</p>
                    <img className='w-10 h-10' src={image} alt="dashboard" />
                </div>
                <h1 className='text-2xl font-bold my-3' > {value}</h1>
                <p className='text-slate-500' ><span className='text-green-500 ' >10%</span> 1 minggu terakhir</p>
            </div>
        </Card>
    )
}

export default CardBox