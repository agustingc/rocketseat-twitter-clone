INTRO
-----
This is a Walkthrough of Rocketseat's Twitter Clone Tutorial
Website: https://rocketseat.com.br/
Tutorial: https://youtu.be/K-8z_4xvT3o

Set up
------

Disable isolated-modules at tsconfig.json

npm install styled-components styled-icons react-sticky-box
npm install -D @types/styled-components

styled-components utilises tagged template literals to style your components.
It removes the mapping between components and styles. This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.

