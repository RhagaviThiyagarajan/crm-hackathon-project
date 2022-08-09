import logo from '../images/crm-logo.png'
import { useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddIcon from '@mui/icons-material/Add';

export function Nav()
{
    const navigate=useNavigate()
return(
    <Nav className="nav">
       <div className="logo-container">
        <img src={logo} alt="logo"/>
       </div>
       
<div className="controls-container">
    <div className="icon" onClick={()=>navigate('/ticket')}><AddIcon/></div>
    <div className="icon"  onClick={()=>navigate('/')}><ArrowBackIosNewIcon/></div>

 

</div>
</Nav>
)
}