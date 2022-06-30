# Favogit - Angular

The idea is to program a search engine, that when entering text returns as a result the list of github users that contain the text entered in their username. This should return a list, which you can change the alphabetical order ASC or DESC.
We will see some interesting information about their profile, and a link to view the user's profile. This last link, should open the profile in the system with some more data brought in from github.
We will also have a 'favorites' button where we can add the users we are browsing. we browse.

The system should use calls to the github api.

## Home screen
The home screen should be an empty screen, with no results, with a large search bar. The search bar should be present on every screen of the application. When typing in this bar and pressing 'enter', it should bring up a list of all users that contain the text entered in their first name, last name or username. This list should be sortable alphabetically in ascending or descending order. It must be possible to change the order in some way. Each item in the list will have user data such as: avatar, name, surname, username, subscription date, number of followers and any other data you consider important. You will also be able to add/remove users as favorites. The application should also report how many users it has found. The item should have a link to the profile.

Note: If there are more than 20 users show only the first 20.

## Profile

The profile appears when a user is clicked from the list. The profile must contain data such as: avatar, names, username, email, link to the profile in github, repos that the user has, followers, location and other data that you consider relevant. The profile must have a button to add/remove to my favorites in the system.

## Favorites
This will be an icon always visible throughout the system (like the search), which will list all the users we have added to favorites. Here we will have the option to delete users from favorites. It should be noted that the favorites function is not related to github at all, meaning that when you reload the screen or the system, the chosen favorites will disappear at some point.

![](https://github.com/Fernack/favogit/blob/master/demo.gif)
