var wrapper=document.getElementsByClassName("wrapper")[0]
var addCart=document.getElementById("addCart")
var orderedProduct=document.getElementsByClassName("ordered-products")[0]
var counter=document.getElementsByClassName("counter")[0]
var productCounter=document.getElementsByClassName("productCounter")
var favContent=document.getElementsByClassName("carousel")[0]
var addToCart=document.getElementsByClassName("add-to-cart")
var select=document.getElementsByTagName("select")[0]
var searchModeVar="name";




// addToCart.style.backgroundColor=localStorage.color;
// favContent.style.backgroundColor="red"
// counter.innerHTML=7;
if(counter.innerHTML){
    counter.style.display="block"
    // counter.innerHTML=JSON.parse(localStorage.productInCart).length;
}

// function d(){
//     addToCart.style.backgroundColor=localStorage.color;
// }
// d()
var productCounterjs=1;
var index=-1;
var ALL=[]
var count=0;
var data=[
    {
        id:1,
        ID:1,
        img:"Images/SRing1.jpg",
        name:"Silver Ring",
        price: "200",
        category:"Ring"
    },
    { id:2,
        ID:2,
        img:"Images/Bracelet1.jpeg",
        name:"Silver Bracelet",
        price: "1000",
        category:"Bracelet"
    },
    { id:3,
        ID:3,
        img:"Images/Earrings1.jpeg",
        name:"Silver Earrings",
        price: "300",
        category:"Earrings"
    },
    { id:4,
        ID:4,
        img:"Images/necklace1.jpg",
        name:"Gold Necklace",
        price: "2500",
        category:"Necklace"
    },
    { id:5,
        ID:5,
        img:"Images/SRing2.jpg",
        name:"Silver Ring",
        price: "200",
        category:"Ring"
    },
    { id:6,
        ID:6,
        img:"Images/Bracelet2.jpeg",
        name:"Almaz Bracelet",
        price: "1200",
        category:"Bracelet"
    },
    { id:7,
        ID:7,
        img:"Images/Earrings2.jpeg",
        name:"Almaz Earrings",
        price: "500",
        category:"Earrings"
    },
    { id:8,
        ID:8,
        img:"Images/necklace2.jpeg",
        name:"Almaz Necklace",
        price: "3100",
        category:"Necklace"
    },
    { id:9,
        ID:9,
        img:"Images/SRing3.jpg",
        name:"Silver Ring",
        price: "250",
        category:"Ring"
    },
    { id:10,
        ID:10,
        img:"Images/Bracelet3.jpeg",
        name:"Silver Bracelet",
        price: "500",
        category:"Bracelet"
    },
    { id:11,
        ID:11,
        img:"Images/Earrings3.jpeg",
        name:"Almaz Earrings",
        price: "1500",
        category:"Earrings"
    },
    { id:12,
        ID:12,
        img:"Images/necklace3.jpeg",
        name:"Silver Necklace",
        price: "780",
        category:"Necklace"
    },
    { id:13,
        ID:13,
        img:"Images/SRing4.jpg",
        name:"Almaz Ring",
        price: "2500",
        category:"Ring"
    },
    { id:14,
        ID:14,
        img:"Images/Bracelet4.jpeg",
        name:"Almaz Bracelet",
        price: "2500",
        category:"Bracelet"
    },
    { 
        id:15,
        ID:15,
        img:"Images/necklace4.jpeg",
        name:"Silver Necklace",
        price: "800",
        category:"Necklace"
    },
    { 
        id:16,
        ID:16,
        img:"Images/SRing5.jpg",
        name:"Silver Ring",
        price: "450",
        category:"Ring"
    },
    { 
        id:17,
        ID:17,
        img:"Images/Bracelet5.jpeg",
        name:"Silver Bracelet",
        price: "970",
        category:"Bracelet"
    },
    { 
        id:18,
        ID:18,
        img:"Images/necklace5.jpeg",
        name:"Gold Necklace",
        price: "2500",
        category:"Necklace"
    },
    { 
        id:19,
        ID:19,
        img:"Images/SRing6.jpg",
        name:"Silver Ring",
        price: "500",
        category:"Ring"
    },
]
function draw(data){
    data.forEach((item)=>{
        wrapper.innerHTML+=`<div class="item">
                        <img src="${item.img}" alt="">
                        <div class="item-info">
                            <div>
                                <span>Product: </span>
                                <span class="product-name">${item.name}</span>
                            </div>
                            <p>Price: ${item.price}$</p>
                            <div>
                                <span>Category: </span>
                                <span class="product-category">${item.category}</span>
                            </div>
                        </div>
                        <!-- <i class="fa-solid fa-check c-green fa-lg"></i> -->
                        <div class="flex-between item-foot">
                            <button class="add-to-cart btn-shape " id="${item.id}" onclick="{addTO(this.id,this)}" >Add to cart</button>
                            <i class="fa-solid fa-heart love" id="${item.id}" onclick="{change(this.id,this)}"></i>
                        </div>
                    </div>`
                    
    })
}
draw(data);
var sum;
if(localStorage.sum){
    sum=parseInt(localStorage.sum);
}else{
    sum=0;
}
function addTO (id,item){
    // console.log(id)
   
    if(window.localStorage.fName){
        if(item.innerHTML== "Add to cart"){
          localStorage.submitted="submitted";
          item.classList.add(localStorage.submitted);
          
          count++;
          localStorage.count=count
        //   counter.innerHTML=localStorage.count;
        //   counter.style.display="block"
          localStorage.content="Remove from cart"
          item.innerHTML= localStorage.content;
          localStorage.color="red"
          item.style.backgroundColor=localStorage.color
          let choosenItem=data.find((item)=>   item.id==id );
          sum+=parseInt(choosenItem.price)
          localStorage.sum=sum;
          console.log(sum)
          ALL.push(choosenItem)
          window.localStorage.productInCart=JSON.stringify(ALL)
          console.log(ALL)
          counter.innerHTML=JSON.parse(localStorage.productInCart).length;
          index++
          
        //   var ALL=JSON.parse(window.localStorage.productInCart);
            // var addCart=document.getElementById("addCart")
          addCart.innerHTML=""
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
          
      }else{
        localStorage.content="Add to cart"
          item.innerHTML= localStorage.content;
          localStorage.color="var(--blue-color)"
          item.style.backgroundColor=localStorage.color
          item.classList.remove('submitted');
          localStorage.submitted="removed";
          count--;
          localStorage.count=count
         
          let choosenItem=data.find((item)=>   item.id==id );
          sum-=parseInt(choosenItem.price)
          localStorage.sum=sum;
          ALL.splice(ALL.indexOf(choosenItem),1)
          window.localStorage.productInCart=JSON.stringify(ALL)
          console.log(ALL)
          addCart.innerHTML=""
          ALL.forEach(element => {
                addCart.innerHTML+=`
                        <div class="flex-between w-full">
                            <p class="c-blue">${element.name}</p>
                            <span>
                            <span  class="c-blue fw-bold " class="productCounter" onclick="write(this)">1</span>
                            <i class="fa-solid fa-plus c-green  px-10" id=${element.id} onclick="{increase(this.id,this)}"></i>
                            <i class="fa-solid fa-minus " style="color:red" id=${element.ID} onclick="{decrease(this.id,this)}"></i>
                            </span>
                        </div>`;})
        counter.innerHTML=JSON.parse(localStorage.productInCart).length;

      }
      }else{
        window.open("login.html")
      }
    
}
console.log(ALL)
function change(id,item){
    if(localStorage.fName){
     if(item.style.color=="red"){
       item.style.color="#999";
       let choosenItem=data.find((item)=>   item.id==id );
          fav.splice(ALL.indexOf(choosenItem),1)
          window.localStorage.fav=JSON.stringify(fav)
       
   }else{
       item.style.color="red";
       let choosenItem=data.find((item)=>   item.id==id );
       fav.push(choosenItem)
       console.log(fav)
       window.localStorage.fav=JSON.stringify(fav)
       
       
   }
    }else{
     window.open("login.html")
    }
 }

