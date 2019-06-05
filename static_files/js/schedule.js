$(document).ready(function(){
    initializePage();
})

function goBack() {
  window.history.back();
}
function initializePage(){
    $('#scheduleButton').click(() => {
        if(!$('#pickupName').val()) {
            alert("Please type in your name.")
        } else if(!$('#pickupEmail').val()){
            alert("Please type in an email.")
        } else if(!$('#pickupPhone').val()){
            alert("Please type in a phone number.")
        } else if(!$('#pickupDate').val()){
            alert("Please enter a date.")
        } else if(!$('#pickupTime').val()){
            alert("Please enter a time.")
        } else if(!$('#pickupAddress1').val()){
            alert("Please type in an address.")
        } else if(!$('#pickupCity').val()){
            alert("Please type in a city.")
        } else if(!$('#pickupState').val()){
            alert("Please type in a state.")
        } else if(!$('#pickupZip').val()){
            alert("Please type in a zip code.")
        }
        else {
            $.ajax({
                // all URLs are relative to http://localhost:3000/
                url: 'schedules',
                type: 'POST', // <-- this is POST, not GET
                data: {
                    name: $('#pickupName').val(),
                    email: $('#pickupEmail').val(),
                    phone: $('#pickupPhone').val(),
                    date: $('#pickupDate').val(),
                    time: $('#pickupTime').val(),
                    address: $('#pickupAddress1').val(),
                    other: $('#pickupAddress2').val(),
                    city: $('#pickupCity').val(),
                    state: $('#pickupState').val(),
                    zip: $('#pickupZip').val()
                },
                success: (data) => {
                    console.log('You posted some data!', data);
                    window.location.href="/pickupConfirmed.html"
                }
            });
        }
    });
}
