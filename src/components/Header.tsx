import Logo from '../assets/logo.svg'
const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="flex grow justify-between">
                    <img src={Logo} alt="logo" />
                    <nav className={'flex items-center gap-4 text-sm lg:gap-6'}>
                    <a href={'/'} className="transition-colors hover:text-foreground/80 text-foreground/60">首页</a>
                    <a href={'/city'} className="transition-colors hover:text-foreground/80 text-foreground/60">虚拟城市</a>
                    <a href={'/space'} className="transition-colors hover:text-foreground/80 text-foreground/60">创客空间</a>
                    <a href={'/community'} className="transition-colors hover:text-foreground/80 text-foreground/60">网络社区</a>
                    <a href={'/about'} className="transition-colors hover:text-foreground/80 text-foreground/60">关于我们</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header;
