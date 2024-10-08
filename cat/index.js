

// commont funtion for get elment using id from html
const getElement_By_Id = (id) => {
    return document.getElementById(id);
}
let spinner = getElement_By_Id("spinner");


let assignData ;// this is  global variable ...

// getting  4 categories
const getCategories = async () => {
    const category_container = getElement_By_Id("category_container");
    try {
        const data = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
        const response = await data.json();
        response?.categories?.forEach((item) => {
            category_container.innerHTML += categoryHtmlContents(item)
        });
        
    } catch (err) {
        console.log(err);
    }
}
getCategories();

// commont function for getting api data 
const getProducts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log("error", err);
    }
}


// display productlist  in to html// initial product list
const displayProducts = (data) => {
    const product_container = getElement_By_Id("product_container");
    spinner.classList.add("flex")
    spinner.classList.remove("hidden");
    setTimeout(() => {
        product_container.innerHTML = "";
        if (data?.length === 0) {
            product_container.innerHTML = emptyContentsOfProducts();//thiis function imported from htmcontents file
        } else {
            data?.forEach((item) => {
                product_container.innerHTML += htmlContentsForCart(item);////thiis function imported from htmcontents file
            });
        }
        spinner.classList.add("hidden")
        spinner.classList.remove("flex")
    }, 2000);
};

// fetching all product lists..........
const fetchallData = async () => {
    try {
        const data = await getProducts("https://openapi.programming-hero.com/api/peddy/pets");
        displayProducts(data.pets);
        assignData = data //assignData is from global varriable
        
    } catch (err) {
        console.log(err);
    }
}
fetchallData()

// fetching products by category
const fetchByCategory = async (cat) => {
    try {
        const product_container = getElement_By_Id("product_container");
        product_container.innerHTML = "";
        spinner.classList.remove("hidden");
        spinner.classList.add("flex");
        const data = await getProducts(`https://openapi.programming-hero.com/api/peddy/category/${cat}`);
        displayProducts(data?.data)
        assignData = data?.data; //assignData is from global varriable
    } catch (err) {
        console.log(err);
    }
};

// set catygory button background color  after click
const activeButtonStyle = (element, cat) => {
    fetchByCategory(cat);
    const allCategoryButtons = document.querySelectorAll('#category_container li');
    allCategoryButtons.forEach((btn) => {
        btn.classList.remove("bg-[#0E7A811A]");
    });
    element.classList.add("bg-[#0E7A811A]");
}


// showing single product  details , by id
const productDetails = async (id) => {
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`);
        const data = await response.json();
        const { breed, price, gender, pet_details, vaccinated_status, image, pet_name, date_of_birth } = data.petData;
        const details_container = getElement_By_Id("details_container");
        details_container.innerHTML = productDeailsHtmlContents(breed, price, gender, pet_details, vaccinated_status, image, pet_name, date_of_birth)//  this function imported from another js file
        const modal = getElement_By_Id("modal");
        modal.classList.add("flex")
        details_container.classList.remove("hidden")
        details_container.classList.add("flex");
    } catch (err) {
        console.log(err);
    }
}

// clodeModal // closing details modal
const closeModel = () => {
    const modal = getElement_By_Id("modal");
    modal.classList.add("flex")
    details_container.classList.remove("flex");
    details_container.classList.add("hidden")
}


// sorting product to descending order
const sortedProducts = async () => {
    try {
        const data = assignData.sort((a, b) => b.price - a.price);//assignData is from global varriable
        
        displayProducts(data)
        const product_container = getElement_By_Id("product_container");
        product_container.innerHTML = "";
    } catch (err) {
        console.log(err);
    }
}


// handling like function and  store photo rightside 
const handleLike = (photo) => {
    const photoContainer = getElement_By_Id("photoContainer");
    photoContainer.innerHTML += `
    <img src="${photo}" alt=""
    class="w-[47%] h-[100px]  border  rounded object-cover ">
    `
}

// handling adopt button event
function clickAdoptBtn(e) {
    e.classList.add("bg-[lightgray]", "text-[gray]", "border-none", "disabled_button", "hover:bg-[lightgray]");
    const countdown_container = getElement_By_Id("countdown_container");
    countdown_container.classList.remove("hidden")
    countdown_container.classList.add("flex")
    setTimeout(() => {
        countdown_container.classList.add("hidden")
        countdown_container.classList.remove("flex")
        e.innerHTML = "Adopted"
        e.disabled = true;
    }, 3000);
    let counter = 3;
    const countdownElement = document.getElementById('countdown');

    const interval = setInterval(() => {
        countdownElement.textContent = counter;
        counter--;

        if (counter < 0) {
            clearInterval(interval);
        }
    }, 800);
}

// registration  function 



const login_container = getElement_By_Id("login_container");
const register = getElement_By_Id("register");
const login = getElement_By_Id("login");

const showReg = getElement_By_Id("showReg");

const close_login_form = getElement_By_Id("close_login_form");
close_login_form.addEventListener("click", ()=>{
    login_container.classList.add("hidden")

})
const showRegAndLogin = ()=>{
    login_container.classList.remove("hidden")
    login_container.classList.add("flex");
}



showReg.addEventListener("click",()=>{
    register.classList.remove("hidden")
    register.classList.add("flex")
    login.classList.add("hidden")
    login.classList.remove("flex")
})



// login function 