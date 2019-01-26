import React, {PureComponent} from 'react';
import ProfileActivity from '../../../components/ProfileActivity';
import TabsPanelDivider from '../../../components/panel/TabsPanelDivider'

const titles={
  title1: 'Server Side',
  title2: 'Client Side',
  title3: 'Libraries',
  title4: 'Misc. Tools'
}

const Img1 = process.env.PUBLIC_URL + '/img/mockup1.png';
const Img2 = process.env.PUBLIC_URL + '/img/mockup2.png';


export default class ProfileActivities extends PureComponent {
  render() {
    return (
      <div>
        <ProfileActivity date='10 days ago' name='Project Kickoff'>
          <p>The Capstone Project started on Monday, August 13. The first deliverable was to produce a project 
            proposal describing the problem space, feature set, and technology stack.</p>
            <br/>
            <TabsPanelDivider titles={titles}/>
        </ProfileActivity>
        <ProfileActivity date='9 days ago' name='Wireframing'>
          <p>Adobe XD and Photoshop were key tools used on this day to produce screen wireframes. </p>
          <img src={Img1} alt=''/>
          <img src={Img2} alt=''/>
        </ProfileActivity>
        <ProfileActivity date='8 days ago' name='UI Toolkit Research and Project Scaffolding'>
          <p>Delivering a final product that looked polished with key features set out in the project proposal was really important to me. 
            So with limitd resources - people and time, as is the case in nearly all projects - I researched the use of frameworks like bootstrap, Antdesign while settling in on EasyDev. It was now time to create the react project and begin putting static components together</p>
        </ProfileActivity>
        <ProfileActivity date='7 days ago' name='Server setup and XML to JSON conversion'>
          <p>Creating the express server was fairly straightforward. However, the service providers like DealerTrack, BlackBook, and Equifax still trasmit their data via XML. Figuring out how to convert XML to JSON was the first new challenge I had to solve. Check out app.put('/new') endpoint in Server.js found in the back-end directory </p>

        </ProfileActivity>
        <ProfileActivity date='6 days ago' name='Google Firestore'>
          <p>With my new set of JSON data, I was able to start creating the endpoint and functions needed to push this data into documents within collection</p>
        </ProfileActivity>
        <ProfileActivity date='5 days ago' name='Thank goodness for Axios...'>
          <p>With a few backend endpoints setup, I used the Postman tool to test and simulate request coming from the front-end application. Once these endpoints were working, it was time to get all the components to make the appropriate requests when they mount and set state where appropriate.</p>
        </ProfileActivity>
        <ProfileActivity date='4 days ago' name='More Axios and Axios Progress Bar'>
          <p>Nobody likes a page that just says loading .... , so with Axios Progress Bar, a simple stylized progress bar for HTTP requests made by the web application is shown</p>
        </ProfileActivity>
        <ProfileActivity date='3 days ago' name='Components or Containers, the many decisions'>
          <p>Time to build additional components and pass data to them. While creating these components, it became clear how many of them would ned to be reused. So rather than creating them over and over again, I structured the project files using containers for the layout of the screen followed by components that were custom or one time use for that specific screen while a seperate folder held re-usable components. </p>
        </ProfileActivity>
        <ProfileActivity date='2 days ago' name='Calculate Payment and Submit Decision logic'>
          <p>Implement the calculate payment logic was a bit of a challenge as the formula's we are use to write on paper or Excel did not work in javascript. This is were Math.pow() was used to get the right payment amount. This put things into perspective for me. What we may be able to accomplish is 5 minutes in Excel may not be the case using another tool especially if there is a learning curve to it.</p>
        </ProfileActivity>
        <ProfileActivity date='1 days ago' name='Tie the data to the field components'>
          <p>This was the tedious part of it all. As there are many fields to update with prop values and getting to the right object level took time. I think this is where Product teams can really help developers by providing in their specs the path to the data</p>
        </ProfileActivity>
        <ProfileActivity date='0 days ago' name='IT`s SHOWTIME!'>
          <p>Getting the extermination team (me) to comb through any potential issues, prune NPM, remove all console logs, and comment where appropriate.</p>
        </ProfileActivity>
      </div>
    )
  }
}