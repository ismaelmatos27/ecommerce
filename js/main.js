// To select the div's from the html
var nav = document.getElementById("header")
var items= document.getElementById("items")
var contact=document.getElementById("contact")

// a new nav to create the navigation bar
var navbar=document.createElement("nav")
// Set the atrbutes from bootstrap
navbar.setAttribute("class", "navbar navbar-default navbar-fixed-top")
nav.appendChild(navbar)
var contFluid=document.createElement("div")
contFluid.setAttribute("class","container-fluid")
// This is to get grouped brand and toggle for better mobile display

navbar.appendChild(contFluid)

var navbarHeader=document.createElement("div")
navbarHeader.setAttribute("class","navbar-header")
contFluid.appendChild(navbarHeader)
var button1=document.createElement("button")
button1.setAttribute("type","button")
button1.setAttribute("class","navbar-toggle collapsed")
button1.setAttribute("data-toggle","collapse")
button1.setAttribute("data-target","#bs-example-navbar-collapse-1")
button1.setAttribute("aria-expanded","false")

var span1=document.createElement("span")
var span2=document.createElement("span")
var span3=document.createElement("span")
var span4=document.createElement("span")
span1.textContent="Toggle navigation"
span1.setAttribute("class","sr-only")
span2.setAttribute("class","icon-bar")
span3.setAttribute("class","icon-bar")
span4.setAttribute("class","icon-bar")
button1.appendChild(span1)
button1.appendChild(span2)
button1.appendChild(span3)
button1.appendChild(span4)
navbarHeader.appendChild(button1)
var brand=document.createElement("a")
var brandImg=document.createElement("img")
brandImg.setAttribute("id","headerLogo")
brand.setAttribute("class","navbar-brand")
brand.setAttribute("id","headerLink")
brand.setAttribute("href","www.loblan.com")
brandImg.setAttribute("src","../ecommerce/img/loblanlogo3.jpg")
brand.appendChild(brandImg)
navbarHeader.appendChild(brand)

  //Collect the nav links, forms, and other content for toggling
var collapse=document.createElement("div")
collapse.setAttribute("class","collapse navbar-collapse")
collapse.setAttribute("id","bs-example-navbar-collapse-1")
contFluid.appendChild(collapse)

var navbarRight=document.createElement("ul")
navbarRight.setAttribute("class","nav navbar-nav navbar-right")
collapse.appendChild(navbarRight)

var liMale=document.createElement("li")
var aMale=document.createElement("a")
aMale.textContent="Male"
liMale.appendChild(aMale)
navbarRight.appendChild(liMale)

var liFemale=document.createElement("li")
var aFemale=document.createElement("a")
aFemale.textContent="Female"
liFemale.appendChild(aFemale)
navbarRight.appendChild(liFemale)

var liAcc=document.createElement("li")
var aAcc=document.createElement("a")
aAcc.textContent="Accesories"
liAcc.appendChild(aAcc)
navbarRight.appendChild(liAcc)

var form=document.createElement("form")
form.setAttribute("class","navbar-form navbar-left")
navbarRight.appendChild(form)

var formGroup=document.createElement("div")
formGroup.setAttribute("class","form-group")
form.appendChild(formGroup)

var inputForm=document.createElement("input")
inputForm.setAttribute("type","text")
inputForm.setAttribute("class","form-control")
inputForm.setAttribute("placeholder","Loblan boots code")
formGroup.appendChild(inputForm)

var search=document.createElement("button")
search.setAttribute("type","submit")
search.setAttribute("class","btn btn-default")
search.textContent="Search"
formGroup.appendChild(search)

var about=document.createElement("li")
var aAbout=document.createElement("a")
aAbout.textContent="About Us"
about.appendChild(aAbout)
navbarRight.appendChild(about)

var shopping=document.createElement("li")
var aShopping=document.createElement("a")
var iShopping=document.createElement("i")
iShopping.setAttribute("class","fa fa-shopping-cart")
iShopping.setAttribute("aria-hidden","true")
aShopping.appendChild(iShopping)
shopping.appendChild(aShopping)
navbarRight.appendChild(shopping)

// to create the carousel
var carouselGeneric=document.createElement("div")
carouselGeneric.setAttribute("id","carousel-example-generic")
carouselGeneric.setAttribute("class","carousel slide")
carouselGeneric.setAttribute("data-ride","carousel")
nav.appendChild(carouselGeneric)

// To create indicators
var indicators=document.createElement("ol")
indicators.setAttribute("class","carousel-indicators")
carouselGeneric.appendChild(indicators)

var indicator1=document.createElement("li")
indicator1.setAttribute("data-target","#carousel-example-generic")
indicator1.setAttribute("data-slide-to","0")
indicator1.setAttribute("class","active")
indicators.appendChild(indicator1)

var indicator2=document.createElement("li")
indicator1.setAttribute("data-target","#carousel-example-generic")
indicator1.setAttribute("data-slide-to","1")
indicators.appendChild(indicator2)

var indicator3=document.createElement("li")
indicator1.setAttribute("data-target","#carousel-example-generic")
indicator1.setAttribute("data-slide-to","2")
indicators.appendChild(indicator3)

