import { useEffect, useState } from "react";
import Navigation from "../components/utils/Navigation.comp";
import { getDetailRestoran } from "../services/Apiservices";
import { useParams } from "react-router-dom";
import { TbStarFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "../components/utils/Footer.comp";

export default function Detail() {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            const {restaurant} = await getDetailRestoran(id);
            setDetail(restaurant);
        }

        fetchData();
    }, [id]);
    

    console.log(detail);
    return (
        <>
            <Navigation />
            <main>
                <section className="container px-10 sm:px-56 mx-auto flex flex-col gap-4 py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
                        <div className="sm:col-span-4">
                            <img src={`https://restaurant-api.dicoding.dev/images/medium/${detail?.pictureId}`} alt="foto" className="h-full rounded-md" />
                        </div>
                        
                        <div className="sm:col-span-2 flex flex-col gap-2">
                            <div className="flex flex-col gap-0">
                                <h6 className="passion-one-regular text-2xl">{detail?.name}</h6>
                                <span className="passion-one-regular flex flex-row items-center gap-1">Rating : ${detail?.rating} <TbStarFilled color="orange" /></span>
                            </div>
                            
                            <span className="m-0 flex flex-row items-center passion-one-regular gap-1">
                                <FaLocationDot />
                                {detail?.address}
                            </span>

                            <div className="flex flex-col gap-1">
                                <span className="passion-one-regular capitalize">kategori</span>
                                <div className="flex flex-row raleway items-center gap-2 text-xs">
                                    {detail?.categories?.map((value) => (
                                        <small key={value?.name} className="bg-slate-300 w-auto capitalize p-0.5 text-center rounded-full">{value?.name}</small>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="passion-one-regular capitalize">minuman</span>
                                <div className="grid grid-cols-3 raleway gap-2 text-xs">
                                    {detail?.menus?.drinks?.map((value) => (
                                        <small key={value?.name} className="bg-slate-300 w-auto capitalize p-0.5 text-center rounded-full">{value?.name}</small>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="capitalize passion-one-regular">makanan</span>
                                <div className="grid grid-cols-2 raleway gap-2 text-xs">
                                    {detail?.menus?.foods?.map((value) => (
                                        <small key={value?.name} className="bg-slate-300 w-auto capitalize p-0.5 text-center rounded-full">{value?.name}</small>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h6 className="passion-one-regular capitalize text-2xl">deskripsi</h6>
                        <p className="m-0 text-sm text-slate-600 leading-snug">{detail?.description}</p>
                    </div>
                </section>

                <section className="container px-10 sm:px-56 mx-auto flex flex-col gap-4 py-10">
                    <div className="flex flex-col gap-1.5 text-center">
                        <h1 className="text-2xl font-bold passion-one-regular">Customer Reviews</h1>
                        <div className="w-[150px] mx-auto border-b-[2px] border-slate-600" />
                    </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {
                        detail?.customerReviews?.map((review) => (
                            <div key={review?.name} className="flex flex-col gap-1.5 bg-slate-200 p-3 rounded-lg">
                                <div className="flex flex-col gap-0">
                                    <span className="passion-one-regular">{review?.name}</span>
                                    <small className="text-slate-500 raleway"><i>{review?.date}</i></small>
                                </div>
                                <span className="text-sm raleway text-slate-700"><q>{review?.review}</q></span>
                            </div>
                        ))   
                    }
                </div>
                </section>
            </main>

            <Footer />
        </>
    )
}