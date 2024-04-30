import { NavLink } from 'react-router-dom';

const List = [
    {
        id: 1,
        title: '首页',
        path: '/'
    },
    {
        id: 2,
        title: '虚拟城市',
        path: '/city'
    },
    {
        id: 3,
        title: '创客空间',
        path: '/space'
    },
    {
        id: 4,
        title: '网络社区',
        path: '/community'
    },
    {
        id: 5,
        title: '关于我们',
        path: '/about'
    }
];

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-lg">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="flex grow justify-between">
                    <img src="/logo/main.jpg" alt="logo" className='h-14' />
                    <nav className="flex items-center gap-4 text-sm lg:gap-6">
                        {List.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                className={({ isActive }) => 
                                    `font-bold transition-colors text-foreground/60 ${isActive ? 'text-green-500' : 'hover:text-foreground/80'}`
                                }
                                
                            >
                                {item.title}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
