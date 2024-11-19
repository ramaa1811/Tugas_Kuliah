import { TbChefHat } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
    const location = useLocation();
    
    return (
        <header className="bg-slate-100 sticky top-0 z-50">
                <nav className="container px-10 sm:px-56 mx-auto py-4 flex justify-between items-center">
                    <h1 className="flex uppercase flex-row items-center gap-2 text-2xl passion-one-regular">
                        bolster apps
                        <TbChefHat />
                    </h1>

                    <ul className="flex flex-row items-center gap-6 capitalize text-sm font-medium">
                        <li><Link to="/" className={location.pathname === '/' ? 'text-slate-800 border-b-[1.5px] font-bold border-slate-500 pb-1' : 'text-slate-600'}>home</Link></li>
                        <li><Link to="/favorite" className={location.pathname === '/favorite' ? 'text-slate-800 border-b-[1.5px] font-bold border-slate-500 pb-1' : 'text-slate-600'}>Favorite</Link></li>
                    </ul>
                </nav>
            </header>
    )
}