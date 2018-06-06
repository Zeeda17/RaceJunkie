![Build Status](https://codeship.com/projects/3ec4b280-2bd2-0136-29b8-0a7f7ac78d5b/status?branch=master)
[![Code Climate](https://codeclimate.com/github/Zeeda17/currerace/badges/gpa.svg)](https://codeclimate.com/github/Zeeda17/currerace)

RaceJunkie is a platform for race enthusiasts to find races to run ether alone or with a team.

* Homepage:

User can search or browse upcoming races. A randomly selected race is featured on top. In the nav bar there is an option to make a new race if they are signed in.

* Race Show Page:

Displays name of race with price and description. Toggle to show or hide teams running this race and link to their team show page. If signed in the user can register as solo, join existing team, or creating new team. Google maps API used to display location and you can click map to get directions. Search teams for this race. If user is signed in and running current race there will be an indicator on top and what team they are in (if any.)

* Team Show Page:

Displays name of race the team is running as well as team name and optional team motto. Shows list of team members and if the user is in the team the page will display an additional welcome message.

* Under the Hood:

  - Ruby on Rails 5.2.0

  - PostgreSQL as the database for Active Record

  - RSPEC and Capybara for testing

  - Foundation for HTML Layout

  - Google's Map APIs
