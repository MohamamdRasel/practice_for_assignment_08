import React from 'react';
import swal from 'sweetalert';

const PhoneCard = ({phone}) => {
    const {id, brand_name, phone_name, price, image, description } = phone ||{}

    const handleAddToFavourites = () => {

        const addedFavouritesArray = [];

        const favouriteItems = JSON.parse(localStorage.getItem('favourites'))

        if (!favouriteItems) {
            addedFavouritesArray.push(phone)
            localStorage.setItem('favourites',JSON.stringify(addedFavouritesArray))
            swal("Good job!", "Your Product added successfully!", "success");
        }

        else{

            const isExits = favouriteItems.find(phone=> phone.id ==id)

            if (!isExits){
                addedFavouritesArray.push(...favouriteItems,phone)
            localStorage.setItem('favourites',JSON.stringify(addedFavouritesArray))
            swal("Good job!", "Your Product added successfully!", "success");
            }

            else{
                swal("Error!", "No Duplicate", "success");
            }

            
        }

    }

    return (
        <div className=' flex justify-center items-center h-[80vh]'>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={image}
                    />
                </div>
                <div className=''>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {brand_name}
                    </h4>
                    <h4 className="block mt-3 font-sans text-xl antialiased font-semibold leading-relaxed text-gray-700">
                        {phone_name}
                    </h4>
                    <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                        {description}
                    </p>
                </div>
                <div className="flex items-center justify-between p-6">
                       
                <div className="p-6 pt-0">                    
                    
                    <button onClick={handleAddToFavourites}
                        className="flex items-center gap-2 px-3 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                       Add To Favourites
                    </button>                    
                </div>                          
                        
                   
                    {/* <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                        January 10
                    </p> */}
                </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;