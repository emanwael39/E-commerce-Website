var favContent=document.getElementsByClassName("carousel")[0]
data=JSON.parse(window.localStorage.fav)
data.forEach((item)=>{
    favContent.innerHTML+=` <li class="card">
                        <div class="img"><img src="${item.img}" alt="" draggable="false"> </div>
                        <div class="fav-info">
                            <p>Product: ${item.name}</p>
                        <div class="flex-between ">
                            <p>Category: ${item.category}</p>
                            <i class="fa-solid fa-heart love" onclick="{change(this)}"
                                style="color: red; font-size: 18px;"></i>
                        </div>
                        </div>
                    </li>`
})