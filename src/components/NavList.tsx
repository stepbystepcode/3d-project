import { ArrowRight } from 'lucide-react';
const fakeData = [
    {
        id: 1,
        title: '虚拟城市漫游',
        link: '/city'
    },
    {
        id: 2,
        title: '在线设计与发布',
        link: '/space'
    },
    {
        id: 3,
        title: '学术交流与共享',
        link: '/community'
    }

]
const NavList = () => {
    return (
        <>
            <ul>
                {fakeData.map((item) => (
                    <li key={item.id} className={`flex border-b items-center justify-end border-gray-200 h-20 p-4`} style={{background:`linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 60%), url('/logo/${item.id}.png')  no-repeat left center / auto 100%`}}>
                        <a href={item.link} className="text-green-600">{item.title}</a><ArrowRight className="text-green-600" />
                    </li>
                ))}
            </ul>
        </>
    )
}
export default NavList;
