# Fiction Client

This SPA is designed to have users record thier stories and use the help of 2020 technology to assist them.
The current version works more as note taking software. In the future I will be integrating ai to help user complete their sentences.

## To view more information about the back end go here

https://benlirio.github.io/fiction-server

## Technologies Used:

- React
- Material UI
- Check the package json for a complete list of dependencies
- babel
- gh-pages

## To view both front and back end deployed go here:

Note, the back end is just a REST api with no index.html file.

https://fiction-api.herokuapp.com/

https://benlirio.github.io/fiction-client

## Unsolved problems

The code got a bit messy nearing the end of the project. Mainly I had difficulties with managing state and having one true state while not abusing the server with constant POST requests after every single letter is typed.

## Front end planning

Starting this project the scope was very large. I was planning on adding text analysis and much more.
I got caught on how to actually display the text. Decided to go with this software named slate. It helps with text editing in the browser. The only problem with this is that slate is a very base level interface. I had to do alot of writing my own code for it to work. I will say the documentation for slate is very easy to understand, but it wasn't just npm install and all set.
I ended up doing alot more styling than I had expected. My main issues of state come when the drawer is open or closed.

# Set up instruction

fork and clone the repo then use
`npm install`
to download dependencies.
After if you want to serve to local 7165 use `yarn start` in order to get hot reload.
If you would like to deploy use `yarn build` then `yarn deploy` this will create a new branch named gh pages and deploy to your own git hub account.

# Below is the pre planning for this project

# Project Name: Fiction Writer

Description: Assists writers of fiction by helping them overcome thier writers block while inspiring them with new creative ideas.

Target audience - fiction writer wanting a digital place to store writings.

Target Device - Laptop and up (over 900px) moderate internet connection is required.

## User Stories

- New User want to get started with Fiction Writer by seeing examples of others work.
- New writer wants to try the service out for themselves before signing up.
- User wants to sign up in order to save their new creative piece of art.
- Return user wants to view their previous works of art in order to continue writing them.

## Reach Goals

- Use dictionary api to help with word choice.
- Add tabs for characters and Locations of the story to quickly reference ideas.
- Use text analyzing to help writer know how they are coming across.
- Use text analysis to pull out characters and locations so the user doesn't need to manually put them in the tab.
- (Very reach) Use api with AI to help user over writers block by generating text text based on context for them.

## Wire frames

Adobe XD
https://xd.adobe.com/view/46710a0c-bc2b-4a53-7e0e-53ab4f84206d-3040/
