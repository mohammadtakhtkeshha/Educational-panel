import React from "react";
import logo from "../../../assest/img/logo.jpg";
import {
  Input,
  Col,
  Row,
  Button,
  Divider,
  Typography,
  Checkbox,
  Image,
  Space,
  Layout,
} from "antd";
const { Title, Paragraph, Text, Link } = Typography;
const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

const centerStyle = {
  width: "80%",
  background: "red",
};
const contentStyle = {
  textAlign: "center",
  // heighth:"100vh",
  minHeight: "93vh",
  // lineHeight: '120px',
  color: "#fff",
  backgroundColor: "#108ee9",
};
export default function Login() {
  return (
    <Layout style={contentStyle}>
      <Row justify="center">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Row justify="center" align="middle" style={{ height: "100vh" }}>
            <div style={centerStyle}>
              <Row style={{ textAlign: "left" }}>
                <Col xs={24}>
                  <Title>Login</Title>
                  <Paragraph>
                    see your growth and get consulting support!
                  </Paragraph>
                </Col>
              </Row>
              <Row justify="center">
                <Col xs={24} sm={4} md={6} lg={8} xl={12}>
                  <Space.Compact block>
                    <Input
                      placeholder="sing in with Google"
                      style={{ borderRadius: "15px" }}
                    />
                  </Space.Compact>
                </Col>
              </Row>
              <Row justify="center">
                <Col xs={24}>
                  <Divider>or sing in with Email</Divider>
                </Col>
              </Row>
              <Row justify="center">
                <Col xs={24} sm={4} md={6} lg={8} xl={12}>
                  <Text>Email*</Text>
                  <Input
                    placeholder="rtl@websaite.com"
                    style={{ borderRadius: "15px" }}
                  />

                  <Text>password*</Text>
                  <Input
                    placeholder="Min. 8 character"
                    style={{ borderRadius: "15px" }}
                  />
                </Col>
              </Row>

              <Row justify="space-between">
                <Col xs={12}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
                <Col xs={12}>
                  <Link>forget password</Link>
                </Col>
              </Row>
              <Row justify="center">
                <Col xs={24} xl={12}>
                  <Input
                    placeholder="Min. 8 character"
                    style={{ borderRadius: "15px", background: "blue" }}
                  />
                </Col>
              </Row>
              <Col xs={12}>
                <Text>not registered yet?</Text>
                <Link>create an Account</Link>
              </Col>
              <Col xs={24} xl={12}>
                <Text>@2020 Felix All rights reserved</Text>
              </Col>
            </div>
          </Row>
        </Col>

        <Col
          style={{ background: "red" }}
          xs={0}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Image width={"100%"} height={"100vh"} src={logo} />
        </Col>
      </Row>
    </Layout>
  );
}
