import { Box, InputBase, styled } from "@mui/material"
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFile from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
  
    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
    
`;

const ClipIcon = styled(AttachFile)`
transform: rotate(40deg)
`

const Footer = () => {
  return (
    <Container>
<EmojiEmotionsOutlinedIcon/>
<ClipIcon />
<Search>
    <InputField placeholder="Type a message"/>
</Search>

<MicIcon/>
    </Container>
  )
}

export default Footer