import { useEffect, useState } from "react";
import Phone from "../Phone/Phone";
import PhoneCard from "../Phone/PhoneCard";

const Favourites = () => {
    const [favourites,setFavourites] = useState([]);

    const [noFound,setNoFound] = useState("");

    const [isShow,setIsShow] = useState(false);

    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(()=>{
        const favouriteItems = JSON.parse(localStorage.getItem("favourites"));

        if(favouriteItems){
            setFavourites(favouriteItems)        

        const total = favouriteItems.reduce((previousValue,currentValue)=> previousValue + currentValue.price,0)
        
        console.log(total);

        setTotalPrice(total)

        }

        else {
            setNoFound('No Data Found')
        }
    },[]);


    console.log(favourites);

    const handleRemove = () =>{
        localStorage.clear()
        setFavourites([])
        setNoFound("No Data Found");
    }

    console.log(isShow)

    return (
        <div>
            {noFound ? <p className=" h-[80vh] flex justify-center items-center">{noFound}</p>
             : (
            <div>

                {favourites.length > 0 && (
                
                <div>
                    <button
                        onClick={handleRemove}
                        className="px-5 bg-green-200 block mx-auto p-2 rounded"
                        >
                         Delete All Favourite
                    </button>

                    <h2>Total Price : {totalPrice}</h2>
                </div>

                )}

                <div className="grid grid-cols-2 gap-5">
                   { 
                        isShow ? favourites.map((phone) => (
                        <PhoneCard key={phone.id} phone={phone}></PhoneCard>))
                        :
                        favourites.slice(0,4).map((phone) => (
                        <PhoneCard key={phone.id} phone={phone}></PhoneCard>))
                    }
                </div>

                    {favourites.length > 4 && 
                        <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto p-2 rounded">
                            {isShow ? "See Less" : "See More"}
                        </button>
}

            </div>
            )}
        </div>
    );
};

export default Favourites;