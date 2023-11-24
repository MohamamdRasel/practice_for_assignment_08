import { useEffect, useState } from "react";
import Phone from "../Phone/Phone";
import PhoneCard from "../Phone/PhoneCard";

const Favourites = () => {
    const [favourites,setFavourites] = useState([])

    const [noFound,setNoFound] = useState("")

    useEffect(()=>{
        const favouriteItems = JSON.parse(localStorage.getItem("favourites"));

        if(favouriteItems){
            setFavourites(favouriteItems)
        }

        else {
            setNoFound('No Data Found')
        }
    },[])


    console.log(favourites);

    const handleRemove = () =>{
        localStorage.clear()
        setFavourites([])
        setNoFound("No Data Found");
    }

    return (
        <div>
            {noFound ? <p className=" h-[80vh] flex justify-center items-center">{noFound}</p>
             : (
            <div>

                {favourites.length > 0 && (
                
                <button
                 onClick={handleRemove}
                 className="px-5 bg-green-200 block mx-auto p-2 rounded"
                 >
                    Delete All Favourite
                </button>
                )}

                <div className="grid grid-cols-2 gap-5">
                    {favourites.map((phone) => (
                    <PhoneCard key={phone.id} phone={phone}></PhoneCard>))}
                </div>

                <button className="px-5 bg-green-200 block mx-auto p-2 rounded">See More</button>


            </div>
            )}
        </div>
    );
};

export default Favourites;