import React, { useState, Fragment } from "react";
import { ImageMap } from "@qiuz/react-image-map";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "reactstrap";
import _ from "lodash";
import embraer145 from "./ERJ145Cockpit.png";
import "./App.css";
import { Gif } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

// create a GiphyFetch with your api key
// apply for a new Web SDK key. Use a separate key for every platform (Android, iOS, Web)
let giphyKey = "zP1KCyNvGTwDb2fCbTNQNH6soDPlilrk";
const gf = new GiphyFetch(giphyKey)

const shedBus = {
  width: "6.662551440329217%",
  height: "3.181364392678869%",
  left: "33.470507544581615%",
  top: "18.169717138103163%",
  name: "Shed Bus",
  tagName: "shedBus",
};

const firePanel = {
  width: "6.447187928669409%",
  height: "3.3277870216306153%",
  left: "46.58693410405079%",
  top: "0.49916805324459235%",
  name: "Fire Panel",
  tagName: "firePanel",
};
const apuPanel = {
  width: "6.447187928669409%",
  height: "3.327787021630615%",
  left: "46.449759892802504%",
  top: "3.6605657237936775%",
  name: "APU Panel",
  tagName: "apuPanel",
};
const enginePanel = {
  width: "6.721536351165981%",
  height: "8.153078202995008%",
  left: "46.17541147030594%",
  top: "7.154742096505824%",
  name: "Engine Panel",
  tagName: "enginePanel",
};
const startStop = {
  width: "6.721536351165981%",
  height: "3.494176372712146%",
  left: "46.17541147030594%",
  top: "15.141430948419302%",
  name: "Start / Stop",
  tagName: "startStop",
};
const lights2panel = {
  width: "6.721536351165981%",
  height: "2.828618968386023%",
  left: "46.17541147030594%",
  top: "18.302828618968388%",
  name: "Lights 2 Panel",
  tagName: "lights2panel",
};
const lights3panel = {
  width: "6.721536351165981%",
  height: "2.828618968386023%",
  left: "52.75977361022364%",
  top: "18.302828618968388%",
  name: "Lights 3 Panel",
  tagName: "lights2panel",
};

const icePanel = {
  width: "6.721536351165981%",
  height: "8.319467554076539%",
  left: "59.206961538893054%",
  top: "0.33277870216306155%",
  name: "Ice Panel",
  tagName: "icePanel",
};
const pneumaticsPanel = {
  width: "6.721536351165981%",
  height: "9.816971713810316%",
  left: "59.206961538893054%",
  top: "8.652246256239602%",
  name: "Pneumatics",
  tagName: "pneumaticsPanel",
};
const sterilePanel = {
  width: "6.721536351165981%",
  height: "2.828618968386023%",
  left: "59.344135750141334%",
  top: "18.302828618968388%",
  name: "Sterile Panel",
  tagName: "sterilePanel",
};

const windowRight = {
  width: "33.79715368744438%",
  height: "23.960066555740433%",
  left: "66.20284631255561%",
  top: "0.6655574043261208%",
  name: "Window Right",
  tagName: "windowRight",
};
const radar2Panel = {
  width: "7.322530916525309%",
  height: "3.3277870216306153%",
  left: "67.16306579129362%",
  top: "26.62229617304492%",
  name: "Radar 2 Panel",
  tagName: "radar2Panel",
};
const comms2 = {
  width: "6.911008282780454%",
  height: "4.3261231281198%",
  left: "75.39351846619074%",
  top: "37.104825291181356%",
  name: "Comms 2",
  tagName: "comms2",
};
const pfd2 = {
  width: "8.282750395263307%",
  height: "12.81198003327787%",
  left: "67.16306579129362%",
  top: "31.780366056572372%",
  name: "PFD 2",
  tagName: "pfd2",
};
const mfd2 = {
  width: "8.282750395263307%",
  height: "12.81198003327787%",
  left: "58.65826469389993%",
  top: "31.780366056572372%",
  name: "MFD 2",
  tagName: "mfd2",
};
const eicas = {
  width: "8.008401972766736%",
  height: "13.144758735440929%",
  left: "45.763888836561115%",
  top: "31.780366056572397%",
  name: "EICAS",
  tagName: "eicas",
};
const gear = {
  width: "2.932956156580179%",
  height: "5.4908485856905145%",
  left: "53.994341511458245%",
  top: "31.780366056572372%",
  name: "Gear",
  tagName: "gear",
};
const rmuPanel = {
  width: "4.853395114056172%",
  height: "7.154742096505823%",
  left: "53.994341511458245%",
  top: "37.43760399334442%",
  name: "RMU Panel",
  tagName: "rmuPanel",
};
const flaps = {
  width: "2.6586077340836067%",
  height: "9.816971713810315%",
  left: "53.994341511458245%",
  top: "70.04991680532446%",
  name: "Flaps",
  tagName: "flaps",
};
const speedBrake = {
  width: "2.6586077340836067%",
  height: "7.487520798668884%",
  left: "42.88323040034713%",
  top: "66.72212978369384%",
  name: "Speed Brake",
  tagName: "speedBrake",
};

