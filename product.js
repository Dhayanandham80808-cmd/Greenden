var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")


menuicon.addEventListener("click", function () {
    sidenav.style.right = 0

})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})



var productcontainer = document.getElementById("productcontainer")

var Search = document.getElementById("Search")
var productlist = productcontainer.querySelectorAll("div")

console.log(productlist)

Search.addEventListener("keyup",function(){
    var eneterdvalue = event.target.value.toUpperCase()
    

    for(count=0;count<productlist.length;count=count+1)
    {
        
        if(productlist[count].textContent.toUpperCase().indexOf(eneterdvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})