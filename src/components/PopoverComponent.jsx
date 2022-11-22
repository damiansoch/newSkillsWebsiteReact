import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const PopoverComponent = ({ description, name }) => {
  const popover = (
    <Popover id="popover-basic" className="text-center">
      <Popover.Header as="h3">{name}</Popover.Header>
      <Popover.Body>{description}</Popover.Body>
    </Popover>
  );
  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Button variant="success">Click me to see</Button>
    </OverlayTrigger>
  );
};

export default PopoverComponent;
