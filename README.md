# Portfolio page

[http://enz-web.epizy.com/](http://enz-web.epizy.com/) is my personal porfolio page. This is hosted by [https://infinityfree.net/](https://infinityfree.net/)

## Description
<br>

#### Home page 

Loads data from data.js file by importing exported constant "info" which contains basic information about the author. Work information 
contained in exported constant "works" are iterated using Array.map() function. Programming languages are fetched from exported constant "percentage" and iterated using Array.map(). Iterated values will be assigned to "Language" component then displays a percentage bar depending on the percentage of the iterated object element.

<br>

#### Skills page
Loads the exported constant "skills" from data.js, iterates them using Array.map() and rendering on ./src/components/partials/Skill, which will render as a link redirecting to a website of choice.
<br>

#### Links page

Loads the exported constant "links" from data.js, iterates them using Array.map() and rendering on ./src/components/partials/Link, which will render as a link redirecting to any social media profile of the author specified.
<br>

#### To Do page
Uses the [HTML Local Storage](https://www.w3schools.com/html/html5_webstorage.asp) for a simple [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) To Do App.
