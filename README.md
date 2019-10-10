# WeCycleIt

## Table of Contents
1. [Overview](#Overview)
1. [Product Spec](#Product-Spec)
2. [Prototypes](#Prototypes)
2. [UI Screenshots](#UI-Screenshots)
4. [Data Visualization](#Data-Visualization)
5. [Visualization Explanation](#Visualization-Explanation)
6. [Demo Video](#Demo-Video)

## Overview
### Description
WeCycleIt is a web application that allows users to easily recycle specific items by helping
find recycling centers that accept said item near a given zip code.

This app also helps with identifying which items are actually recyclable.

This web app is targeted towards homeowners looking to get rid of their junk when moving in/out 
of their homes, but it can be used by anyone that's looking to recycle an item.

### Getting Started
* Run "npm install" to install all dependencies.
* Run "node create_database.js" to create local SQLite database.
* Run "node server.js" to initialize server.
* Open browser and go to "http://localhost:3000/"
* Search away!

### Team Members and Contributions

#### Angela Xu -- https://github.com/a1xu
* Contribution: 
    * Home Page Styling: Created skeleton for the home page along with brand name 
    * Schedule Pick Up: Created form to get user input and store it into a database using an ajax call
    * Confirmation Page: Created the html layout and used an ajax call to take the information from the schedule pick up page to get the stored user information and display it on the screen
    * General Styling: Formatted all pages and fixed outputs from the Earth911 API call 

#### Julius Guzman -- https://github.com/jgz24
* Contribution:
    * Search List View: Created a list of searches and populated it based off of Earth911 API function calls. Also made sure that the input boxes grabbed the previous form input from the home page for searching
    * Search Map View: Based off of the previous list, added markers to Google Maps by getting the entire list's location information in latitude and longitude.
    * Center Info Map: Added a marker to the map based on the latitude and longitude of the center that was clicked on
    * Filter Page: Used the existing slider and checkmarks for user specified ranges and desired search results 

#### Debbie Vo -- https://github.com/debbievo
* Contribution:
    * Filter Page Styling: Created the slider and used persistent checkmarks in order to be able to keep track of when each item has been checked.
    * Center Info Data: Used ajax calls to post and get data from a SQLite database and have it display based on the correct center that was clicked
    * Recycling Guide: Created a collapsible list of items that users may possibly need to know or can look at for guidance
    * Home Page/Search List: Added autocomplete when typing functionality to make it clear what could be searched based on the user's input


### App Evaluation
- **Category:** Local Search
- **Mobile:** This app would be primarily developed for viewing on a mobile device but is just as viable on a computer. Functionality wouldn't be limited to mobile devices, since it is a web application that could be viewed in either a mobile or desktop browser.
- **Story:** Users can input their zip code preferences and items they wish to recycle in order to see a list of possible recycling centers within that area. The user can then click on those centers in order to see more information about them. 
- **Market:** Any individual could choose to use this app, as it is open for any individual that is interested in finding recycling centers
- **Habit:** This app could be used as often or unoften as the user wanted depending on how often they need to recycle or search for recycling centers
- **Scope:** First we would start with locating the recycling centers based on the search queries of item type and zip code. Then this application could evolve into a way for recycling centers to schedule pick up times and locations for those who need it.

## Product Spec
### 1. User Stories (Required and Optional)

**Required Must-have Stories**

* User specifies the material they want to recycle by typing it in
* User designates a zip code where they want the recycling center
* Users are able to click on the recycling centers to see more information
* Users are able to schedule a pick up with the recycling center
* Users can filter the search results by distance from zip code

**Optional Nice-to-have Stories**

* Users can switch between a list view and a map view of the recycling centers that appear after the search
* Recycling guide based on what items can be recycled and which ones cannot
* Send a confirmation email once an appointment has been scheduled
* Users can select recyclable items from a dropdown menu rather than typing it in for search
* Designate an area on the map where the search should occur

### 2. Screen Archetypes

* Home Page - User inputs the desired recyclable and the zip code
   * Upon opening the application, the user is prompted to input their information in order to find recycling centers within that area. 
* Search Results: List View - Displays the recycling centers in a list view based on the search query
   * Upon entering their information, selecting search opens this screen as the default view of the recycling centers. 
* Search Results: Map View - Displays recycling centers in a map based on the search query 
   * Selecting the Map tab switches from the list view to the map view
   * Markers are placed on the map depending on the search results
* Filter Results - Users can change their search results based on their specifications
   * Allows user to be able to choose their desired distance from the specified zip code, number of results displayed, and whether or not pickup or drop off is offered. 
* Center Information
   * Displays extra information about the recycling center chosen such as other materials that may be recycled.
* Schedule Pickup 
    * Upon selecting schedule pickup from the Center Information screen, a form prompts users to input their information in order to make an appointment
    * Once submitted, users are directed to a confirmation screen with the information that was inputted.
* Recycling Guide
    * Displays information on items that are recyclable in collapsible form
    * Clicking on the uncollapsed items will display the answers to the FAQ. 

### 3. Navigation

**Tab Navigation** (Tab to Screen)

* Search List
* Filter Result
* Center Info
* Schedule Pickup

Optional:
* Search List Map View
* Recycling Guide

**Flow Navigation** (Screen to Screen)
* Forced Home Screen -> User has to make an input in order to get past this screen to the Search List
* Filter Result -> Toggle settings
* Center Info -> Jumps to Schedule Pickup if available 
* Schedule Pickup -> Text fields to be modified.

## Prototypes

### Prototype 1
![](https://i.imgur.com/V6aPaDM.jpg)


### Prototype 2
![](https://i.imgur.com/sIwfN7Z.jpg)


## UI Screenshots
### Homepage
<img src='https://i.imgur.com/BUTM9VM.png' title='Homescreen' width='252' alt='Homescreen 1' /> <img src='https://i.imgur.com/W5M9u9S.png' title='Homescreen' width='250' alt='Homescreen 2' />

### Search Results - List
<img src='https://i.imgur.com/shEtGxV.png' title='Search List' width='252' alt='Search Results - List 1' /> <img src='https://i.imgur.com/5jtG5bB.png' title='Search List' width='250' alt='Search Results - List 2' />

### Search Results - Map
<img src='https://i.imgur.com/rrCBtHV.png' title='Search Results - Map' width='250' alt='Search Results - Map' />

### Filter Results
<img src='https://i.imgur.com/uRs6fc4.png' title='Filter Results' width='250' alt='Filter Results' />

### Center Information 
<img src='https://i.imgur.com/0kZNbCJ.png' title='Filter Results' width='250' alt='Center Info' />

### Schedule Pickup
<img src='https://i.imgur.com/SlPweHy.png' title='Schedule Pickup' width='252' alt='Schedule Pickup 1' /> <img src='https://i.imgur.com/36kfhbi.png' title='Schedule Pickup' width='250' alt='Schedule Pickup 2' /> <img src='https://i.imgur.com/8csEGjU.png' title='Schedule Pickup' width='250' alt='Schedule Pickup 3' />

## Data Visualization

### Search Results - List
<img src='https://i.imgur.com/shEtGxV.png' title='Search List' width='252' alt='Search Results - List 1' /> <img src='https://i.imgur.com/5jtG5bB.png' title='Search List' width='250' alt='Search Results - List 2' />

### Center Information 
<img src='https://i.imgur.com/0kZNbCJ.png' title='Filter Results' width='250' alt='Center Info' />

### Schedule Pickup
<img src='https://i.imgur.com/8csEGjU.png' title='Schedule Pickup' width='250' alt='Schedule Pickup 3' /> <img src='https://i.imgur.com/vsrAKgB.png' width='295' title='Data Visualization - Schedule Pickup' alt='Data Visualization - Schedule Pickup'/>

## Visualization Explanation
In terms of searching and displaying content on the centers, we used the Earth911 API in order to pull from a database of recycling/donation centers in the US. To effectively use the API, we used Description, Address, City, State, Zip Code, Phone Number, Hours, Materials, URL, and Distance to display a list of recycling centers based on the search queries. 

For Schedule Pickup, we used SQLite to implement a database that would hold user information and confirm that they had scheduled a pick up with the center. 

## Demo Video
[Link to Demo Video](https://drive.google.com/file/d/1pp8y0NcJICtsaz15VgN8ykkWwCpWN2BA/view?usp=sharing "WeCycleIt Demo Video")
