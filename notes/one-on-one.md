# Project Name: Fiction Writer
Description: Assists writers of fiction by helping them overcome thier writers block while inspiring them with new creative ideas.

Target audience - fiction writer wanting a digital place to store writings.

Target Device - Laptop and up (over 900px) moderate internet connection is required.

## User Stories
* New User want to get started with Fiction Writer by seeing examples of others work.
* New writer wants to try the service out for themselves before signing up.
* User wants to sign up in order to save their new creative piece of art.
* Return user wants to view their previous works of art in order to continue writing them.

## Reach Goals
* Use dictionary api to help with word choice.
* Add tabs for characters and Locations of the story to quickly reference ideas.
* Use text analyzing to help writer know how they are coming across.
* Use text analysis to pull out characters and locations so the user doesn't need to manually put them in the tab.
* (Very reach) Use api with AI to help user over writers block by generating text text based on context for them.

## Wire frames
Adobe XD
https://xd.adobe.com/view/46710a0c-bc2b-4a53-7e0e-53ab4f84206d-3040/

## Back End routes
Most Important to least

* CRUD for a story
* POST get synonyms
* POST analyze story
* POST create story

## Back End Framework

Nodejs using Express.

## Apis & services

* Dictionary API
* Text analysis API
* Generation Service

## Backend storage

* User has many stories
* Story has many characters