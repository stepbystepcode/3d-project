const fakeData = [
    {
        id: 1,
        title: '终于来了，太原化肥厂还可以这样改造',
        date: '2021-10-01',
    },
    {
        id: 2,
        title: '太原化肥厂改造项目启动',
        date: '2021-10-01',
    }
]
const BulletinList = () => {
    return (
        <>
            <ul>
                {fakeData.map((item) => (
                    <li key={item.id} className="flex p-4 border-b border-gray-200">
                        <img src={`https://picsum.photos/200/150?${item.id}`} className="max-w-[150px] max-h-[100px] mr-4 rounded-lg " />
                        <div className="flex flex-col">
                        <a href="#" className="text-green-600">{item.title}</a>
                        <span className="float-right text-gray-500">发布日期: {item.date}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default BulletinList;
