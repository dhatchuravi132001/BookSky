// selecting + button ,overlay,popupbox
var overlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popup-box") // dot(.) bcaz class 
var addpopupbtn=document.getElementById("add-popup-button")

addpopupbtn.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})

// select cancel button 
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault() // for auto cancel / prevent refresh (form TAG - submit function occur )
// when i click cancel button it close the overlay and popupbox
    overlay.style.display="none"
    popupbox.style.display="none"

})
// when i click + button then i click add button 

// selcting container,add-book,book-title-input,book-author-input,book-description-input,

    var container=document.querySelector(".container")
    var addbook=document.getElementById("add-book") // + symbol
    var booktitle=document.getElementById("book-title-input")
    var bookauthor=document.getElementById("book-author-input")
    var bookdescription=document.getElementById("book-description-input")

    addbook.addEventListener("click",function(event){
        event.preventDefault() // using form so this funnction used here
        var div=document.createElement("div")
        div.setAttribute("class","book-container")
        div.innerHTML=`<h2>${booktitle.value}</h2>
        <h5>${ bookauthor.value}</h5> 
         <p>${bookdescription.value}</p>  
         <button onclick="del(event)">Delete</button>`
        container.append(div)
        overlay.style.display="none"
          popupbox.style.display="none"
    })

    function del(event)
    {
        event.target.parentElement.remove()
    }