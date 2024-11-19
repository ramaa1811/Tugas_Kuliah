import { TbStarFilled } from "react-icons/tb";
import Slider from "react-slick";
import PropTypes from 'prop-types';

export default function CostumerExperience ({ settings }) {
    return (
        <section className="container px-10 sm:px-56 mx-auto flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5 raleway text-center">
                        <h1 className="text-2xl font-bold">Costumer Experience</h1>
                        <div className="w-[150px] mx-auto border-b-[2px] border-slate-600" />
                    </div>

                    <div className="slider-container">
                        <Slider {...settings}>
                            {
                                [
                                    {
                                        id: 1,
                                        foto: 'https://picsum.photos/200/300',
                                        name: 'Chef nani',
                                        description: 'Restoran bagus, dan makanannya juga sangat enak.'
                                    },
                                    {
                                        id: 2,
                                        foto: 'https://picsum.photos/200/300',
                                        name: 'Chef Garden',
                                        description: 'Pilihan restoran banyak dan pilihan makanannya juga banyak sekali.'
                                    },
                                    {
                                        id: 3,
                                        foto: 'https://picsum.photos/200/300',
                                        name: 'Chef Jorge',
                                        description: 'kalian wajib dateng ke sini sih, soalnya top markotop.'
                                    },
                                    {
                                        id: 4,
                                        foto: 'https://picsum.photos/200/300',
                                        name: 'Chef Nanji',
                                        description: 'gilaaa, keren banget tempat nya, recommend banget.'
                                    },
                                    {
                                        id: 5,
                                        foto: 'https://picsum.photos/200/300',
                                        name: 'Chef Pizk',
                                        description: 'demi apapun, ini paling keren sihh dari yang lainnya.'
                                    },
                                    {
                                        id: 6,
                                        foto: 'https://picsum.photos/200/300',
                                        name: 'Chef OConnel',
                                        description: 'terbaikk, tempat nyaman, bersih, makanan sangat enak. recommend!!.'
                                    },
                                ]?.map((value) => (
                                    <div key={value?.id} className="wrapper">
                                        <div className="bg-slate-300 rounded-sm p-6 mx-2 flex flex-col gap-2.5">
                                            <p className="text-xs p-0 font-semibold">
                                                <q>{value?.description}</q>
                                            </p>

                                            <div className="flex flex-row items-center gap-4">
                                                <img src={value?.foto} className="h-12 w-12 rounded-md border-4" alt="foto" />
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-base passion-one-regular text-slate-700">{value?.name}</span>

                                                    <div className="flex flex-row items-center gap-0.5">
                                                        <TbStarFilled color="orange" size={10} />
                                                        <TbStarFilled color="orange" size={10} />
                                                        <TbStarFilled color="orange" size={10} />
                                                        <TbStarFilled color="orange" size={10} />
                                                        <TbStarFilled color="orange" size={10} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </section>
    )
}

CostumerExperience.propTypes = {
    settings: PropTypes.array
}