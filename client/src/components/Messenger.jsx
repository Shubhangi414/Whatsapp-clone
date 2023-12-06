
import { AppBar, Box, Toolbar, styled } from '@mui/material';
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";
import LoginDialog from "./account/LoginDialog";

const Component = styled(Box)`
  height: 100vh;
  background-color: #DCDCDC;
`;

const LoginHeader = styled(AppBar)`
  height: 225px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const ChatHeader = styled(AppBar)`
  height: 125px;
  background-color: #00A884;
  box-shadow: none;
`;


const Messenger = () => {
  const {account} = useContext(AccountContext);

  return (
    <Component>
      {account ? 
      <>
          <ChatHeader>
            <Toolbar></Toolbar>
          </ChatHeader>
        <ChatDialog />
      </>
      
       : 
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      }
    </Component>
  );
};

export default Messenger;