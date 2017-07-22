Maintenance details

Useful Links:
-https://github.com/facebookincubator/create-react-app
-https://github.com/creationix/nvm#installation


Running the Development sever:
-If you have never run this before you will have to make sure you have Node Packet Manager on your computer the link to download it is here:
-In order to run the site in development mode you need to change to the directory containing all the files in terminal.
-You will then need to type 'npm install' to install all the dependencies if you have not previously run this before.
-You will then need to type 'npm run start' in the terminal and this will run the development server with a live update.
-Example setup on Macbook with the app saved onto desktop
  - cd desktop
  - cd react-paas-app
  - cd my-app
  - npm run start
-READ: If the site doesn't run check the terminal for any errors or the console in chrome dev tools!

Home Page
Files in use are: 'pages/Home',
 'header/Header', 'header/Navigation', 'header/SocialMedia', 'header/Title',
 'body/CarouselComponent', 'body/ContainedElement', 'body/HomePageAbout'

-If you want to change any text you can just look at the respective files and change the text and save it.
-If you want to change images or text for the Carousel, you will need to go into the HomePageAbout and pass in a new photo with an increment of the number from the previous one eg photo2={Gavan} photo3={Seb} where Gavan and Seb are names of photos that were imported.

To add new thumbnails down the bottom <Col><ContainedElement photo={Example} title="Example" description="Example"/></Col>. This will render a new element and automatically align it as well as passing in the text and photo through as props to the ContainedElement. To edit them you just need to change the text of the title or description or change the photo being passed in.

About Page
-The about page is rendered from the './pages/About';
-Changing President message just go into the President Message Component and change the text :)
-If you want to add a new Executive Component that includes the image and text, go into the '/body/ExecutiveInfo' page and add <Col md={2}><PersonalDetails /></Col> and pass in first, last, info and photo as props. To edit it, just change what is passed in.
-To change any of the partners or add new ones go to '/body/Partnerships' and you can either add a new <PartnershipDetails /> Component with partnerName, partnerLogo and partnerInfo being passed in as props or change the existing text.
