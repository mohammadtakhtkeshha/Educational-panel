import {Authorized} from "./infrastructure";
import { Layout} from "antd";
import Login from "./infrastructure/unauthorized/login/Login";

const { Content } = Layout;


function App() {
  return (
        <>
        
        {/* <Authorized/> */}
        <Login/>
        {/* </Co/ntent> */}
 
        </>
            
 


  );
}

export default App;
