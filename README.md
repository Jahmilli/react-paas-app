Useful Links:
- https://github.com/facebookincubator/create-react-app
- https://github.com/creationix/nvm#installation

Tools used:
 - ReactJS
 - Node
 - CreateReactApp

 Prerequisites:
 - Node: (https://nodejs.org/en/download/)
 - NPM (Packet Manager): (In terminal type npm install --save download documentation is at: https://www.npmjs.com/package/download)
 

Running the Development sever:
- If you have never run this before you will have to make sure you have NPM on your computer.
- In order to run the site in development mode you need to change to the directory containing all the files in terminal.
- You will then need to type 'npm install' to install all the dependencies if you have not previously run this before.
- You will then need to type 'npm run start' in the terminal and this will run the development server with hot reloading.
- Example setup on Macbook with the app saved onto desktop
  - cd desktop
  - cd react-paas-app
  - cd my-app
  - npm run start
- READ: If the site doesn't run check the terminal for any errors or the console in chrome dev tools!

Deploying latest build:
- On master branch, run 'npm run deploy'

Home Page
Files in use are: 'pages/Home',
 'header/Header', 'header/Navigation', 'header/SocialMedia', 'header/Title',
 'body/CarouselComponent', 'body/ContainedElement', 'body/HomePageAbout'

- If you want to change any text you can just look at the respective files and change the text and save it.
- If you want to change images or text for the Carousel, you will need to go into the HomePageAbout and pass in a new photo with an increment of the number from the previous one eg photo2={Gavan} photo3={Seb} where Gavan and Seb are names of photos that were imported.

To add new thumbnails down the bottom <Col><ContainedElement photo={Example} title="Example" description="Example"/></Col>. This will render a new element and automatically align it as well as passing in the text and photo through as props to the ContainedElement. To edit them you just need to change the text of the title or description or change the photo being passed in.

About Page
- The about page is rendered from the './pages/About';
- Calls PresidentMessage, ExecutiveInfo and Partnerships
- Changing President message just go into the President Message Component and change the text :)
- If you want to add a new Executive Component that includes the image and text, go into the '/body/ExecutiveInfo' page and add <Col md={2}><PersonalDetails /></Col> and pass in first, last, info and photo as props. To edit it, just change what is passed in.
- To change any of the partners or add new ones go to '/body/Partnerships' and you can either add a new <PartnershipDetails /> Component with partnerName, partnerLogo and partnerInfo being passed in as props or change the existing text.

Events Page
- Events page rendered from the './EventsPage';
- Calls Events and in that you will be able to change any text for the main event page.
- The css for Events page images is different depending whether you are on the main page or a separate page such as 'Past Events' or 'Future Events'. If you want to change the text or border on the main page you will have to change the Event Page Link where as in the separate pages you will have to change the 'EventPageSpotlightImg h2' css class.


Future Events + Past Events Pages
ISSUE:
-Currently the carousel is changing height depending on the height of the image but only if it smaller than the max. This can be changed
 however it might be worthwhile to keep it as it is....
-Height of the image might need to be reduced


-These pages are exactly identical in structure however changes need to be made to either './FutureEventsPage' or './PastEventsPage'
 and then furthermore changes into their respective calling components ('FutureEvents'/'PastEvents').
-Changes to the images are just changing the headings and photo props of the carousel components...


Photo Gallery
Styling fix:
-In the gallery carousel page if you click on a photo the state is changed and the image will rerender. However there is room for
 improvement in the way it rerenders which will likely just need some  basic styling changes in the 'PhotoGalleryCarouselLockup' css class.


Contact Page
Issue:
