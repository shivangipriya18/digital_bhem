const mask = document.getElementById('mask');
const modal = document.getElementById('modal');
document.getElementById("registration-form").addEventListener("submit", function(event) {
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var place=document.getElementById("place").value;
    var phonenumber=document.getElementById("phonenumber").value;
  
  

var arrivaltime=document.getElementById("arrivaltime").value;
var departuretime=document.getElementById("departuretime").value;
var totalnoDays = parseInt(document.getElementById("total-days").value);
var totalPersons=parseInt(document.getElementById("total-persons").value);
var roomType=document.getElementById("room-type").value;
var additionalservices=document.querySelectorAll('input[name="additio alservices"]:checked');
  var pickupservices=document.querySelectorAll('input[name="pickupservices"]:checked');
var advanceAmount = parseInt(document.getElementById("advance-amount").value);
var roomRate=0;
if(roomType === "acrooms"){
  roomRate=1500;
}
else if(roomType==="acroomd"){
  roomRate=2000;
}
else if(roomType==="nonacrooms"){
  roomRate=800;
}
else if(roomType==="acroomd"){
  roomRate=1000;
}
var totalCost=roomRate * totalDays;


    document.getElementById("total-cost").value = totalCost;
    

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Place: " + place);
    console.log("Phone Number: " + phonenumber);
    console.log("Arrival Time: " + arrivaltime);
    console.log("Departure Time: " + departuretime);
    console.log("Total No of Days: " + totalDays);
    console.log("Total No of Persons: " + totalPersons);
    console.log("Room Type: " + roomType);
    console.log("Additional Services: ");
    service.forEach(function(service) {
      console.log("- " + service.value);
    });
      console.log("PickUp Services: ");
    pickup.forEach(function(pickup) {
      console.log("- " + pickup.value);
    });
    console.log("Advance Amount: " + advanceAmount);
    console.log("Total Number of Room: " + totalRoom);
    console.log("Total Cost: " + totalCost);
  
   
  });
mask.addEventListener('click', () => {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
});