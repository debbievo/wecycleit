/***********************************************
 Javascript code for scheduling confirmation
 page. Grabs latest record from scheduling
 database and displays the information on the
 page.

 https://github.com/debbievo/WeCycleIt
***********************************************/


// Grabs the latest database record and displays on page
$.ajax({
        url: 'schedules',
        type: 'GET',
        dataType : 'json',
        success: (data) => {
            console.log('You received some data!', data);

            // Format date and time into more user-friendly format
            var date = data[0].date + "T" + data[0].time + ":00";
            var dateFormatted = moment(date).format("dddd, MMMM D, h:mm A");

            // Insert data in respective divs
            $('#insertName').html(data[0].name);
            $('#insertDate').html(dateFormatted);
            $('#insertAddress1').html(data[0].address);
            $('#insertAddress2').html(data[0].other);
            $('#insertCity').html(data[0].city);
            $('#insertState').html(data[0].state);
            $('#insertZip').html(data[0].zip);
        },
});
