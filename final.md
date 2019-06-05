Final Project Deliverables
===

## Table of Contents
1. [Team Members and Contributions](#Team-Members-and-Contributions)
2. [Source Code and Functionality](#Source-Code-and-Functionality)
3. [Google Slide Presentation](#Google-Slide-Presentation)
4. [Demo Video](#Demo-Video)

## Team Members and Contributions

### Angela Xu
* Contribution:
    * Home Page Styling: Created skeleton for the home page along with brand name
    * Schedule Pick Up: Created form to get user input and store it into a database using an ajax call
    * Confirmation Page: Created the html layout and used an ajax call to take the information from the schedule pick up page to get the stored user information and display it on the screen
    * General Styling: Formatted all pages and fixed outputs from the Earth911 API call

### Julius Guzman
* Contribution:
    * Search List View: Created a list of searches and populated it based off of Earth911 API function calls. Also made sure that the input boxes grabbed the previous form input from the home page for searching
    * Search Map View: Based off of the previous list, added markers to Google Maps by getting the entire list's location information in latitude and longitude.
    * Center Info Map: Added a marker to the map based on the latitude and longitude of the center that was clicked on
    * Filter Page: Used the existing slider and checkmarks for user specified ranges and desired search results

### Debbie Vo
* Contribution:
    * Filter Page Styling: Created the slider and used persistent checkmarks in order to be able to keep track of when each item has been checked.
    * Center Info Data: Used ajax calls to post and get data from a SQLite database and have it display based on the correct center that was clicked
    * Recycling Guide: Created a collapsible list of items that users may possibly need to know or can look at for guidance
    * Home Page/Search List: Added autocomplete when typing functionality to make it clear what could be searched based on the user's input


## Source Code and Functionality

### index.html
* Functionality: App homepage, has search fields for material and location, has link to recycling guide

### searchResultsListView.html
* Functionality: Shows results for recycling centers matching search query in list form

### searchResultsMapView.html
* Functionality: Shows results for recycling centers matching search query in map form

### filterResults.html
* Functionality: Has options to filter search results by distance and dropoff/pickup availability

### centerInfo.html
* Functionality: Displays more information about a recycling center, shows location of center on a map, has link to schedule curbside pickup

### schedulePickup.html
* Functionality: A form for users to schedule curbside pickup

### pickupConfirmed.html
* Functionality: Confirmation page for pickup scheduling

### recyclingGuide.html
* Functionality: Page containing FAQ about recycling

### create_database.js
* Functionality: Creates databases for storing scheduling form information and center information

### server.js
* Functionality: Contains app backend and sqlite code for posting and getting information from the databases

### listView.js
* Functionality: Creates a list of centers based on user search query and filters, also posts text inputs and stores info into center info database.

### mapView.js
* Functionality: Contains functions that place markers on the map based on the latitude and longitude of the listView search results

### filter.js
* Functionality: Updates the slider based on user defined range and keeps tracks of which boxes are checked for user preferred filtering

### script.js
* Functionality: Validates text input and enables searching based on those inputs by using the Earth911 API.

### availableTags.js
* Functionality: Contains a list of available materials for autocomplete

### centerInfo.js
* Functionality: Uses an ajax call to get the center info data from the database depending on the center that was clicked on and display it for the user to see. A marker is also placed on a map to show its location

### schedule.js
* Functionality: Validates scheduling form input, posts form inputs and stores info into scheduling info database.

### confirmation.js
* Functionality: Contains ajax call to grab latest record from scheduling info database and display information on page

### index.css
* Functionality: General page styling, contains styling for buttons, slider, text, and more.

### map.css
* Functionality: Extra styling for map pages, separated from index.css because of possible conflicting styles for body and head.


## Google Slide Presentation

[Link to Google Slide Presentation](https://docs.google.com/presentation/d/13uqpLaSeaBkvFlO52zyCrAF0Yfut0-E3r1uDlWydql4/edit?usp=sharing "WeCycleIt Presentation")

## Demo Video
[Link to Demo Video](https://drive.google.com/file/d/1pp8y0NcJICtsaz15VgN8ykkWwCpWN2BA/view?usp=sharing "WeCycleIt Demo Video")
