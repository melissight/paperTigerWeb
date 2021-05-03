import React, { useState } from "react";
import { ImageMap } from '@qiuz/react-image-map';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import _ from "lodash";
import embraer145 from "./ERJ145Cockpit.png";
import "./App.css";

const imageMaps = [
  {
    width: "6.799725651577503%",
    height: "3.0836762688614563%",
    left: "46.36488340192044%",
    top: "20.54869684499314%",
    name: "APU Control Panel"
  },
  {
    width: "6.220095693779904%",
    height: "6.698564593301436%",
    left: "59.469198382071895%",
    top: "17.942583732057415%",
    name: "Ice Protection Panel"
  },
  {
    width: "6.447187928669409%",
    height: "8.093278463648835%",
    left: "59.34413575014133%",
    top: "24.55418381344307%",
    name: "Air Conditioning Panel"
  },
  {
    width: "6.447187928669409%",
    height: "2.3319615912208507%",
    left: "59.34413575014133%",
    top: "32.510288065843625%",
  },
  {
    width: "6.447187928669409%",
    height: "2.3319615912208507%",
    left: "59.34413575014133%",
    top: "32.510288065843625%",
  },
  {
    width: "8.093278463648833%",
    height: "10.562414266117969%",
    left: "67.16306579129359%",
    top: "43.895747599451305%",
  },
  {
    width: "8.093278463648833%",
    height: "10.562414266117969%",
    left: "59.069787327644754%",
    top: "43.895747599451305%",
  },
  {
    width: "8.093278463648833%",
    height: "10.562414266117969%",
    left: "46.03823725905764%",
    top: "43.75857338820302%",
  },
  {
    width: "4.526748971193414%",
    height: "6.172839506172838%",
    left: "54.26868993395476%",
    top: "48.42249657064472%",
  },
  {
    width: "2.7434842249657057%",
    height: "7.544581618655689%",
    left: "54.13151572270648%",
    top: "77.3086419753087",
  },
  {
    width: "6.721536351165981%",
    height: "5.6241426611796985%",
    left: "49.87911517400964%",
    top: "55.96707818930041%",
  },
];

const flowSteps = [
  'APU Control Panel',
  'Ice Protection Panel',
  'Air Conditioning Panel',
  'Packs',
  'Sterile Light',
  'PFD Speeds',
  'MFD Takeoff Page',
  'EICAS Trims Messages',
  'RMU ATC Out',
  'Flaps',
  'FMS',
  'EICAS Monitor Fuel Balance'
]

function App() {
  const [falseClicks, setFalseClicks] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const onMapClick = (area, index) => {
    const tip = `${flowSteps[index]}`;
    console.log(tip, area);
    if (index === currentStep) {
      alert(tip);
      let counter = (currentStep + 1);
      setCurrentStep(counter)
    } else {
      let counter = (currentStep + 1);
      setFalseClicks(counter)
    }
  }

  function onImageClick(e) {
    let counter = falseClicks;
    counter = counter + 1;
    setFalseClicks(counter)
  }

  const mappedStep = [imageMaps[currentStep]];
  const highlightStep = () => {

  }
  const ImageMapComponent = React.useMemo(() => <ImageMap className="usage-map" src={embraer145} map={imageMaps} onMapClick={onMapClick} onClick={(e) => onImageClick(e)} />, [mappedStep, embraer145]);

  console.log('falseClicks', falseClicks)
  console.log('currentStep', currentStep)
  return (
    <div className="App">
      <Container fluid>
        <h4>After Start Flow - First Officer</h4>
        <Row>
          <Col xs="9" className="maxWidth70 m-0 p-0">
            {ImageMapComponent}
          </Col>
          <Col xs="3" className="m-0 p-0">
            {_.map(flowSteps, (f, idx) => {
              return idx < currentStep ? <div key={`flowStep${idx}`} active={idx < currentStep}>{f}</div> : null
            })}
          </Col>
        </Row>
      </Container>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
