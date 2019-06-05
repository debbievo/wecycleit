$.ajax({
        url: 'schedules',
        type: 'GET',
        dataType : 'json',
        success: (data) => {
            console.log('You received some data!', data);
            // console.log(data[0].name);
            var date = data[0].date + "T" + data[0].time + ":00";
            var dateFormatted = moment(date).format("dddd, MMMM D, h:mm A");

            // console.log(date);
            // console.log(dateFormatted);

            $('#insertName').html(data[0].name);
            $('#insertDate').html(dateFormatted);
            $('#insertAddress1').html(data[0].address);
            $('#insertAddress2').html(data[0].other);
            $('#insertCity').html(data[0].city);
            $('#insertState').html(data[0].state);
            $('#insertZip').html(data[0].zip);
        },
});
