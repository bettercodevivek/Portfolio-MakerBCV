# PortFolio-Maker

This is a versatile npm package designed to simplify the process of creating captivating portfolios. Whether you're a designer, developer, or freelancer, this package offers intuitive features to help you showcase your work effectively.

 # Features

**1.Easy to Use:** Portfolio-Maker provides a user-friendly interface, making it accessible for beginners and professionals alike.

**2.Flexibility:** Customize every aspect of your portfolio, including layout, color scheme, fonts, and more.

**3.Fast and Lightweight:** It is optimized for speed and efficiency, allowing you to create and deploy your portfolio quickly.

**4.Continuous Updates:** We are committed to improving PortfolioBuilder with regular updates and new features based on user feedback.

# Usage

```typescript

 import { Navbar,Homepage,About,Skills,Projects,Footer } from 'portfolio-maker'

 // After importing all these required components in you default App.tsx file. Perform following steps.

 // Erase all the code from App.css file as well as index.file.

 // Navigate to the node_modules folder and search for 'Portfolio-Maker'.

 // Open the folder and then navigate to the dist folder, within the dist folder you will see a file Bundle.css.

 // Copy all the code from Bundle.css file and paste it into your App.css file.

 // After performing above mentioned steps, within the App function , write the following code into the return() block.

    return(
         
         <Navbar name=' '/>
        
        // Add your name 

        <Homepage name='' role=''>

        // Again add your name as well as your professional Role, such as FrontEnd Developer.

        <About majorName='' languages=''>

        // Add your graduation major in majorName such as Computer Science and in the languages props add programming languages that you are fluent in.

        <Skills urlforskilllogo1='' altname1=''>

        // In the Skills component you can add upto 9 different urls for Logos of different technology frameworks
        // or languages that you are good at, just like above code snippet you can add urlforskilllogo2, urlforskilllogo3 and further on till 9, similary altname1,altname2 which is for alternate name, basically how your give alt attribute to img tag in HTML.

        <Projects projectName1=' ' projectName2=' ' projectName3=' ' ProjectDescription1=' ' ProjectDescription2=' ' ProjectDescription3=' ' ProjectLiveUrl1=' ' ProjectLiveUrl2=' ' ProjectLiveUrl3=' ' Projectgithuburl1=' ' Projectgithuburl2=' ' Projectgithuburl3=' ' Projectimageurl1=' ' Projectimageurl2=' ' Projectimageurl3=' '/>

        // Coming to the projects Section, we have a long list of props to be given.So, here in the Projects component as you can see you can give details for upto 3 different projects in this portfolio website of yours.
        // projectName is for name.
        // projectDescription is for Description of your Project.
        // ProjectLiveUrl is basically URL of your live project.
        // Projectgithuburl is link to your github repo of the project.
        // Projectimageurl is basically link to the preview image of your Project.

        // At last comes the footer component.

        <Footer mailaddress=' ' GithubUserUrl=' ' LinkedinUserUrl=' ' InstagramUserUrl=' '>

        // In the Footer component, mailaddress is basically for your mail address.
        // GithubUserURl for your Github Profile and similarly LinkedinUserURl and InstagramUserUrl for 
        // LinkedIn as well as your Instagram profile.

        // With this your Portfolio Website is completely ready.

        // You can make desired changes to the styling of the website as per your needs by referring to Classnames
        // of all the components in the src folder of the Package which you can navigate in node_modules folder 
        //  and modifying the App.css file according to your needs.

        // Few suggested additions to your App.css files are:-
```
    App.css
   
    body {
    overflow-x:hidden;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background:#e4f1fe;
         }

    body::-webkit-scrollbar{
    background-color:#53a8b6;
    width:0.5vw;
         }

    body::-webkit-scrollbar-thumb{
    background-color:black;
         }
    html{
    scroll-behavior: smooth;
       }


## ThankYou For Using Portfolio-Maker. If you found this package helpful appreciate the creator by giving a star to the github repository. Happy Coding!!