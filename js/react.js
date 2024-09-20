import { frontend } from "./api.js";
const element = document.getElementById("frontendContainer");
console.log(frontend)

frontend.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
    <div class="card   w-[300px] h-[300px] shadow-xl">
<dialog id="my_modal_${item.id}" class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <h3 class="text-lg font-bold">${item.title}!</h3>
    <p class="py-4">${item.desc}</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
      <figure>
        <img src="${item.img}" alt="${item.title}" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${item.title}</h2>
        <div class="card-actions justify-end">
        <a href="${item.demo}" target="_blank" class="btn  py-0" ">code</a>
          <button class="btn  py-0" onclick="my_modal_${item.id}.showModal()">see more</button>
        </div>
      </div>
    </div>
  `;
    itemDiv.classList.add("flex", "justify-center", "items-center", "bg-[gray]", "card", "bg-base-100", "image-full",);
    element.appendChild(itemDiv);
});


