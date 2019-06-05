let base_url = "http://api.earth911.com/earth911";
const api_key = config.earth_api_key;
const proxyURL = "https://cors-anywhere.herokuapp.com/";

let parseURL = new URLSearchParams(document.location.search);

let loc_ids;

if(parseURL.has('ids')) {
    loc_ids = parseURL.get('ids');
}

let temp_location_info = [];

//Get the full location info using location id.
for(i=0; i<loc_ids.length; i++) {
    let locationDetailsURL = (base_url + ".getLocationDetails" + "?location_id=" + loc_ids + "&api_key=" + api_key);

    temp_location_info.push($.parseJSON(
    $.ajax({
        url: (proxyURL + locationDetailsURL),
        type: 'GET',
        dataType: 'json',
        crossDomain: true,
        async: false,
    }).responseText));
}

let full_location_info = []

for (i=0; i<temp_location_info.length;i++) {
    let location_id = Object.keys(temp_location_info[i]['result']);
    let tempPath = temp_location_info[i]['result'][location_id];
    let info = {
        description : tempPath['description'],
        address : tempPath['address'],
        geocode: {lat: Number(tempPath['latitude']), lng: Number(tempPath['longitude'])},
        city : tempPath['city'],
        state : tempPath['province'],
        zip_code : tempPath['postal_code'],
        phone_number : tempPath['phone'],
        hours : tempPath['hours'],
        materials : tempPath['materials'],
        url : tempPath['url'],
    }
    full_location_info.push(info);
}

let marker;
let infowindow;
let labelIndex = 0;

function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: full_location_info[0]['geocode'],
        zoom: 12,
    });

    setMarkers(map);
}

function setMarkers(map) {
    for (i=0; i<full_location_info.length; i++) {
        let temp_content = `
            <div class="container">
            <span class="searchClick">
                <h5>
                  <span class="centerName">${full_location_info[i]['description']}</span>
                </h5>
                  <b>Address:</b><br>
                  <span class="centerAddress">
                  ${full_location_info[i]['address']}
                    <br>
                    ${full_location_info[i]['city'] + ", " + full_location_info[i]['state'] + " " + full_location_info[i]['zip_code']}</li>
                  </span>
                <br>
                <b>Phone Number: </b>
                <span class="centerPhone">
                  ${full_location_info[i]['phone_number']}
                </span>
                <br>
                <b>Hours of Operation:</b><br>
                <span class="centerHours">
                  ${full_location_info[i]['hours']}
                </span>
                <br>
                <br>
            </span>
                <details>
                    <b>Website:</b> <a href=${full_location_info[i]['url']}>${full_location_info[i]['url']}</a>
                    <br>
                    <b>Other Materials Accepted: </b>
                    <span class="centerMaterials">
                      ${full_location_info[i]['materials'].map(material => `${material.description}`)}
                    </span>
                    <br>
                    <b>Dropoff Available? </b>
                    ${full_location_info[i]['materials'][0]['dropoff']}
                    <br>
                    <b>Pickup Available? </b>
                    ${full_location_info[i]['materials'][0]['pickup']}
                    <summary>
                        More information
                    </summary>
                </details>
            </div>
            `;
        infowindow = new google.maps.InfoWindow();
        marker = new google.maps.Marker({
            position: full_location_info[i]['geocode'],
            map: map,
            animation: google.maps.Animation.DROP,
            title: full_location_info[i]['description'],
            content: temp_content
        });
        google.maps.event.addListener(marker,'click', function() {
            infowindow.setContent(this.content);
            infowindow.open(this.getMap(),this);
        });
    }
}

$(document).ready(() => {
    let paramsString = document.location.search;
    let parseURL = new URLSearchParams(paramsString);
    let user_material;
    let user_zip;
    let user_dist = 10;
    let user_num_results = 10;
    let user_dropoff = true;
    let user_pickup = false;
    //checks url for specified inputs
    if(parseURL.has('material')) {
        user_material = parseURL.get('material');
        console.log(user_material);
    }
    if(parseURL.has('zip')) {
        user_zip = parseURL.get('zip');
        console.log(user_zip);
    }
    if(parseURL.has('distance')) {
        user_dist = parseURL.get('distance');
        console.log(user_dist);
    }
    if(parseURL.has('numresults')) {
        user_num_results = parseURL.get('numresults');
        console.log(user_num_results);
    }
    if(parseURL.has('dropoff')) {
        user_dropoff = parseURL.get('dropoff');
        console.log(user_dropoff);
    }
    if(parseURL.has('pickup')) {
        user_pickup = parseURL.get('pickup');
        console.log(user_pickup);
    }


    $("#backButton").click(function() {
        let material_box = $('#material_box').val();
        let zip_code = $('#zipBox').val();
        //goes to previous page but appends the correct inputs to ensure user does not have to redo search
        window.document.location = './searchResultsListView.html' + '?material=' + user_material
                + '&zip=' + user_zip + "&distance=" + user_dist + '&numresults=' + user_num_results
                + '&dropoff=' + user_dropoff + '&pickup=' + user_pickup;
    })
});

// Grabs the latest database record and displays on page
$.ajax({
        url: 'moreInfo',
        type: 'GET',
        dataType : 'json',
        success: (data) => {
            console.log('You received some data!', data);
            console.log(data[0].name);
            // Insert data in respective divs
            $('#centerName').html("<b>Name: </b>" + data[0].name);
            $('#centerAddress').html("<b>Address:</b><br>" + data[0].address);
            $('#centerPhone').html("<b>Phone Number: </b>" + data[0].phone);
            $('#centerHours').html("<b>Hours of Operation:</b><br>" + data[0].hours);
            $('#centerMaterials').html("<b>Materials Accepted:</b><br>" + data[0].materials);
        },
});
