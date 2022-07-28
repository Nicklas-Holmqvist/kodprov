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

- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/) 
- [Parse-link-header](https://www.npmjs.com/package/parse-link-header) 
- [Eslint](https://eslint.org/)  

## The basics

- There is two api-routes in pages, one for all houses and one for search with an dynamic route.
- There are three main components, Search, List and Paginations
- The heart of the webapplication lays in Layout where I fetch both api and handle my states. Everything then is going down by props.

### Thoughts about the flow

I think that this api is kinda square in it's performance. It has a limit of fetches per day, how many items per page there is in one fetch and no joker search.
You have to search for the full house title or other data avalible to get any data from it. I choosed a basic fetch with a modification. The user can write either "House wells" or just "wells", it is formated to lower case and "house " is hardcoded in the api url. If I was going for another approach like try other titles like region, words or house of arms. I would have done the fetch a little bit different. Of course you could have fetched all pages and stored it local but then the use of the api goes away and you risk to hit the fetch-limit if the page should go "live".

I started with everything in Layout but I thought it looked to much so added a Context to handle everything. But after a discussen with a friend I learned it was bad practice because everything would update in the Context even if just a small variable was changed. So I turned it back and made it better.

I'm still learning alot and I can see more things to add in this project but that's not the point for this task. A fun little project.

### Styling approach

Because this task was to make a list of houses my approach was to make it like a webapplication that fits well on a tablet or phone.
Made a design in Figma that I had as a baseguide. Didn't create any colorpalette as I use to because I didn't find any good pages for GOT to use.
The fonts I used is Cizel and Noto san.

[Figma-link](https://www.figma.com/file/XMtIIiXkwNF217cPtdVgyX/GOT-Houses?node-id=0%3A1)

## Getting it running

- Clone the repo
- Install dependencies: 
```bash
npm install
```
or
```bash
yarn install
```
- Run developer server: 
```bash
npm run dev
```
or
```bash
yarn dev
```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Enjoy
