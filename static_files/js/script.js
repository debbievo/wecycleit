$(document).ready(() => {
    let parseURL = new URLSearchParams(document.location.search);

    let user_material;
    let user_zip;
    let user_dist = 10;
    let user_num_results = 10;
    let user_dropoff = true;
    let user_pickup = false;

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

});

function goBack() {
  window.history.back();
}
