import PropTypes from 'prop-types';
import { TbStarFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function PopularRestoran ({restaurant}) {
    return (
        <section className="container px-10 sm:px-56 mx-auto flex flex-col gap-4 py-10">
            <div className="flex flex-col gap-1.5 raleway text-center">
                <h1 className="text-2xl font-bold">Popular Restaurants</h1>
                <div className="w-[150px] mx-auto border-b-[2px] border-slate-600" />
            </div>

            <div className="flex flex-col gap-8">
                {
                    restaurant?.filter(({rating}) => rating > 4.7).map((restoran, index) => (
                        <div key={restoran?.id} className={`flex gap-2 sm:gap-10 flex-col ${index % 2 == 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
                            <div className="relative sm:w-[400px]">
                                <img 
                                    src={`https://restaurant-api.dicoding.dev/images/medium/${restoran?.pictureId}`} 
                                    alt={restoran?.pictureId} 
                                    className="h-auto w-full rounded-lg"
                                />
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <div className="flex flex-col gap-0">
                                    <h6 className="passion-one-regular text-slate-900">{restoran?.name}</h6>
                                    <div className="flex flex-row items-center gap-1">
                                        <strong className="text-slate-700 text-sm">Rating : {restoran?.rating}</strong>
                                        <TbStarFilled size={15} color="orange" />
                                    </div>
                                </div>
                                <p className="leading-tight text-xs text-slate-700">
                                    {restoran?.description.split(' ').length > 0
                                        ? `${restoran.description.split(' ').slice(0, 50).join(' ')}...`
                                        : restoran.description}
                                </p>

                                <div className="w-full">
                                    <Link to={`/restorant/${restoran?.id}`} className="tracking-wider hover:bg-slate-600 hover:py-1.5 duration-500 bg-slate-500 px-8 py-1 text-slate-50 rounded-sm text-sm passion-one-regular">
                                        Lihat Restaurant
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

PopularRestoran.propTypes = {
    restaurant: PropTypes.array,
}