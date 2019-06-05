/* Javascript file for the map functionality of the app.
 *
 * Queries the URL to get information needed.
 * 
 * Calls the google maps api to display markers for 
 * each of the search results along with their corresponding
 * information.
 * 
 */

//Variables required for API calls
let base_url = "http://api.earth911.com/earth911";
const api_key = config.earth_api_key;
const proxyURL = "https://cors-anywhere.herokuapp.com/";

//URL query variables
let parseURL = new URLSearchParams(document.location.search);
let user_material;
let user_zip;
let user_dist = 10;
let user_num_results = 10;
let user_dropoff = true;
let user_pickup = false;
let loc_ids;

//checks the URL for specified information
if(parseURL.has('material')) {
    user_material = parseURL.get('material');
}
if(parseURL.has('zip')) {
    user_zip = parseURL.get('zip');
}
if(parseURL.has('distance')) {
    user_dist = parseURL.get('distance');
}
if(parseURL.has('numresults')) {
    user_num_results = parseURL.get('numresults');
}
if(parseURL.has('dropoff')) {
    user_dropoff = parseURL.get('dropoff');
}
if(parseURL.has('pickup')) {
    user_pickup = parseURL.get('pickup');
}
if(parseURL.has('ids')) {
    loc_ids = parseURL.get('ids');
    loc_ids = loc_ids.split(',');
}

//Calls the earth911 api to get recycling center info using location id that was passed in.
let temp_location_info = [];

//Get the full location info using location id.
for(i=0; i<loc_ids.length; i++) {
    let locationDetailsURL = (base_url + ".getLocationDetails" + "?location_id=" + loc_ids[i] + "&api_key=" + api_key);

    temp_location_info.push($.parseJSON(
        $.ajax({
            url: (proxyURL + locationDetailsURL),
            type: 'GET',
            dataType: 'json',
            crossDomain: true,
            async: false,
        }).responseText));
}

//Take only the info we needed from temp_location_info and store into full_location_info.
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

$(document).ready(() => {
    //Populate the boxes.
    $('#material_box').val(user_material);
    $('#zipBox').val(user_zip);
    document.getElementById("material_box").disabled = true;
    document.getElementById("zipBox").disabled = true;

    //Sends info back to list view when user clicks back button.
    $("#backButton").click(function() {
        let user_material = $('#material_box').val();
        let zip_code = $('#zipBox').val();

        window.document.location = './searchResultsListView.html' + '?material=' + user_material
            + '&zip=' + zip_code + "&distance=" + user_dist + '&numresults=' + user_num_results
            + '&dropoff=' + user_dropoff + '&pickup=' + user_pickup;
    });

});

/** Calls the google maps API to create a map.
 * 
 *  It creates and displays markers that has each 
 *  recycling center along with the information assigned to it.
 */

let marker;
let infowindow;
let labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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
                  <span class="centerAddress">${"<b>" + "Address: " + "</b>" + full_location_info[i]['address']}
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    ${full_location_info[i]['city'] + ", " + full_location_info[i]['state'] + " " + full_location_info[i]['zip_code']}</li>
                  </span>
                <br>
                <span class="centerPhone">
                  ${"Phone Number: " +full_location_info[i]['phone_number']}
                </span>
                <br>
                <span class="centerHours">
                  ${"Hours of Operation: " +full_location_info[i]['hours']}
                </span>
                <br>
                <br>
            </span>
                <details>
                    ${"Website: " } <a href=${full_location_info[i]['url']}>${full_location_info[i]['url']}</a>
                    <br>
                    <span class="centerMaterials">
                      ${"Other Materials Accepted: "+ full_location_info[i]['materials'].map(material => `${material.description}`)}
                    </span>
                    <br>
                    ${"Dropoff Available? " + full_location_info[i]['materials'][0]['dropoff']}
                    <br>
                    ${"Pickup Available? " + full_location_info[i]['materials'][0]['pickup']}
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
            label: labels[labelIndex++ % labels.length],
            title: full_location_info[i]['description'],
            content: temp_content
        });
        google.maps.event.addListener(marker,'click', function() {
            infowindow.setContent(this.content);
            infowindow.open(this.getMap(),this);
        });
    }
}
