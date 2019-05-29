Milestone 5
===
## Table of Contents
1. [Rubric #2: Setting, Sequence, Satisfaction](#Setting,-Sequence,-Satisfaction)
2. [Rubric #3: UI Screenshots](#UI-Screenshots)
3. [Rubric #4: UI Improvements](#UI-Improvements)
4. [Rubric #5: Data Visualization](#Data-Visualization)
5. [Rubric #6: Visualization Explanation](#Visualization-Explanation)
6. [Rubric #7: Future Ideas and Improvements](#Future-Ideas)

## Setting, Sequence, Satisfaction
Homeowners have a larger amount of income and are able to own more products; however, this also leads to the need of offloading their items once they have fallen out of use. For homeowners, it is pretty common to simply throw things in the trash or to leave things like cardboard, water bottles, or batteries piling up, but this app aims to make it easier on them by providing a one-stop resource for recycling.

Our target user population of environmentally conscious and/or charitable homeowners would use the app by searching for the nearest recycling or donation center. By inputting what they're interested in recycling into the app and their zip code, they will be able to see a list of relevant centers near them along with the materials that are accepted. To help lessen the effort needed in recycling and donating, the app provides a filtering option to locate centers that provide pick up options as well.

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


## UI Improvements
The current homepage has improved upon the versions shown in milestone4.md by changing from asking the user to select a recycling/donation center to instead asking the user for what they would like to donate. The inputs given here are then fed into the next page, the search result - list page.

The search result - list page improved from the milestone4 version by now prepopulating the text boxes with the previous page's inputs and by performing the search as soon as the user is on that page. It also utilizes a "More information" summary so that the user is not overwhelmed by the amount of materials that a location may accept. This page also has automatic filters to search for set distances and for drop off available locations, since the assumption is that the user would like to drop things off.

They can toggle these settings in the Filter Results page, which has been improved upon by removing the rest of the checkmark filters. Now it focuses on whether or not the user wants more results displayed, wants a closer or further center, or wants to have pickup as an option. Toggling any of these will change the search results on the list page.

Center info page has been improved upon in that now it is accessible by clicking on the center desired. Once clicked on, it prepopulates the page with information on the center rather than dummy data.

Schedule Info page has also been improved upon now that center info page is accessible. The user is able to input their data here and then see a confirmation page with their previously input data.

The search result map page is now able to switch back and forth between the list view and map view. It was previously removed in milestone4, but has been reincluded based on feedback.

## Data Visualization

### Search Results - List
<img src='https://i.imgur.com/shEtGxV.png' title='Search List' width='252' alt='Search Results - List 1' /> <img src='https://i.imgur.com/5jtG5bB.png' title='Search List' width='250' alt='Search Results - List 2' />

### Center Information
<img src='https://i.imgur.com/0kZNbCJ.png' title='Filter Results' width='250' alt='Center Info' />

### Schedule Pickup
<img src='https://i.imgur.com/8csEGjU.png' title='Schedule Pickup' width='250' alt='Schedule Pickup 3' /> <img src='https://i.imgur.com/vsrAKgB.png' width='295' title='Data Visualization - Schedule Pickup' alt='Data Visualization - Schedule Pickup'/>

## Visualization Explanation
In terms of searching and displaying content on the centers, we used the Earth911 API in order to pull from a database of recycling/donation centers in the US. To effectively use the API, we used Description, Address, City, State, Zip Code, Phone Number, Hours, Materials, URL, and Distance to display a list of recycling centers based on the search queries.

For Schedule Pickup, we used SQLite to implement a databse that would hold user information and confirm that they had scheduled a pick up with the center.


## Future Ideas
In the future, we would like to do a drop down list of recyclable items so that users can just choose from the list rather than needing to type it in everytime. This would resolve any issues with possible incorrect inputs and make it easier for users to figure out what they can and cannot recycle. Currently, we are matching for exact spelling, which does not account for the fact that "plastics" and "plastic" are essentially searching for the same thing. Additionally, we would like to have the users get an email confirmation when they schedule a pick up or be able to see the next availabilities for the center's pick up capabilities.
