## Code test for Scandinaviaphoto

## Task

- Build in HTML/CSS/JS, any framework and library
- Create a list of all houses in Game of Thrones with the api [anapioficeandfire](https://www.anapioficeandfire.com/api/houses).
- Show and hide information that is avalible in the data
- Filter through search

## Setup

My first choice would have been ReactJS as I worked alot in that framework and MERN-stack overall.
To setup a ReactJS/Express/NodeJS whould have been prefered but I really wanna try NextJS from the start.
I have been working in NextJS but not from the start so this was my challange for myself in this project.

### Project-stack and npm packages
- NextJS
- Typescript
- Parse-link-header

## The basics

The basics in the project is:
- There is two api-routes in pages, one for all houses and one for search with an dynamic route.
- A context that handles all the basics for the page to work. I feel it is more simple in that way
- There are three main components in the layout, Search, List and Paginations

### Thoughts about the flow
I think that the api is old and not very flexible. It has a limit of fetches per day, how many items per page there is in one fetch and no joker search.
You have to search for the full house title or other data avalible to get any data from it and I choosed this basic way with a modification. I already filled in "house " in the url to fetch and that made it more simpler to a end-users view. Because this was a time limited project and I am still a junior developer. I haven't got the experience of other fetch methods that was avalible. But that said, I have learned alot and I really wanna add, try more stuff.

## Getting it running

- Clone the repo
- Install dependencies: 
```bash
npm install
```
```bash
yarn install
```
- Run developer server: 
```bash
npm run dev
```
```bash
yarn dev
```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
