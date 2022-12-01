# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
The goal of this website is to educate a user on cities in Asia and compare and contrast
certain features of them (such as population, practiced religion, regions, etc.) with each
other.
The application is organized neatly with a "card" like structure describing each city,
and the ability to filter, making it valuable to a user who wants to experiment with
different demographics filters.

### Usability Principles Considered
In terms of usability principles, I used radio buttons for filters that were not stackable
so that only one can be pressed at a time (region). Filters that are stackable (religion)
due to the fact that there can be overlap between the categories were implemented with a
checkbox, as well as filters that could be on/off (display favorites).

In layout, I made the cards in columns and changed their background colors to clearly
delineate between them. I used different font sizes and weights to indicate headers of
different importances.

### Organization of Components
There are two components that make up this App - one is "City" and the other is "Filters".

Within City, the html for each City "card" is contained as well as the logic needed to
add/remove a city from Favorites and change the card button.

Within Filters, the html for the sorting/filtering section is contained and the logic needed to
update state variables that correspond to the religion and region filters, the population
sort, whether to display just favorites, and the population aggregator for favorites. 

Within App, the actual filtering and sorting is done on the dataset. It contains a City
for each list item in the json and one Filter component.

### How Data is Passed Down Through Components
All the states are contained within App. There is state corresponding to the population sorting,
a state for the region filter, a state for the religion filter, a state for the favorites, a
state describing whether or not favorites are being displayed.

The "favorites" state as well as its setter is passed into each City, as well as the city-item from
the json, so that they have the logic to add / remove themselves from the "favorites" state dict.

The "populationSort", "currRegion", "currReligions", "favorites", and "displayFavorites" (and setters) are
passed into Filters. According to the buttons that are selected by the user, Filters changes the
states of these, which are then used to filter in App. "favorites" is never changed in Filters but
is there to calculate total population in the aggregator.

### How the User Triggers State Changes
The user triggers state changes by clicking any button. This calls a function, and within that function
there is some logic done to find what the new state should be - then setter function for the state is called,
which triggers a state change and re-renders the page with the new states in place.



