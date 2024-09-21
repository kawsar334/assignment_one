
// // // Importing the necessary data from api.js
// // import { htmlTamplate, frontend, fullstack, designPortfolio } from "./api.js";


// // const get_Element_By_Id =(id)=>{
// //   const container = document.getElementById(id);
// //   return  container;
// // }
// // const createElement = (div, items, )=>{

// // }

// // const html_content = document.getElementById("html_content");
// // htmlTamplate.forEach(item => {
// //   const itemDiv = document.createElement("div");
// //   itemDiv.innerHTML = `
// //     <div class="card   w-[300px] h-[300px] shadow-xl">
// // <dialog id="my_modal_${item.id}" class="modal">
// //   <div class="modal-box w-11/12 max-w-5xl">
// //     <h3 class="text-lg font-bold">${item.title}!</h3>
// //     <p class="py-4">${item.desc}</p>
// //     <div class="modal-action">
// //       <form method="dialog">
// //         <!-- if there is a button, it will close the modal -->
// //         <button class="btn">Close</button>
// //       </form>
// //     </div>
// //   </div>
// // </dialog>
// //       <figure>
// //         <img src="${item.img}" alt="${item.title}" />
// //       </figure>
// //       <div class="card-body">
// //         <h2 class="card-title">${item.title}</h2>
// //         <div class="card-actions justify-end">
// //         <a href="${item.github}" target="_blank" class="btn  py-0" ">code</a>
// //           <button class="btn  py-0" onclick="my_modal_${item.id}.showModal()">see more</button>
// //         </div>
// //       </div>
// //     </div>
// //   `;
// //   itemDiv.classList.add("flex", "justify-center", "items-center", "bg-[rgba(0,0,0,0.1)]", "card", "bg-base-100", "image-full",);
// //   html_content.appendChild(itemDiv);
// // });




// import { htmlTamplate, frontend, fullstack, designPortfolio } from "./api.js";
// const get_Element_By_Id = (id) => {
//   return document.getElementById(id);
// };
// const createElement = (items, container) => {
//   items.forEach((item) => {
//     const itemDiv = document.createElement("div");
//     itemDiv.innerHTML = `
//       <div class="card w-[300px] h-[300px] shadow-xl">
//         <dialog id="my_modal_${item.id}" class="modal">
//           <div class="modal-box w-11/12 max-w-5xl">
//             <h3 class="text-lg font-bold">${item.title}</h3>
//             <p class="py-4">${item.desc}</p>
//             <div class="modal-action">
//               <form method="dialog">
//                 <button class="btn">Close</button>
//               </form>
//             </div>
//           </div>
//         </dialog>
//         <figure>
//           <img src="${item.img}" alt="${item.title}" />
//         </figure>
//         <div class="card-body">
//           <h2 class="card-title">${item.title}</h2>
//           <div class="card-actions justify-end">
//             <a href="${item.github}" target="_blank" class="btn py-0">Code</a>
//             <button class="btn py-0" onclick="document.getElementById('my_modal_${item.id}').showModal()">See More</button>
//           </div>
//         </div>
//       </div>
//     `;
//     itemDiv.classList.add("flex", "justify-center", "items-center", "bg-[rgba(0,0,0,0.1)]", "card", "bg-base-100", "image-full");
//     container.appendChild(itemDiv);
//   });
// };
// const html_content = get_Element_By_Id("html_content");
// createElement(htmlTamplate, html_content);
// const frontend_content = get_Element_By_Id("frontend_content");
// createElement(frontend, frontend_content);
// // fullstack_container
// const fullstack_content = get_Element_By_Id("fullstack_content");
// createElement(fullstack, fullstack_content);

// const desing_conainer = get_Element_By_Id("desing_conainer");
// createElement(designPortfolio, desing_conainer);
// Importing the necessary data from api.js
import { htmlTamplate, frontend, fullstack, designPortfolio } from "./api.js";
class TemplateRenderer {
  constructor(containerId, items) {
    this.container = document.getElementById(containerId);
    this.items = items;
  }
  createElement() {
    this.items.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.innerHTML = `
        <div class="card w-[300px] h-[300px] shadow-xl   cursor-pointer z-10 bg-[white] text-[black]">
          <dialog id="my_modal_${item.id}" class="modal">
            <div class="modal-box w-11/12 max-w-5xl">
              <h3 class="text-lg font-bold text-[gray]">${item.title}</h3>
              <p class="py-4 text-[gray]">${item.desc}</p>
              <div class="modal-action">
                <form method="dialog">
                  <button class="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          <div class="card-body">
          <h2 class="card-title">${item.title}</h2>
          <div class="card-actions justify-end flex-wrap items-center ">
       
          <a href="${item.github || item.demo}" target="_blank" class=" border  py-1 px-3 rounded bg-black text-white  hover:bg-transparent card">Github</a>
          <a href="${item.demo || item.github}" target="_blank" class="border card py-1 px-3 rounded  text-black">Demo</a>
          <button class="border card  py-1 px-3 rounded" onclick="document.getElementById('my_modal_${item.id}').showModal()">Details</button>
            </div>
          </div>
          <figure>
          <img src="${item.img}" alt="${item.title}" class="w-full h-[120px] object-cover " />
          </figure>
          

        </div>
      `;
      itemDiv.classList.add("flex", "justify-center", "items-center", "bg-[rgba(0,0,0,0.1)]", "card", "bg-base-100", "image-full");
      this.container.appendChild(itemDiv);
    });
  }
}
const htmlRenderer = new TemplateRenderer("html_content", htmlTamplate);
htmlRenderer.createElement()
const frontendRenderer = new TemplateRenderer("frontend_content", frontend);
frontendRenderer.createElement();
const fullstackRenderer = new TemplateRenderer("fullstack_content", fullstack);
fullstackRenderer.createElement();
const designRenderer = new TemplateRenderer("design_conainer", designPortfolio);
designRenderer.createElement();
