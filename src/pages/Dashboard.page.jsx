import { getList } from '../services/Apiservices';
import { useEffect, useState } from "react";
import Navigation from "../components/utils/Navigation.comp";
import Banner from "../components/dashboard/Banner.comp";
import RestoranList from "../components/dashboard/RestoranList.comp";
import Menu from "../components/dashboard/Menu.comp";
import PopularRestoran from "../components/dashboard/PopularRestoran.comp";
import CostumerExperience from "../components/dashboard/CostumerExperience.comp";
import Footer from "../components/utils/Footer.comp";

export default function Dashboard() {
    const [restaurant, setRestaurant] = useState([]);
    const [query, setQuery] = useState('');

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {restaurants} = await getList();
                setRestaurant(restaurants);
            } catch(error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    const filteredRestaurants = restaurant.filter((restoran) =>
        restoran.name.toLowerCase().includes(query.toLowerCase())
    );
    
    return (
        <>
            <Navigation />
            <main className="pb-14">
                <Banner />
                <RestoranList query={query} setQuery={setQuery} restaurant={filteredRestaurants} />
                <Menu />
                <PopularRestoran restaurant={restaurant} />
                <CostumerExperience settings={settings} />
            </main>        
            <Footer />
        </>
    )
}