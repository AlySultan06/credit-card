let inputs = document.getElementsByTagName("input");
let name = document.getElementsByTagName("input")[0];
let nameRegex =
  /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
let cardNum = document.getElementsByTagName("input")[1];
let cardRegex =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
let text1 = document.getElementsByTagName("p")[0];
let text2 = document.getElementsByTagName("p")[1];
let text3 = document.getElementsByTagName("p")[2];
let text4 = document.getElementsByTagName("p")[3];
let cardName = document.getElementsByClassName("name")[0];
let month = document.getElementsByTagName("input")[2];
let monthRegex = /^(0[1-9]|1[0-2])/;
let cardMonth = document.getElementsByClassName("month")[0];
let year = document.getElementsByTagName("input")[3];
let cardYear = document.getElementsByClassName("year")[0];
let yearRegex = /([0-9]{2})/;
let cvc = document.getElementsByTagName("input")[4];
let cardCvc = document.querySelector(".sec p");
let cvcRegex = /\d{3}/;
let form = document.getElementsByTagName("form")[0];

cardNum.onchange = () => {
  if (cardRegex.test(cardNum.value)) {
    cardNum.style.border = "1px solid hsl(249, 99%, 64%)";
  } else {
    cardNum.style.border = "1px solid red";
  }

  if (cardNum.value.length <= 16) {
    text1.textContent = "";
    text2.textContent = "";
    text3.textContent = "";
    text4.textContent = "";
    for (let i = cardNum.value.length; i < 16; i++) {
      cardNum.value += "0";
    }
    text1.textContent = cardNum.value.slice(0, 4);
    text2.textContent = cardNum.value.slice(4, 8);
    text3.textContent = cardNum.value.slice(8, 12);
    text4.textContent = cardNum.value.slice(12, 16);
  }
};

name.onchange = () => {
  if (nameRegex.test(name.value)) {
    name.style.border = "1px solid hsl(249, 99%, 64%)";
  } else {
    name.style.border = "1px solid red";
  }
  cardName.textContent = name.value;
};

month.onchange = () => {
  cardMonth.textContent = month.value;
  if (monthRegex.test(month.value)) {
    month.style.border = "1px solid hsl(249, 99%, 64%)";
  } else {
    month.style.border = "1px solid red";
  }
};

year.onchange = () => {
  cardYear.textContent = year.value;
  if (yearRegex.test(year.value)) {
    year.style.border = "1px solid hsl(249, 99%, 64%)";
  } else {
    year.style.border = "1px solid red";
  }
};

cvc.onchange = () => {
  cardCvc.textContent = cvc.value;
  if (cvcRegex.test(cvc.value)) {
    cvc.style.border = "1px solid hsl(249, 99%, 64%)";
  } else {
    cvc.style.border = "1px solid red";
  }
};






form.onsubmit = (e) => {
 e.preventDefault()
  if (
    cardRegex.test(cardNum.value) == true &&
    nameRegex.test(name.value) == true &&
    monthRegex.test(month.value) == true &&
    yearRegex.test(year.value) == true &&
    cvcRegex.test(cvc.value) == true
  ){
   
   form.style.display = "none"
let msg = document.createElement("div")
let img = document.createElement("img")
let h1 = document.createElement("h1")
let p = document.createElement("p")
let btn = document.createElement("button")
document.body.style.padding ="50px 0"
msg.style.cssText = "display:flex; flex-direction:column; align-items:center; width: 310px;"
img.src = "images/icon-complete.svg"
img.style.cssText =  "margin-bottom:25px; width:100px;"
h1.textContent = "THANK YOU!"
h1.style.cssText = "color:hsl(278, 68%, 11%); letter-spacing:2px; margin-bottom:15px;"
p.textContent = "we have added your credit card details"
p.style.cssText = "color:hsl(279, 6%, 55%); margin-bottom:30px; text-transform:capitalize;"
btn.textContent = "Continue"
btn.style.cssText = " background-color: hsl(278, 68%, 11%); width:100%; border:none;\
text-transform: capitalize;\
border-radius: 10px;\
color: white;\
padding: 15px;\
font-size: 16px;\
cursor: pointer;"

msg.append(img)
msg.append(h1)
msg.append(p)
msg.append(btn)
document.body.append(msg)

  }else{e.preventDefault()}
   
};
