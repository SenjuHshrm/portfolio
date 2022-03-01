# Portfolio page

[http://enz-web.epizy.com/](http://enz-web.epizy.com/) is my personal porfolio page. This is hosted by [https://infinityfree.net/](https://infinityfree.net/)

## Description

#### Home page 

Loads data from data.js file by importing exported constant "info" which contains basic information about the author. Work information contained in exported constant "works" are iterated using Array.map() function.


#### Skills page

Loads the exported constant "skills" from data.js, iterates them using Array.map() and rendering on ./src/components/partials/Skill, which will render as a link redirecting to a website of choice.


#### Links page

Loads the exported constant "links" from data.js, iterates them using Array.map and rendering on ./src/components/partials/Link, which will render as a link redirecting to any social media profile of the author specified.


