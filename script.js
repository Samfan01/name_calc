var femaleNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua',' Ama']
var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku',' Yaw','Kofi','Kwame']

function some(){

var dd = parseInt(document.getElementById("date").value);
var mm=parseInt(document.getElementById("month").value);
var yy=parseInt(document.getElementById("year").value);
var cc=parseInt(document.getElementById("century").value);
var gender=document.getElementById('sel1').value;
var fan=document.getElementById('name').value;    
var day =parseInt( ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7)

if(yy<=0 || yy=="" || yy>99){
    alert('invalid year')
}
if(mm<=0 || mm=="" || mm>12){
    alert('invalid month')
}
if(dd<=0 || dd=="" || dd>31){
    alert('invalid day')
}
if(cc<=0 || cc=="" || cc>20){
    alert('invalid year')
}
if(gender==="Male"){
    document.getElementById('akan').innerHTML=fan+' Your Akan name is '+maleNames[day];
}
if(gender==="Female"){
    document.getElementById('akan').innerHTML=fan+' Your Akan name is '+femaleNames[day]
}
   
}
