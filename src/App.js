import "./App.scss";
import React, { useEffect, useState } from "react";
import AdvertisementComponent from "./components/AdvertisementComponent";
import { whereToPutAdvertisement } from "./data/advertisementConfig";
import useWindowWidth from "./hooks/useWindowDimmensions";
import SwitchButtonsComponent from "./components/SwitchButtonsComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { criteria } from "./data/criteria";

const FirstTypeOfComponent = React.lazy(() =>
  import("./components/FirstTypeOfComponent")
);
const SecondTypeOfComponent = React.lazy(() =>
  import("./components/SecondTypeOfComponent")
);

function App() {
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [currentAddvertisementConfig, setCurrentAddvertisementConfig] =
    useState([]);
  const [horizontalAdvertisement, setHorizontalAdvertisement] = useState(false);
  const [componentsConfigurationState, setComponentsConfigurationState] =
    useState(criteria);

  let currentWidth = useWindowWidth();

  whereToPutAdvertisement(
    currentWidth.width,
    currentAddvertisementConfig,
    setCurrentAddvertisementConfig,
    setHorizontalAdvertisement
  );

  useEffect(() => {
    const dataFromJsonFile = require("./sample-data.json");
    setDataToDisplay(dataFromJsonFile.list);
  }, []);

  return (
    <div className="App">
      <Router>
        <SwitchButtonsComponent
          data={dataToDisplay}
          configuration={componentsConfigurationState}
          setComponentsConfigurationState={setComponentsConfigurationState}
        />

        <div className="gridContainer">
          {dataToDisplay.map((singleMessage, index) => (
            <React.Suspense fallback={<p>Loading</p>}>
              <Route
                path="/"
                exact
                render={() => (
                  <>
                    {currentAddvertisementConfig.includes(index + 1) && (
                      <AdvertisementComponent
                        key={Math.floor(Math.random() * 1000)}
                        horizontalVersion={horizontalAdvertisement}
                      />
                    )}
                    <FirstTypeOfComponent
                      index={index}
                      configuration={componentsConfigurationState}
                      {...singleMessage}
                      key={singleMessage.objectId}
                    />
                  </>
                )}
              />
              <Route
                path="/second"
                exact
                render={() => (
                  <>
                    {currentAddvertisementConfig.includes(index + 1) && (
                      <AdvertisementComponent
                        key={Math.floor(Math.random() * 1000)}
                        horizontalVersion={horizontalAdvertisement}
                      />
                    )}
                    <SecondTypeOfComponent
                      index={index}
                      key={singleMessage.objectId}
                      configuration={componentsConfigurationState}
                      {...singleMessage}
                    />
                  </>
                )}
              />
            </React.Suspense>
          ))}
        </div>
      </Router>
    </div>
  );
}

export default App;
