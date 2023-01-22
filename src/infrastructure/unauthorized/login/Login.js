import React from "react";
import logo from "../../../assest/img/logo.jpg";
import googleLogo from "../../../assest/img/googleLogo.png";
import spark from "../../../assest/img/spark.png";

import {
  Input,
  Col,
  Row,
 
  Divider,
  Typography,
  Checkbox,
  Image,
  Space,
  Layout,
  Button,
} from "antd";
const { Title, Paragraph, Text, Link } = Typography;
const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

const centerStyle = {
  width: "80%",
  background: "",
};
const contentStyle = {
  textAlign: "center",
  // heighth:"100vh",
  minHeight: "93vh",
  // lineHeight: '120px',
  color: "#fff",
  backgroundColor: "#FFF",
};
export default function Login() {
  return (
    <Layout style={contentStyle}>
      <Row justify="center" >
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Row justify="center" align="middle" style={{ height: "100vh" }}>
            <div style={centerStyle}>
              <Row >

                
                <Col xs={16}>
                <Image width={"50px"} height={"10vh"} src={spark} />
                  <Title style={{fontSize:"25px" ,fontWeight: "bold"}}>Login</Title>
              
                
                </Col>
              </Row>
                <Col xs={24}>
                  <Paragraph style={{color:"5D5977"}}>
                    see your growth and get consulting support!
                  </Paragraph>
                </Col>
               
             
              <Row justify="center">
                <Col xs={24} sm={4} md={6} lg={8} xl={12}>
                 
             <Space 
               direction="vertical"
               style={{
                 width: '100%'
                
               }}
             >
                  <Col xs={24}>

             <Button style={{   width:"100%" , borderRadius:"15px"}}>
              
             <Image width={"40px"} height={"4vh"} src={googleLogo} />
              sign with google</Button>
           
            </Col>
             </Space>
               
                </Col>
              </Row>
              <Row justify="center">
                <Col xs={24}>
                  <Divider style={{color:"#D5D2E1"}}>or sing in with Email</Divider>
                </Col>
              </Row>
              <Row justify="center" style={{display:"flex"}}>
                <Col xs={24} sm={4} md={6} lg={8} xl={12}>
                  <Space  direction="vertical" size="middle"  style={{ display: 'flex' }}>

                  <Text style={{display:'flex'}}>Email*</Text>
                  <Input
                    placeholder="rtl@websaite.com"
                    style={{ borderRadius: "15px" }}
                    />
                    </Space>
                    <Space  direction="vertical" size="middle"  style={{ display: 'flex' }}>
                  <Text style={{display:'flex'}}>password*</Text>
                  <Input
                    placeholder="Min. 8 character"
                    style={{ borderRadius: "15px" }}
                  />
                </Space>
              
                <Checkbox style={{display:"flex" ,marginTop:'10px'}}>Remember me</Checkbox>
                </Col>
              </Row>

              <Row>
                <Col xs={12}  >
              
              {/* <Link style={{display:"flex"}}>forget password?</Link> */}
                  </Col>
              </Row>
              <Row justify="center">
                <Col xs={12}>
                  
                 <Button style={{color:"white" ,marginTop:'20px', background:"#5138EE" , width:"100%" , borderRadius:"15px"}}>Login</Button>
               
                </Col>
              </Row>
                
              <Col xs={24} style={{marginTop:'5%'}}>
                <Text>not registered yet?</Text>
                <Link>create an Account</Link>
              </Col>
                
            
            </div>
            <Col xs={24} xl={12}>
              
              <Text style={{marginTop:'30%'}} >@2020 Felix All rights reserved</Text>
              </Col>
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
