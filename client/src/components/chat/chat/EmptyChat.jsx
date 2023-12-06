import { Box, Typography , styled, Divider} from '@mui/material'
import { emptyChatImage } from '../../../constants/data'

const Component = styled(Box)`

background:#f8f9fa;
padding:30px 0px;
text-align:center;
height:100%;

`;
const Container = styled(Box)`
padding:0px 200px;
`;

const Image = styled('img')({
width:400,
marginTop:100,

})

const Title = styled(Typography)`
font-size:32px;
margin: 25px 0 10px 0;
font-family:inherit;
font-weight:300;
color:#41525d
`
const SubTitle = styled(Typography)`
font-size:14px;
font-family:inherit;
font-weight:400;
color:#667781
`
const StyledDivider = styled(Divider)`
margin:40px 0px;
opacity:0.4;

`

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="image" />
        <Title>Whatsapp Web</Title>
        <SubTitle>Now send and receive messages without keeping your phone online.</SubTitle>
        <SubTitle> Use WhatsApp on upto 4 linked devices and one phone at the same time.</SubTitle>
        <StyledDivider/>
      
      </Container>
    </Component>
  )
}

export default EmptyChat