var indicator4=document.createElement("li")
indicator1.setAttribute("data-target","#carousel-example-generic")
indicator1.setAttribute("data-slide-to","3")
indicators.appendChild(indicator4)

// Wrapper for slides
var inner=document.createElement("div")
inner.setAttribute("class","carousel-inner")
inner.setAttribute("role","listbox")
carouselGeneric.appendChild(inner)

var active=document.createElement("div")
active.setAttribute("class","item active")
inner.appendChild(active)
var img1=document.createElement("img")
img1.setAttribute("src","../ecommerce/img/loblan4.jpg")
img1.setAttribute("class","carousel-image")
active.appendChild(img1)
// It will need caption and link the picture to some part of the page

var item1=document.createElement("div")
item1.setAttribute("class","item")
inner.appendChild(item1)
var img2=document.createElement("img")
img2.setAttribute("src","../ecommerce/img/loblan10.jpg")
img2.setAttribute("class","carousel-image")
item1.appendChild(img2)
// It will need caption and link the picture to some part of the page

var item2=document.createElement("div")
item2.setAttribute("class","item")
inner.appendChild(item2)
var img3=document.createElement("img")
img3.setAttribute("src","../ecommerce/img/loblangirls.jpg")
img3.setAttribute("class","carousel-image")
item2.appendChild(img3)
// It will need caption and link the picture to some part of the page

var item3=document.createElement("div")
item3.setAttribute("class","item")
inner.appendChild(item3)
var img4=document.createElement("img")
img4.setAttribute("src","../ecommerce/img/loblanstyle.jpg")
img4.setAttribute("class","carousel-image")
item3.appendChild(img4)
// It will need caption and link the picture to some part of the page



// Create the constructor to create the objects

function shoes(model,description,size,prize,img){
  this.model=model;
  this.description=description;
  this.size=size;
  this.prize=prize;
  this.img=img;

}

// this will the objects of my array
var loblan1= new shoes("4501","Traditional Cowboy Boot Black","8-12",60,"../ecommerce/img/loblan1.jpg");
var loblan2= new shoes("4503","Lady Cowboy Low-rise Boot ","8-12",55,"../ecommerce/img/loblan2.jpg");
var loblan3= new shoes("4602","Mountain Brown Boot ","8-12",65,"../ecommerce/img/loblan3.jpg");
var loblan5= new shoes("4604","Safety Black & Brown Boot ","8-12",65,"../ecommerce/img/loblan5.jpg");
var loblan6= new shoes("4504","Men's Cowboy L-rise Boot (Brown)","8-12",55,"../ecommerce/img/loblan6.jpg");
var loblan7= new shoes("4507","Men's Cowboy L-rise Boot (Black)","8-12",60,"../ecommerce/img/loblan7.jpg");
var loblan8= new shoes("4610","Mountain Blue Boot - two tones    ","8-12",70,"../ecommerce/img/loblan8.jpg");
var loblan9= new shoes("4501","Mountain Dark Brown Boot          ","8-12",75,"../ecommerce/img/loblan9.jpg");
var loblan11= new shoes("4502","Traditional Cowboy Boot Brown","8-12",60,"../ecommerce/img/loblan11.jpg");

// to create the array and push all the objects on to it
var shoeArray=[]
shoeArray.push(loblan1)
shoeArray.push(loblan2)
shoeArray.push(loblan3)
shoeArray.push(loblan5)
shoeArray.push(loblan6)
shoeArray.push(loblan7)
shoeArray.push(loblan8)
shoeArray.push(loblan9)
shoeArray.push(loblan11)

console.log(shoeArray);

var tittle=document.createElement("h1")
tittle.textContent="Choose yours!"
items.appendChild(tittle)
// to create the div with class row
var row1=document.createElement("div")
row1.setAttribute("class","row")
items.appendChild(row1)

// To create the content to display the array
for (var i = 0; i < shoeArray.length; i++) {
  var colsm6=document.createElement("div")
  colsm6.setAttribute("class","col-sm-6 col-md-4")
  row1.appendChild(colsm6)

  var thumbnail=document.createElement("div")
  thumbnail.setAttribute("class","thumbnail")
  colsm6.appendChild(thumbnail)

  var pic=shoeArray[i].img
  var picture=document.createElement("img")
  picture.setAttribute("class","pictures")
  picture.src=pic
  thumbnail.appendChild(picture)

  var caption=document.createElement("div")
  caption.setAttribute("class","caption")
  thumbnail.appendChild(caption)

  var label1=document.createElement("h3")
  label1.textContent=shoeArray[i].description
  caption.appendChild(label1)

  var label2=document.createElement("h4")
  label2.textContent="Loblan boot code:  "+shoeArray[i].model
  caption.appendChild(label2)

  var label3=document.createElement("h4")
  label3.textContent="Sizes available:  " +shoeArray[i].size
  caption.appendChild(label3)

  var label4=document.createElement("h3")
  label4.textContent="Price: "+shoeArray[i].prize+" $"
  caption.appendChild(label4)

  var buy=document.createElement("button")
  buy.textContent="BUY IT"
  buy.setAttribute("class","btn btn-primary")
  buy.setAttribute("role","button")
  caption.appendChild(buy)

}
