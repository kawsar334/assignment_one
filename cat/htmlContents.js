

// this file code for purpose of clean code . here all html elements .

//  category htmlcontents
const categoryHtmlContents= (item)=>{
    return `
              <li onclick="activeButtonStyle(this,'${item?.category}')" id="cat_btn"
                class="py-2 px-4 border-[2px] border-[lightgray]   rounded-[30px]  cursor-pointer flex justify-center items-center gap-5 " data-category="${item?.category}">
                <img src="${item?.category_icon}" alt=""
                    class="w-[30px] h-[30px] object-cover">
                ${item?.category}
            </li>
            `;
}

// showing error mesage if product length is 0.
const emptyContentsOfProducts = () => {
    return `
            <div class="w-full md:w-[90%] bg-[#13131308] rounded flex justify-center items-center gap-4 flex-col p-4 capitalize " id="error_modal">
            <img src="../assets/error.webp" alt="" class="w-[200px] h-[200px]">
                <h2 class="text-2xl font-bold lato ">No Information Available</h2>
                <p class="w-[90%] md:w-[75%] text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                its layout. The point of using Lorem Ipsum is that it has a.</p>
            </div>
            `
}

// product details 
const productDeailsHtmlContents = (breed, price, gender, pet_details, vaccinated_status, image, pet_name, date_of_birth)=>{
    return `        
                        <div class=" h-max w-full md:w-[60%]  rounded-[20px] shadow   bg-[white] p-3 flex justify-center items-start gap-5 flex-col" id="modal">
                            <img src="${image}" alt="" class="w-full h-[200px] object-cover rounded-[20px] " >
                            <div class=" flex  justify-start items-center gap-4 flex-wrap ">
                              <p class="flex justify-start items-center gap-2  w-[40%] ">
                                <i class="fa-brands fa-windows"></i>
                                <span>Breed: ${breed || '<span class="text-[crimson]">breed not found</span>'}</span>
                            </p>
                            <p class="flex justify-start items-center gap-2  w-[40%] ">
                                <i class="fa-solid fa-calendar-days"></i>
                                <span>Date of birth: 2023-08-20</span>
                            </p>
                            <p class="flex justify-start items-center gap-1  w-[40%] ">
                                <i class="fa-solid fa-mercury"></i>
                                <span>Gender: ${gender || "Gender Not Found.."}</span>
                            </p>
                            <p class="flex justify-start items-center gap-1  w-[40%] ">
                                <span>$</span><b>Price</b>: ${price || '<span class="text-[crimson]">price not found</span>'}
                            </p>
                             <p class="flex justify-start items-center gap-1 ">
                                <span></span><b>vaccinated_status</b>: ${vaccinated_status || "vaccinated_status Not found.."}
                            </p>
                            </div>
                            <div>
                                <h2 class="font-bold ">Details Information</h2>
                                <p class="text-[gray] ">${pet_details || '<span class="text-[crimson]">description not found</span>'}</p>
                            </div>
                           
                            <button class="btn btn border w-full bg-[#0E7A811A] rounded-[10px]   right-2 top-2" id="" onclick="closeModel()">Cancel</button>                      
                    </div>
        `
}


// this html for all products and filter products by category
const htmlContentsForCart = (item) => {
    const { breed, price, gender, pet_details, vaccinated_status, image, pet_name, date_of_birth } = item ;

    return `
                    <div class="card bg-base-100 w-full  md:w-[270px] shadow-xl  p-2 border my-1 cursor-pointer" id="card">
                        <figure class="w-[95%] h-[150px] m-auto">
                            <img src="${image || "./images/cat.png"}" alt="Loading..." class="rounded-[10px]" />
                        </figure>
                        <div class="fex justify-start items-start gap-3 my-2 p-2">
                            <h2 class="font-bold ">${pet_name || '<span class="text-[crimson]">Not found !</span>'}</h2>
                            <p class="flex justify-start items-center gap-2 mb-2 ">
                                <i class="fa-brands fa-windows"></i>
                                <span>Breed: ${breed || '<span class="text-[crimson]">Not found !</span>'}</span>
                            </p>
                            <p class="flex justify-start items-center gap-2 mb-2 ">
                                <i class="fa-solid fa-calendar-days"></i>
                                <span>Date of birth: ${date_of_birth || '<span class="text-[crimson]">Not found !</span>'}</span>
                            </p>
                            <p class="flex justify-start items-center gap-2 mb-2 ">
                                <i class="fa-solid fa-mercury"></i>
                                <span>Gender: ${gender || '<span class="text-[crimson]">Gender Not available !</span>'}</span>
                            </p>
                            <p class="flex justify-start items-center gap-2 mb-2 ">
                                <span>$</span><b>Price</b>: ${item.price || "price Not found.."}
                            </p>
                            <div class="flex justify-around gap-2  p-2">
                                <button class="py-1 px-2 border-[lightgray] border-[1px] rounded text-[teal] hover:text-[white] hover:bg-[teal] transition-all" onclick="handleLike('${item?.image}')" id="likebtn">
                                    <i class="fa-regular fa-thumbs-up"></i>
                                </button>
                                <button class="py-1 px-2 border-[lightgray] border-[1px] rounded text-[teal] hover:text-[white] hover:bg-[teal] transition-all" onclick="clickAdoptBtn(this)">Adopt</button>
                                <button class="py-1 px-2 border-[lightgray] border-[1px] rounded text-[teal] hover:text-[white] hover:bg-[teal] transition-all" onclick="productDetails('${item?.petId}')">Details</button>
                            </div>
                        </div>
                    </div>
                    `;
}


// 