# URL Shortener
A URL shortener built using  *uuid4* with MongoDB connectivity 🔗 

 <br> 
  
URL shortener is one of the projects that gives a good understanding about generating random and unique ID's, redirecting URL's and database connectivity.

The website has a text box where users are supposed to paste their URL and the website generates shortened URL.

 ### Logic : 
- When URL is pasted , save the URL to database with its unique ID generated using *uuid4*.
 
- When user enters a shortened URL in the browser, extract the uuid code from URL, find its respective original URL from database and redirect user to that URL. 📌
 <br> 
 
  ### Tech/Framework used : 
  
 1. Languages : HTML(ejs), CSS, JS
 2. Database : MongoDB
 3. Frameworks : Express.js 
 4. Code Editor : VS Code 
  
 ### Screenshot :  
 ![url shortner image](https://github.com/sumitmule/url-shortener/assets/111048440/dac14666-2747-45a6-8fb0-5afd076030eb)

  
 ### Things implemented in this project : 
  
 1. Generating random unique ID's
 2. Database connectivity with MongoDB
 3. Use of Express.js for routing
 4. Use of view engine like ejs
 <br> 
  
 > User experience can be improved by using a well designed UI. 😄
