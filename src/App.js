import Button from "./components/button/index.jsx";
import Heading from "./components/heading/index.jsx";
import Input from "./components/input/index.jsx";
import Typography from "./components/typography/index.jsx";
import Tooltip from "./components/tooltip/index.jsx";
import Accordion from "./components/accordion/index.jsx";

function App() {
  return (
    <div>
      <div className="button-section">
        <Button variant="primary" size="lg" btnType="submit">
          lg, primary
        </Button>
        <Button variant="primary" size="md" btnType="reset">
          md, primary
        </Button>
        <Button variant="primary" size="sm" disabled>
          sm, primary
        </Button>
        <Button variant="primary" size="md">
          Hover
        </Button>
      </div>

      <div className="button-section">
        <Button variant="bordered" size="lg">
          lg, bordered
        </Button>
        <Button variant="bordered" size="md" disabled>
          md, bordered
        </Button>
        <Button variant="bordered" size="sm">
          sm, bordered
        </Button>
        <Button variant="bordered" size="md">
          Hover
        </Button>
      </div>

      <div className="input-section">
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" label="Email" />
        <Input
          type="text"
          placeholder="Enter your password"
          danger="true"
          label="Name"
        />
        <Input
          type="text"
          placeholder="Enter your password"
          disabled
          label="Name"
          value="Disabled"
        />
      </div>

      <div className="typography-section">
        <Typography textSize="lg">
          LG. Our mission is to redefine the model of learning and re-engineer its process by providing innovative administrative and instructional technologies. Click here for our beliefs. If you are a school administrator and would like to use ecourse.org for your classes, please create school profiles. Instructors and students may signup independent user account. For questions, contact us.
        </Typography>
        <Typography textSize="md">
          MD. Our mission is to redefine the model of learning and re-engineer its process by providing innovative administrative and instructional technologies. Click here for our beliefs. If you are a school administrator and would like to use ecourse.org for your classes, please create school profiles. Instructors and students may signup independent user account. For questions, contact us.
        </Typography>
        <Typography textSize="sm">
          SM. Our mission is to redefine the model of learning and re-engineer its process by providing innovative administrative and instructional technologies. Click here for our beliefs. If you are a school administrator and would like to use ecourse.org for your classes, please create school profiles. Instructors and students may signup independent user account. For questions, contact us.
        </Typography>
      </div>

      <div className="header-section">
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
      </div>

      <div className="tooltip-section">
        <Tooltip text="I am tooltip" position="top">
          Top
        </Tooltip>
        <Tooltip text="I am tooltip" position="right">
          Right
        </Tooltip>
        <Tooltip text="I am tooltip" position="left">
          Left
        </Tooltip>
        <Tooltip text="I am tooltip" position="bottom">
          Bottom
        </Tooltip>
      </div>

      <div className="accordion-section">
        <Accordion title="Accordion 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion>
        <Accordion title="Accordion 2" defaultOpen>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion>
      </div>
    </div>
  );
}

export default App;