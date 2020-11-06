# pearsonTest
INTRODUCTION
------------
This test if for verifying the Search bar and its functionality and if the correct link is opened after an article is accessed.

Setup For Javascript Automation with Selenium
Firstly, we w’ll do the the setup for Javascript automation. Below are the steps which we will follow

REQUIREMENTS
------------
This project requires the following modules:

- Node.js
- Selenium Webdriver
- Mocha

INSTALLATION
------------
- Install Node.js
- Verify the installation of Node.js
- Create package.json file
- Install Selenium Webdriver
- Install Mocha

Install Node.js
Before installing Node.js its important to understand that what is Node.js and why it is used. It is a tool because it provide the environment to run the JS code.

https://nodejs.org/en/download/

Verify the installation
If you done with installation of Node.js , After that follow the below simple steps to verify the installation:

Open CMD on windows.
Type command: node -v


Create package.json file
Just create an Empty folder with your project name and open terminal (Command prompt) window in that folder.

Type in VS Code terminal: 
npm init
Hit enter
Next, npm ask some questions related to configuring your package.json file. Just provide the information npm asking for otherwise, you can hit enter to skip. Later, you can configure it according to your project. For now,  just provide name, description, and author. After entering that just type Yes to save the file and hit enter.

Add npm packages to package.json
What dependencies we need to set up for this automation project setup.

1. selenium-webdriver
npm install selenium-webdriver
2. chromedriver
npm install chromedriver
3. mocha
npm install mocha
4. @types packages
- @types/node
- @types/mocha
- @types/selenium-webdriver
npm install @types/node
npm install @types/mocha
npm install @types/selenium-webdriver

How to run test
----------------
After cloning the repo locally, go to the project’s folder using a terminal.
Run this command: 'npm run startTest'