import React, { useEffect } from "react";
import { Input, Col, Row, Button } from "antd";
import axios from "axios";

const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

export default function Authorized() {
  useEffect(() => {
    const article = {
      identifier: "qadir_yolme",
      password: "12345678",
    };
    // GET request using axios inside useEffect React hook
    const headers = {
      "My-Custom-Header": "application/json",
    };
    axios
      .post("http://localhost:4000/v1/auth/login", article, { headers })
      .then((response) => console.log(response));

    debugger;
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  return (
    <>
      {/* <div
                style={{
                    background: "#fff",
                    height: "90vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Row justify={center} gutter={[32, 24]}>
                    <Col span={24}>
                        <Input />
                    </Col>
                    <Col span={24}>
                        <Input />
                    </Col>

                    <Col span={24}>
                        <Button>send</Button>
                    </Col>
                </Row>
            </div> */}
      {/* <Row justify="center">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Col xs={2} sm={4} md={6} lg={8} xl={10} span={4}>
          <DemoBox value={120}><Input /></DemoBox>
            
          </Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4} span={4}>
            <Input />
          </Col>
        </Col >
        <Col style={{background:"red"}} xs={0} sm={12} md={12} lg={12} xl={12}> <DemoBox value={120}><Input /></DemoBox> </Col>
      </Row> */}
    </>
  );
}