// function write(item){
// item.innerHTML=productCounterjs
// }
// function d(){
//     addToCart.style.backgroundColor="green";
// }
// d()
// addToCart.forEach((item)=>{
//     // if(item.classList.contains("submitted")){
//     //     item.style.backgroundColor="red"
//     // }
//     console.log(item)
// })
// addToCart.map()
// console.log(addToCart[9].classList.contains("submitted"))
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach((button, index) => {
    if (button.classList.contains('submitted')) {
        console.log(`Button ${index + 1} has the class "submitted"`);
        button.style.backgroundColor="red"
        button.innerHTML="Remove from cart"
        // Add your custom logic here
    }
});
function clear(){
    wrapper.innerHTML=""
}
///////////////////////////////////////////
function searchMode(mode){
    if(mode=="name"){
        searchModeVar="name"
        
    }else if(mode=="category"){
        searchModeVar="category"
    }
    }
///////////////////////////////////////
function search(inpValue){
if(searchModeVar=="name"){
    res=data.filter(item => item.name.toLowerCase().includes(inpValue.toLowerCase()))
}else if(searchModeVar=="category"){
    res=data.filter(item => item.category.toLowerCase().includes(inpValue.toLowerCase()))
}
clear()
if(inpValue==""){
    draw(data)
}else{
    draw(res)
}
}
// window.addEventListener('beforeunload', (event) => {
//     // Cancel the event as stated by the standard.
//     event.preventDefault();
//     // Chrome requires returnValue to be set.
//     event.returnValue = '';
//   });
function increase(id,item){
    // inx=id--
    // console.log(inx)
    console.log(productCounter)
    // productCounter[0].style.backgroundColor="red"

// productCounterjs++
// // write()

// productCounter[id].style.backgroundColor="red"
// console.log(id,item)
}

function decrease(id,item){
    console.log(id,item)
//    if(productCounterjs==1){
//     productCounterjs=1
//    }else{
//      productCounterjs--
//     // productCounter.innerHTML=productCounterjs
//    }
}
    // data.forEach((item=>{
    //      orderedProduct.innerHTML+=`<div class="d-flex">
    //                                     <img src="Images/Bracelet1.jpeg" alt="">
    //                                     <div>
    //                                         <p>
    //                                             <span>Product: </span>
    //                                             <span>${item.name}</span>
    //                                         </p>
    //                                         <p>
    //                                             <span>Category: </span>
    //                                             <span>${item.category}t</span>
    //                                         </p>
    //                                         <p>
    //                                             <span>Price: ${item.price}</span>
    //                                         </p>
    //                                         <div class="flex-between">
    //                                             <span>1</span>
    //                                             <button class="btn-shape" style="background-color: red;">Remove</button>
    //                                         </div>
    //                                     </div>
    //                                 </div>`  
    // }))

    // orderedProduct.innerHTML+=`<div class="d-flex">
// <img src="Images/Bracelet1.jpeg" alt="">
// <div>
//     <p>
//         <span>Product: </span>
//         <span>${choosenItem.name}</span>
//     </p>
//     <p>
//         <span>Category: </span>
//         <span>${choosenItem.category}t</span>
//     </p>
//     <p>
//         <span>Price: ${choosenItem.price}</span>
//     </p>
//     <div class="flex-between">
//         <span>1</span>
//         <button class="btn-shape" style="background-color: red;">Remove</button>
//     </div>
// </div>
// </div>`  
JSON