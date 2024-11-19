import { TbChefHat } from "react-icons/tb";

export default function Banner() {
    return (
        <section className="relative bg-black">
            <img 
                src="https://wallpapercat.com/w/full/c/4/f/584415-1920x1080-desktop-1080p-restaurant-wallpaper.jpg" 
                draggable="false" 
                alt="banner" 
                className="object-cover w-full h-[400px] opacity-20"
            />

            <div className="absolute top-0 left-0 w-full h-full raleway">
                <div className="flex items-center h-full justify-center">
                    <div className="flex flex-col gap-4 text-slate-50 text-center">
                        <h1 className="text-3xl font-bold flex flex-col sm:flex-row gap-2 justify-center">Selamat datang di <strong className="mx-auto sm:mx-0 uppercase flex flex-row items-center gap-2">Bloster Apps <TbChefHat /></strong></h1>
                        <span className="text-base font-normal">disini kami menampilkan daftar restoran dari beberapa wilayah di indonesia yang bisa anda kunjungi</span>

                        <div className="wrapper mt-4">
                            <a href="#restaurant">
                                <button type="button" className="border-[1px] hover:py-3 hover:bg-slate-200 hover:text-slate-800 duration-500 p-2 px-10 text-sm font-semibold rounded-sm capitalize tracking-wider">explore</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}