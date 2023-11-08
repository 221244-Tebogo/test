# Interactive Development 200 Term 1 Component Based Development -  Tebogo Ramolobeng

## About the project:

I embarked on a journey to delve into the world of Component-Based Development. The primary focus of this term was on the further development of advanced JavaScript concepts, particularly related to JavaScript's two major data structures: Arrays and Objects. Additionally, I explored data-driven development and data visualization. This document outlines my learning experience and how I implemented my project based on the instructions provided.<br></br>

This project is centered around the development of a data-driven web application that focuses on data visualization using frameworks such as Charts.js. It's an opportunity to further your understanding of Component-Based Development while creating interactive and informative charts. The project's core elements include utilizing JavaScript, Axios for API integration, and a frontend framework like React.

## Getting Started:

### Prerequisites:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en)
* [NPM](https://www.npmjs.com/)

### How to install:

* React Bootstrap <br> `npm install react-bootstrap bootstrap`
* React Router DOM <br> `npm i react-router-dom`
* Axios <br> `npm i axios`


### Install Dependencies: 
* npm i @iconscout/react-unicons
* npm i @mui/material
* npm i chart.js
* npm i framer-motion
* npm i react-dropdown
* npm i @babel/core

## Features and Functionality:

The web application is structured around six primary user-facing pages. The initial page serves as the home screen, showcasing the top questions that students have asked as well as a search bar where a user can search for a question and an answer. Next, on the questions page, the user will be able to "ask" a question about their code. They'll be able to type the question as well as select tags that are related to their question. Additionally the user will also be able to add extra information to help better describe their question. If the user then wants to they can add an image of their code before they upload the question. 

Moving on to the answers page, this is where users will be able to see questions that have already been answered as well as questions that are yet to be answered. They might also want to view more information around a specific question and move on to the answered questions page. However at the very beginning of the journey the user should first log in or sign up so that when they are logged in then they can see their profile on the profile page.

## Concept Process:

### Ideation:

In the initial brainstorming stage of the project, we took a look at Stack Overflow that was our main inspiration for this project and took the parts from that website that we liked and started forming wireframes around that. Next we looked through what we do not like about the website and we tried to rework those things to fit what we think would be a better output option. After we set up the wireframes we started with the initial setup of the codebase as well as the server side setup.

### User-side Wireframes:

![login](./wireframes/login.png)
![home](./wireframes/home.png)
![questions](./wireframes/questions.png)
![answers](./wireframes/answers.png)
![profile](./wireframes/profile.png)

## Project Overview

The main theme of this term's project was the research, analysis, implementation, and visualization of a data set (API) of my choice. It was essential to select a sufficiently complex data set for my application. To visualize the data set, I utilized Charts.js, an open-source data visualization framework. I also implemented my unique form of data visualization, which was thematically related to the chosen data set. Additionally, I explored the concept of component-based development by using the React framework to construct the front end.


## Project Specifications
#### 1. Landing Page
The Landing Page comprises three core components: FeaturedProducts, LineChart, and Table, providing users with a consolidated view of the data.

FeaturedProducts Component: This component highlights essential data entries, delivering valuable insights into popular products, top-selling items, and significant metrics.

LineChart Component: Utilizing Chart.js and Axios, the LineChart presents an interactive line graph. Users can visualize revenue trends over time, identifying patterns and fluctuations for data-driven decision-making.

Table Component: Implementing MUI components, the Table offers a detailed list of recent purchases. It includes product names, tracking IDs, dates, and order statuses color-coded for swift analysis.

Asynchronous data retrieval is employed for a responsive user interface. The LineChart component utilizes the useEffect hook for asynchronous data fetching. To ensure a smooth and responsive user interface, the setTimeout function introduces a 1000-millisecond delay before updating the chartData state.

#### 1.1 Unique UI Visualization
On the landing page, I included a UI element of my design that thematically matched and outlined a specific aspect of my dataset.

#### 2. Comparison Page
The Compare page utilizes asynchronous attributes, specifically the Axios library, for making asynchronous requests to fetch data from the API. Through the useEffect hook, the page asynchronously fetches data, while the handleLoadItems function loads additional items for comparison. This approach ensures the code to continue executing while waiting for the data to be fetched. Users can select and compare two products from the API, and it displays essential details, including title, category, ID, description, price, sales, and stock.

A Doughnut chart showcases the price differences between the selected products, enabling users to make informed decisions based on a comprehensive analysis. Overall, the page is a dynamic and data-rich tool for users to compare products effectively.

#### 3. Timeline Page
I’ve integrated the Chart.js library’s LineChart component using React and the react-chartjs-2 package for smooth data visualization. Utilizing Axios, to fetch data from the API to create an interactive line graph displaying sales performance for the top 10 products. The tool also includes price difference details to help users identify pricing trends, providing a user-friendly and data-rich experience that empowers business users to monitor product performance effectively.

## Implementation
In my project, I chose [mention the name of the API or data set you selected] as my data source. I researched this data set extensively to understand its structure and content. I then implemented the following components based on the project requirements:

### Landing Page
I created a landing page that displayed a dashboard-style interface. It provided a summary of the chosen data set, including key statistics and trends. I also implemented a unique UI visualization element that highlighted a specific aspect of the data set, providing users with a quick and engaging overview.

### Comparison Page
For the comparison page, I designed a dedicated section where users could compare two objects from the data set. I used Bar graphs, Pie charts, and a Polar Area or Radar chart to present the comparative properties of the selected objects. This allowed users to gain valuable insights into the data.

### Challenges

One of the most significant challenges I faced during this project was grasping the process of pulling data from an external API and effectively integrating it into my application. Additionally, I encountered difficulties in rendering and presenting the retrieved data in a user-friendly format.


## Future Implementation

To enhance my skills and become more industry-ready, I plan to focus on gaining a deeper understanding of React and JavaScript. This will enable me to tackle similar projects with more confidence and efficiency.

## Final Outcome

### Mockup Video


https://github.com/MareliLourens/OpenFlow/assets/109971278/8f61f450-b44c-4f12-83a9-c5c9435bf0a6


## Conclusion
This term's project was a significant learning experience. I successfully implemented a data-driven web application using Component-Based Development with React and data visualization with Charts.js. I honed my skills in JavaScript, data processing, and web development, and I now have a deeper understanding of data-driven applications. This project has prepared me for more advanced web development challenges in the future, and I look forward to applying the knowledge and skills I've gained in my upcoming projects.
