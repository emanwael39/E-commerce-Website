var wrapper=document.getElementsByClassName("wrap")[0]
var select=document.getElementsByTagName("select")[0]
var searchModeVar="name";

var data=[
    {
        id:1,
        img:"Images/SRing1.jpg",
        name:"Silver Ring",
        price: "200",
        category:"Ring"
    },
    { id:2,
        img:"Images/Bracelet1.jpeg",
        name:"Silver Bracelet",
        price: "1000",
        category:"Bracelet"
    },
    { id:3,
        img:"Images/Earrings1.jpeg",
        name:"Silver Earrings",
        price: "300",
        category:"Earrings"
    },
    { id:4,
        img:"Images/necklace1.jpg",
        name:"Gold Necklace",
        price: "2500",
        category:"Necklace"
    },
    { id:5,
        img:"Images/SRing2.jpg",
        name:"Silver Ring",
        price: "200",
        category:"Ring"
    },
    { id:6,
        img:"Images/Bracelet2.jpeg",
        name:"Almaz Bracelet",
        price: "1200",
        category:"Bracelet"
    },
    { id:7,
        img:"Images/Earrings2.jpeg",
        name:"Almaz Earrings",
        price: "500",
        category:"Earrings"
    },
    { id:8,
        img:"Images/necklace2.jpeg",
        name:"Almaz Necklace",
        price: "3100",
        category:"Necklace"
    },
    { id:9,
        img:"Images/SRing3.jpg",
        name:"Silver Ring",
        price: "250",
        category:"Ring"
    },
    { id:10,
        img:"Images/Bracelet3.jpeg",
        name:"Silver Bracelet",
        price: "500",
        category:"Bracelet"
    },
    { id:11,
        img:"Images/Earrings3.jpeg",
        name:"Almaz Earrings",
        price: "1500",
        category:"Earrings"
    },
    { id:12,
        img:"Images/necklace3.jpeg",
        name:"Silver Necklace",
        price: "780",
        category:"Necklace"
    },
    { id:13,
        img:"Images/SRing4.jpg",
        name:"Almaz Ring",
        price: "2500",
        category:"Ring"
    },
    { id
        :14,
        img:"Images/Bracelet4.jpeg",
        name:"Almaz Bracelet",
        price: "2500",
        category:"Bracelet"
    },
    { 
        id:15,
        img:"Images/necklace4.jpeg",
        name:"Silver Necklace",
        price: "800",
        category:"Necklace"
    },
    { 
        id:16,
        img:"Images/SRing5.jpg",
        name:"Silver Ring",
        price: "450",
        category:"Ring"
    },
    { 
        id:17,
        img:"Images/Bracelet5.jpeg",
        name:"Silver Bracelet",
        price: "970",
        category:"Bracelet"
    },
    { 
        id:18,
        img:"Images/necklace5.jpeg",
        name:"Gold Necklace",
        price: "2500",
        category:"Necklace"
    },
    { 
        id:19,
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
                        <button class="add-to-cart btn-shape" id="${item.id}" onclick="{addTO(this.id,this)}" >Add to cart</button>
                        <i class="fa-solid fa-heart love" id="${item.id}" onclick="{change(this.id,this)}"></i>
                    </div>
                </div>`
                
})
}
draw(data);

///////////////////////////////////////////////
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
//////////////////////////////////////////////////

