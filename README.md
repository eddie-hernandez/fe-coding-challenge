# Interview Coding Challenge (Response)

This is my version of the Interview Coding Challenge for Ayzenberg Group. It's a basic Gatsby Project and I used the GitHub API to index users, access detailed information, and even search for users on GitHub.

## Getting Started

You can find a deployed link of this challenge here:

Open [https://main--effulgent-dusk-6b58e3.netlify.app/](https://main--effulgent-dusk-6b58e3.netlify.app/)

## Tools/Technologies

* HTML
* CSS
* JavaScript
* Node.js
* React.js
* GatsbyJS

## Additional Dependencies

* dotenv
* Reach Router

### Homepage

![Homepage](/src/images/homepage.png)

### Profile Page

![Profile Page](/src/images/profile.png)

### Search Page

![Search Page](/src/images/search.png)

# Comments

I think my favorite moment in this challenge, and like my past data scraping experiences, was realizing how enjoyable coding a project can be when fetching external APIs.

Once I got the hang of using GitHub's Users API, I started thinking...well...what else can I do?!

I thought I'd make a simple GitHub User Profile Search feature, where users can search for anyone they'd like to on GitHub based on their GitHub usernames. Thanks to React, I was just able to link the ProfileCard Component from my original code when clicking on a specific user from the index of GitHub users, so I just had to write a new page for the result, and bam! done.

I've had a lot of fun on this! I did have to incorporate my signature Earth tones for the overall design of the web app, and I can always do more styling on it, but hey! not bad for a couple of hours worth of work :• )

## Bonus Points!

I chose to deploy using Netlify's continuous deployment via GitHub, so that with every GitHub push on this project, Netlify simply deploys the latest version of the app. No hassle there, love that.

Proud to have also incorporated some Tailwind CSS in the mix as well! Keeps my code organized and keeps the design looking good.