const fms2 = {
  width: "7.185356705277022%",
  height: "6.3227953410981685%",
  left: "49.60476675151312%",
  top: "46.75540765391015%",
  name: "FMS 2",
  tagName: "fms2",
};
const gustLock = {
  width: "4.441872480311316%",
  height: "4.825291181364391%",
  left: "45.48954041406456%",
  top: "57.07154742096506%",
  name: "Gust Lock",
  tagName: "gustLock",
};
const toConfig = {
  width: "3.207304579076748%",
  height: "4.825291181364391%",
  left: "49.879115174009684%",
  top: "56.905158069883534%",
  name: "Take Off Config",
  tagName: "toConfig",
};
const thrustLevers = {
  width: "8.831447240256447%",
  height: "11.813643926788684%",
  left: "45.48954041406455%",
  top: "61.73044925124793%",
  name: "Thrust Levers",
  tagName: "thrustLevers",
};
const thrustRating = {
  width: "8.831447240256447%",
  height: "3.3277870216306136%",
  left: "45.48954041406455%",
  top: "73.54409317803662%",
  name: "Thrust Rating",
  tagName: "thrustRating",
};

const FLOW_NAMES = {
  AFTER_START_CA: "After Start Flow - CA",
  AFTER_START_FO: "After Start Flow - FO",
  TAXI_CA: "Taxi Flow - CA",
  TAXI_FO: "Taxi Flow - FO",
  BEFORE_TAKEOFF_BELOW_THE_LINE_CA: "Before Takeoff Flow - CA - Below the Line",
  BEFORE_TAKEOFF_ABOVE_THE_LINE_FO: "Before Takeoff Flow - FO - Above the Line",
  BEFORE_TAKEOFF_BELOW_THE_LINE_FO: "Before Takeoff Flow - FO - Below the Line",
  AFTER_LANDING_CA: "After Landing Flow - CA",
  AFTER_LANDING_FO: "After Landing Flow - FO",
  PARKING_CA: "Parking Flow - CA",
  PARKING_FO: "Parking Flow - FO",
  FMS: "FMS",
};
const KEYS = {
  CAPTAIN: "Captain",
  FIRST_OFFICER: "First Officer",
  PILOT_MONITORING: "Pilot Monitoring",
};

const FLOW_TYPES = {
  CAPTAIN_FLOW: { value: 1, label: KEYS.CAPTAIN },
  FO_FLOW: { value: 2, label: KEYS.FIRST_OFFICER },
  // just repeat PM flow in both FA and Captain
  PM_FLOW: { value: 3, label: KEYS.PILOT_MONITORING },
};

const FLOWS = [
  {
    value: 1,
    label: FLOW_NAMES.AFTER_START_FO,
    imageMaps: [
      apuPanel,
      icePanel,
      pneumaticsPanel,
      sterilePanel,
      pfd2,
      mfd2,
      eicas,
      rmuPanel,
      flaps,
      fms2,
    ],
    steps: [
      {
        flowText: (
          <Fragment>
            <div>
              <strong>APU Control Panel</strong>
            </div>
            <div className="ml-2">
              <ul>
                <li>
                  If APU <u>not</u> required, APU shut-down procedure
                </li>
              </ul>
            </div>
          </Fragment>
        ),
        tagNameToMatch: apuPanel.tagName
      },
      {
        flowText: (
          <Fragment>
            <div className="mt-2">
              <strong>Ice Protection Panel</strong>
            </div>
            <div className="ml-2">
              <ul>
                <li>
                  ENG AIR INLET, WING, STAB, and SENSORS on for <i>all</i>{" "}
                  operations
                </li>
                <li>
                  <div>WINDSHIELD 1 & 2</div>
                  <ul>
                    <li>
                      Leave OFF for taxi unless required for deicing / defogging
                    </li>
                  </ul>
                </li>
                <li>
                  <div>Ice Detection Override</div>
                  <ul>
                    <li>AUTO, or</li>
                    <li>ENG, if REF A-ICE is selected ON</li>
                  </ul>
                </li>
              </ul>
            </div>
          </Fragment>
        ),
        tagNameToMatch: icePanel.tagName
      },
      {
        flowText: (
          <Fragment>
            <div className="mt-2">
              <strong>Air Conditioning Panel</strong>
            </div>
            <div className="ml-2">
              <ul>
                <li>Packs - ON</li>
                <li>
                  <div>Bleeds - SET</div>
                  <ul>
                    <li>According to bleed source</li>
                  </ul>
                </li>
              </ul>
            </div>
          </Fragment>
        ),
        tagNameToMatch: pneumaticsPanel.tagName
      },
      {
        flowText: (
          <Fragment>
            <div className="mt-2">
              <strong>Sterile Light</strong> - ON
            </div>
          </Fragment>
        ),
        tagNameToMatch: sterilePanel.tagName
      },
      {
        flowText: (
          <Fragment>
            <div className="mt-2">
              <strong>PFD</strong>
            </div>
            <div className="ml-2">
              <ul>
                <li>Confirm speeds entered on the ASI</li>
              </ul>
            </div>
          </Fragment>
        ),
        tagNameToMatch: pfd2.tagName
      },
      {
        flowText: (
          <Fragment>
            <div className="mt-2">
              <strong>MFD</strong>
            </div>
            <div className="ml-2">
              <ul>
                <li>Monitor Takeoff Page</li>
              </ul>
            </div>
          </Fragment>
        ),
        tagNameToMatch: mfd2.tagName
      },
      {
        flowText: (
          <Fragment>
            <div className="mt-2">
              <strong>EICAS</strong>
            </div>
            <div className="ml-2">
              <ul>
                <li>
                  Check messages on EICAS appropriate for current operational
                  configuration
                </li>
                <li>Trims - verify trim set for takeoff</li>
              </ul>
            </div>
          </Fragment>
        ),
        tagNameToMatch: eicas.tagName
      },
      {
        flowText: (
          <Fragment>
            <div className="mt-2">
              <strong>Transponder</strong>
            </div>
            <div className="ml-2">
              <ul>
                <li>As Required</li>
              </ul>
            </div>
          </Fragment>
        ),
        tagNameToMatch: rmuPanel.tagName
      },
      {
        flowText: (
          <Fragment>
            <div className="mt-2">
              <strong>Flaps</strong>
            </div>
            <div className="ml-2">
              <ul>
                <li>
                  Do <u>not</u> retract or adjust if the flaps require deicing.
                </li>
                <li>
                  Otherwise, select flaps up and confirm flap indication agrees
                  with flap position
                </li>
              </ul>
            </div>
          </Fragment>
        ),
        tagNameToMatch: flaps.tagName
      },
      {
        flowText: (
          <Fragment>
            <div className="mt-2">
              <strong>FMS</strong>
            </div>
            <div className="ml-2">
              <ul>
                <li>Select FPL/MENU LSK DEPART on both FMS CDUs.</li>
              </ul>
            </div>
          </Fragment>
        ),
        tagNameToMatch: fms2.tagName
      },
      {
        flowText: (
          <Fragment>
            <div className="mt-2">
              <strong>For Standard Taxi</strong>
            </div>
            <div className="ml-2">
              <ul>
                <li>Monitor fuel balance</li>
              </ul>
            </div>
          </Fragment>
        ),
        tagNameToMatch: eicas.tagName
      },
    ],
    type: FLOW_TYPES.FO_FLOW,
  },
];

