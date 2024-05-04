const fakeData = [
    {
        id: 1,
        title: '设计师最新发布的虚拟场景',
        date: '2024-05-01',
    },
    {
        id: 2,
        title: '太原市化肥厂改造动态',
        date: '2024-05-04',
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
