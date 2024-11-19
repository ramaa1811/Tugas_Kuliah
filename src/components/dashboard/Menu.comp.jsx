export default function Menu() {
    return (
        <section className="container px-10 sm:px-56 mx-auto flex flex-col gap-4">
            <div className="flex flex-col gap-1.5 raleway text-center">
                <h1 className="text-2xl font-bold">Our Menu</h1>
                <div className="w-[150px] mx-auto border-b-[2px] border-slate-600" />
            </div>

            <div className="bg-slate-300 rounded-lg py-3">
                <div className="flex flex-col sm:flex-row justify-between">
                    {
                        [
                            {id: 1, image: 'https://front-end-expert-dicoding.vercel.app/images/menus/seafoods.jpg', type: 'Seafoods', description: 'Savor fresh fish, shrimp, and lobster cooked to perfection daily.'},
                            {id: 2, image: 'https://front-end-expert-dicoding.vercel.app/images/menus/drinks.jpg', type: 'Japanese Foods', description: 'Enjoy delicious sushi, sashimi, and tempura with authentic Japanese flavors..'},
                            {id: 3, image: 'https://front-end-expert-dicoding.vercel.app/images/menus/japan-foods.jpg', type: 'Drinks', description: 'Refresh with our variety of smoothies, juices, and iced teas.'},
                        ]?.map((menu) => (
                            <div key={menu?.id} className="flex flex-row items-center px-8 py-4 gap-4">
                                <img src={menu?.image} className="border-4 border-green-600 h-16 w-16 bg-cover object-cover rounded-full" draggable="false" alt={menu?.type} />

                                <div className="flex flex-col gap-0">
                                    <h6 className="passion-one-regular text-lg">{menu?.type}</h6>
                                    <small className="leading-tight text-xs text-slate-700">{menu?.description}</small>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}