function App() {
  const [currentFlow, setCurrentFlow] = useState(FLOWS[0]);
  const [falseClicks, setFalseClicks] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [gifData, setGifData] = useState(null);

  function resetFlow() {
    setFalseClicks(0);
    setCurrentStep(0);
    setCompletedSteps([]);
  }

  async function checkComplete() {
    if (completedSteps.length === currentFlow.steps.length) {
      const { data: gif } = await gf.random({ tag: 'airplane', rating: 'pg-13' })

      console.log('gift', gif)
      setGifData(gif);
      setShowSuccess(true);
    }
  }

  const { imageMaps, steps } = currentFlow;

  const onMapClick = (area, index) => {
    const tagToMatch = `${steps[index].tagNameToMatch}`;
    let counter = currentStep + 1;
    if ((index === currentStep || counter === steps.length) && area.tagName === tagToMatch) {
      // alert(tip);
      setCurrentStep(counter);
      let texts = completedSteps;
      texts.push(steps[index].flowText)
      setCompletedSteps(texts);
    } else {
      let counter = falseClicks + 1;
      setFalseClicks(counter);
    }
  };

  function onImageClick(e) {
    let counter = falseClicks;
    counter = counter + 1;
    setFalseClicks(counter);
  }

  const mappedStep = [imageMaps[currentStep]];

  const ImageMapComponent = React.useMemo(
    () => (
      <ImageMap
        className="usage-map"
        src={embraer145}
        map={imageMaps}
        onMapClick={onMapClick}
        onClick={(e) => onImageClick(e)}
      />
    ),
    [mappedStep, embraer145]
  );

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs="9" className="maxWidth70 m-0 p-0">
            <h3 className="mb-2 text-primary">After Start Flow - First Officer</h3>
            {ImageMapComponent}
          </Col>
          <Col xs="3" className="m-0 p-0 text-left">
            <Row>
              <Col>
                <ButtonGroup className="mb-2 float-right">
                  <Button
                    onClick={resetFlow}
                    color="primary"
                  >
                    Start Over
                  </Button>
                  <Button
                    onClick={checkComplete}
                    color="success"
                  >
                    Complete Flow
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
            <Row className="m-0 p-0">
              <Col className="m-0 p-0">
              {completedSteps && completedSteps.length > 0 && _.map(completedSteps, (stepText, idx) => {
                return (
                  <div key={`flowStep${idx}`}>{stepText}</div>
                );
              })}
            </Col>
          </Row>
          </Col>
        </Row>
        {showSuccess && (
          <Modal isOpen={showSuccess}>
            <ModalHeader>Woohooo!!</ModalHeader>
            <ModalBody>
              <Gif gif={gifData} width={400} />
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => {
                  setShowSuccess(false);
                  resetFlow();
                }}
              >
                Close
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </Container>
    </div>
  );
}

export default App;
