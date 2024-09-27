var productInCart=JSON.parse(window.localStorage.productInCart)
var orderedProduct=document.getElementsByClassName("ordered-products")[0]
var sum=localStorage.sum
var total=document.getElementsByClassName("total")[0]
// console.log(productInCart)
productInCart.forEach(element => {
      orderedProduct.innerHTML+=`<div class="d-flex">
                                    <img src="${element.img}" alt="">
                                    <div>
                                        <p>
                                            <span>Product: </span>
                                            <span>${element.name}</span>
                                        </p>
                                        <p>
                                            <span>Category: </span>
                                            <span>${element.category}</span>
                                        </p>
                                        <p>
                                            <span>Price: ${element.price}</span>
                                        </p>
                                        <div class="flex-between">
                                            <span>
                                                <span  class="c-blue fw-bold " id="productCounter">1</span>
                                                <i class="fa-solid fa-plus c-green  px-10" onclick="{increase()}"></i>
                                                <i class="fa-solid fa-minus " style="color:red" onclick="{decrease()}"></i>
                                            </span>
                                            <button class="btn-shape" style="background-color: red; cursor:pointer" id=${element.id} onclick="{remove(this.id)}">Remove</button>
                                        </div>
                                    </div>
                                </div>`  
});
function totalfun(){
    total.innerHTML="Total Price: " + localStorage.sum +"$"

}
totalfun()
function remove(id){

let choosenItem= productInCart.find((item)=> item.id==id )
productInCart.splice(productInCart.indexOf(choosenItem),1)
sum-=parseInt(choosenItem.price)
localStorage.sum=sum
// orderedProduct.innerHTML
localStorage.productInCart=JSON.stringify(productInCart)
console.log(localStorage.productInCart)
window.location.reload()
totalfun()

}