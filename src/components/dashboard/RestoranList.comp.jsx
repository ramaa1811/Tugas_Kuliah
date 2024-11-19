import PropTypes from 'prop-types';
import { TbChefHat, TbStarFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function RestoranList({ restaurant, setQuery, query }) {
    return (
        <section id="restaurant" className="container px-10 sm:px-56 mx-auto py-10 flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1.5 raleway">
                    <h1 className="text-2xl font-bold">Explore Restaurants</h1>
                    <div className="w-[150px] border-b-[2px] border-slate-600" />
                </div>

                <div className="wrapper">
                    <input 
                        type="text" 
                        className="focus:outline-none text-sm w-full sm:w-auto rounded-md p-1.5 px-3 raleway focus:text-sm border-slate-400 text-slate-500 border-[1.5px]" 
                        placeholder="search" 
                        value={query}
                        onChange={({target}) => setQuery(target.value)}
                    />
                </div>
            </div>
            
            {
                restaurant?.length === 0 
                ? 
                (
                    <div className='text-center text-sm uppercase passion-one-regular bg-red-100 py-10'>
                        <TbChefHat size={40} className='mx-auto' />
                        restoran tidak tersedia
                    </div>
                )
                : (
                    <div className="grid grid-cols-1 sm:grid-cols-3 duration-500 gap-4 sm:gap-6 gap-y-8 raleway">
                        {restaurant?.map((restoran) => (
                            <div key={restoran?.id} className="relative shadow-xl rounded-xl">
                                <img src={`https://restaurant-api.dicoding.dev/images/medium/${restoran?.pictureId}`} className="w-full object-cover h-[250px] rounded-t-xl" draggable="false" alt="picture" />
                                <div className="px-5 py-3 pb-16 flex flex-col gap-1">
                                    <div className="flex flex-col gap-0">
                                        <span className="passion-one-regular flex flex-row items-center gap-2">
                                            Rating : {restoran?.rating} 
                                            <TbStarFilled size={15} color="orange" />
                                        </span>
                                        <span className="passion-one-regular text-xl">{restoran?.name}</span>
                                    </div>
                                    <p className="leading-tight text-xs text-slate-700">
                                        {restoran?.description.split(' ').length > 0
                                            ? `${restoran.description.split(' ').slice(0, 50).join(' ')}...`
                                            : restoran.description}
                                    </p>
                                </div>

                                <span className="passion-one-regular rounded-r-lg absolute top-10 bg-slate-400 text-slate-900 py-2 w-32 text-center font-bold">
                                    Kota.
                                    {restoran?.city}
                                </span>

                                <div className="absolute bottom-6 left-0 w-full flex justify-center">
                                    <Link to={`/restorant/${restoran?.id}`} className="text-center tracking-wider hover:bg-slate-600 hover:py-1.5 duration-500 bg-slate-500 w-[90%] py-1 text-slate-50 rounded-sm text-sm passion-one-regular">
                                        Lihat Restaurant
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </section>
    )
}

RestoranList.propTypes = {
    restaurant: PropTypes.array,
    setQuery: PropTypes.func,
    query: PropTypes.string
}

