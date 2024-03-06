import { useState } from "react";
import "./App.css";
import Map from "./components/map";
import Menu from "./components/menu";

import { WarningTwoTone } from "@ant-design/icons";

import { Button, Alert, Space } from "antd";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="App">
      <Map />
      {!showAlert && (
        <div className="button-wrapper">
          <Button
            type="primary"
            size="Large"
            style={{
              zIndex: 999,
              padding: "50px",
              fontSize: "1.7em",
            }}
            danger
            onClick={() => {
              setShowAlert(true);
            }}
          >
            <WarningTwoTone />
            Emergency
          </Button>
        </div>
      )}
      {showAlert && (
        <div className="alert-wrapper">
          <Alert
            message="Help is on the way !"
            style={{ minWidth: 500 }}
            description="*We are contacting the responsible authorities ....."
            type="warning"
            showIcon
            action={
              <Space direction="vertical">
                <Button
                  size="Large"
                  danger
                  type="primary"
                  onClick={() => setShowAlert(false)}
                >
                  Decline
                </Button>
              </Space>
            }
          />
        </div>
      )}
      <Menu />
    </div>
  );
}

export default App;
//! Lifting up state and passing down props pending
