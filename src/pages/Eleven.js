import { Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Eleven() {
  let display = () => {
    alert("You clicked the button!");
  };
  return (
    <>
      {/* // eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        href="https://github.com/mayur99rv/react-classwork/blob/master/src/pages/Eleven.js"
        target="_blank"
        rel="noreferrer"
      >
        Code
      </a>
      <div className="eleven">
        <h1>React BootStrap examples</h1> <br />
        <Button onClick={display} variant="primary">
          Button
        </Button>
        <Button onClick={display} variant="secondary">
          Button
        </Button>
        <Button onClick={display} variant="success">
          Button
        </Button>
        <Button onClick={display} variant="warning">
          Button
        </Button>
        <Button onClick={display} variant="danger">
          Button
        </Button>
        <br />
        <br />
        <Carousel className="w-75 m-auto">
          <Carousel.Item className="w-100">
            <img className="d-block w-100" src="./1.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>First slide</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="w-100">
            <img className="d-block w-100" src="5.jpg" alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="w-100">
            <img className="d-block w-100" src="./3.jpg" alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Eleven;
