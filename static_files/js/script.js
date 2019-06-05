/**  Javascript code for the homepage and recycling page.
 *   It allows for the back button functionality and
 *   recycling guide functionality.
 * 
 *  https://github.com/debbievo/WeCycleIt
 * 
 */

$(document).ready(() => {
  initializePage();
});

//URL query variables
let parseURL = new URLSearchParams(document.location.search);

let user_material;
let user_zip;
let user_dist = 10;
let user_num_results = 10;
let user_dropoff = true;
let user_pickup = false;
//the following if statements check the url to see if it can get specified information
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
if(parseURL.has('material')) {
    user_material = parseURL.get('material');
}
if(parseURL.has('zip')) {
    user_zip = parseURL.get('zip');
}

function initializePage(){
    //this checks the tags from the availableTags.js and will display a list of possible choices based on input
  $( "#material_box" ).autocomplete({
    source: availableTags
  });

  //gets the value inside of the text boxes
  $('#material_box').val(user_material);
  $('#zipBox').val(user_zip);

  $('#material_box').keyup(function(event) {
      if (event.keyCode === 13 ) {
          $('#searchButton').click();
      }
  });

  $('#zipBox').keyup(function(event) {
      if(event.keyCode === 13) {
          $('#searchButton').click();
      }
  });

  //forces users to make an input and then proceeds to the next page based on their input
  $("#searchButton").click(function() {
      let user_material = $('#material_box').val();
      let zip_code = $('#zipBox').val();

      if(!user_material) {
          alert("Please type in what you want to recycle.")
      }
      else if(!zip_code){
          alert("Please type in a zip code.")
      }
      else {
          window.document.location = './searchResultsListView.html' + '?material=' + user_material
          + '&zip=' + zip_code + "&distance=" + user_dist + '&numresults=' + user_num_results
          + '&dropoff=' + user_dropoff + '&pickup=' + user_pickup;
      }
  });

  $("#backButton").click(function() {
        let user_material = $('#material_box').val();
        let zip_code = $('#zipBox').val();
        let prevWindow = document.referrer;

        let parseURL = new URLSearchParams(prevWindow);
        //statements that check what the previous window had for the url, depending on what it has, the link may change
        if(parseURL.has('index')){
                window.document.location = './index.html' + '?material=' + user_material
                        + '&zip=' + zip_code + "&distance=" + user_dist + '&numresults=' + user_num_results
                        + '&dropoff=' + user_dropoff + '&pickup=' + user_pickup;
        } else if (parseURL.has('searchResultsListView')) {
            window.document.location = './searchResultsListView.html' + '?material=' + user_material
                    + '&zip=' + zip_code + "&distance=" + user_dist + '&numresults=' + user_num_results
                    + '&dropoff=' + user_dropoff + '&pickup=' + user_pickup;
        } else if (parseURL.has('searchResultsMapView')) {
            window.document.location = './searchResultsMapView.html' + '?material=' + user_material
                    + '&zip=' + zip_code + "&distance=" + user_dist + '&numresults=' + user_num_results
                    + '&dropoff=' + user_dropoff + '&pickup=' + user_pickup;
        // } else if (parseURL.has('centerInfo')) {
        //     window.document.location = './centerInfo.html' + '?material=' + user_material
        //             + '&zip=' + zip_code + "&distance=" + user_dist + '&numresults=' + user_num_results
        //             + '&dropoff=' + user_dropoff + '&pickup=' + user_pickup + '&centerName=' + center_name
        //             + '&phone='+ center_phone + '&materials=' + center_materials + '&hours=' + center_hours + '&address=' + arr[0];

        }else {
            window.history.back();
        }
    });
}

// General function for a back button, this is on pages where the previous pages do not take info from the URL
function goBack() {
  window.history.back();
}
