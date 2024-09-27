var ALL=JSON.parse(window.localStorage.productInCart);
var addCart=document.getElementById("addCart")
ALL.forEach(element => {
    addCart.innerHTML+=`
              <div class="flex-between w-full">
                <p class="c-blue">${element.name}</p>
                <span>
                  <span  class="c-blue fw-bold " class="productCounter" onclick="write(this)">1</span>
                 <i class="fa-solid fa-plus c-green  px-10" id=${element.id} onclick="increase(this.id,this)"></i>
                  <i class="fa-solid fa-minus " style="color:red" id=${element.ID} onclick="{decrease(this.id,this)}"></i>
                  </span>
              </div>`;
              
           
});