# SwipeClock preliminary assignment
(requirements below)
&nbsp;  
&nbsp;  

### Instructions:
* npm install;
* npm start;
&nbsp;  
&nbsp;

### Unfortunately, I did not get to
1) Testing
2) Type safety
&nbsp;  
&nbsp;  

### Notes:
Redux and React-Router are not compatible. Which library should manage routing state?  
[(here's a great read)](https://hackernoon.com/redux-and-react-router-v4-a-tale-of-two-datastores-8dd91f47d14e)  
&nbsp;  
&nbsp;  
More info included in the assignment app.  

&nbsp;  
&nbsp;  
---


# SwipeClock Example Project
Recreate something like the included sample image using React components. Give
it some style, it doesn&#39;t have to be good style, we have designers for that. The
words don&#39;t matter. The navigation items are for example. You can just call them
_Thing One_ and _Thing Two_.

---

## React
We&#39;re going to be using React, Redux, and React Router. Include as many of these
in your project as you can. Don&#39;t lose a lot of time trying to make a beautiful,
immutable state tree with redux, but if you can work it in, great!
### State
Even though colors and sizes don&#39;t matter, have some sort of state indication
when you click on a navigation item. Show content in the main section, show the
location in the top right. Show that the navigation item is current.
-- --
## CSS
Our design is heavily influenced by Google&#39;s [Material
Design](http://material.io). We&#39;re using SCSS and trying to adhere to the BEM
naming convention for our class names. Don&#39;t waste a lot of time setting
yourself up for SCSS if you&#39;re not familiar with it.
-- --
## git
All the cool kids are using git, and so can you! Commit your work along the way
and zip, or link us to, a git repository that we can look at.
-- --
## Super bonus points
* Create a responsive layout
* Large: the menu is always fully expanded.
* Medium: the menu collapses to a hamburger and expands over the content when
opened.
* Small: The menu collapses to a hamburger and expands as a fullscreen modal
when opened.
* State based routing with Redux
* Connect to some kinda API to get real content into the content section.