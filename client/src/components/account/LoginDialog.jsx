import {useContext} from 'react'
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material"
import { qrCodeImage } from "../../constants/data";
import {GoogleLogin} from '@react-oauth/google';
import  { jwtDecode } from 'jwt-decode';
import { AccountContext } from '../../context/AccountProvider';


const QRCode = styled('img')(
    {
        height: 264,
        width: 264,
        margin: '50px 0px 0px 50px'
    }
)

const Title = styled(Typography)`
font-size:26px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px
`
const StyledList = styled(List)`
& > li {
    padding:0;
    margin-top:15px;
   font-size:18px;
   line-height:18px;
   color:#4a4a4a

}
`
const Component = styled(Box)`
display:flex;

 
`

const Container = styled(Box)`
padding:56px 0 0px 56px
`

const dialogStyle = {
    height: '95%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overFlow: 'hidden'
}


const LoginDialog = () => {
const {setAccount} = useContext(AccountContext)

    const onLoginSuccess =(res)=>{

const decoded = jwtDecode(res.credential);
setAccount(decoded)
    }

    const onLoginError=(res)=>{
        console.log("Login Failed",res);
    }


    return (

        <Dialog open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Title>
                        To use Whatsapp on Your computer:
                    </Title>
                    <StyledList>
                        <ListItem>1. Open Whatsapp on your phone</ListItem>
                        <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                        <ListItem>3. Tap on link a device. </ListItem>
                        <ListItem>3. Point your phone to this screen to capture the QR code </ListItem>


                    </StyledList>
                </Container>
                <Box style={{position:'relative'}}>

                    <QRCode src={qrCodeImage} alt="QR CODE" />
<Box style={{position:'absolute', top:'50%',transform:'translateX(40%)'}}>
    <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError}/>
</Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog