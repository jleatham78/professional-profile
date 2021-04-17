import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Badge
} from 'reactstrap';
import Sugarrush from '../../assets/images/Sugarrush.png'
import EZplan from'../../assets/images/EZplan.png'
import Runbuddy from '../../assets/images/Runbuddy.png';
import Ohsnap from '../../assets/images/Ohsnap.png';
import Budgettracker from '../../assets/images/Budgettracker.png';
import Codequiz from '../../assets/images/Codequiz.png';

const Projectcard = (props) => {
  return (
      <div>
          <h1><Badge color='secondary'>Projects</Badge></h1>
     
    <CardColumns>
      <Card>
        <CardImg top width="100%" src={Sugarrush} alt="Sugar Rush screenshot" />
        <CardBody>
          <CardTitle tag="h5">Sugar Rush</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">JavaScript, CSS</CardSubtitle>
          <CardText>Welcome to the Sugar Rush website, where a user can view the menu on the main page, then visit the log in/sign up page to access an interactive menu. Once logged in, the user can view drinks filtered by soda type. </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={Ohsnap} alt="Run Buddy screenshot" />
        <CardBody>
          <CardTitle tag="h5">Oh Snap!</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">React</CardSubtitle>
          <CardText>A photography portfolio</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
      <CardImg top width="100%" src={EZplan} alt="EZ Plan screenshot" />
        <CardBody>
          <CardTitle tag="h5">EZ Plan</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">JavaScript, HTML</CardSubtitle>
          <CardText>EZ Plan is a one-stop app that allows the user to plan a night out in a specific city. The user can search by city and date to pull up a list of events that is generated from the TicketMaster API. The search also pulls up a list of restaurants in that same city through the Zomato API.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
      <CardImg top width="100%" src={Codequiz} alt="EZ Plan screenshot" />
        <CardBody>
          <CardTitle tag="h5">Code Quiz</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">JavaScript, HTML</CardSubtitle>
          <CardText>Code Quiz offers users a fun way to test their knowledge!</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={Budgettracker} alt="Run Buddy screenshot" />
        <CardBody>
          <CardTitle tag="h5">Budget Tracker</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">IndexedDB</CardSubtitle>
          <CardText>A budget app that allows the user to track income and expenses, even while offline.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={Runbuddy} alt="Run Buddy screenshot" />
        <CardBody>
          <CardTitle tag="h5">Run Buddy</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">HTML, CSS</CardSubtitle>
          <CardText>Run Buddy is an app that allows the user to connect with a personal trainer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      
    </CardColumns>
    </div>
  );
};

export default Projectcard;