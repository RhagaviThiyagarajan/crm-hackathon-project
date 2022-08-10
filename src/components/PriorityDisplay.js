import StarIcon from '@mui/icons-material/Star';
export function PriorityDisplay({priority})
{
return(
    <div className="PriorityDisplay">
        <div className="star-container">
            <h3 style={{color:priority>=1 ? 'rgb(253,253,150)':''}}><StarIcon/></h3>
            <h3 style={{color:priority>=2 ? 'rgb(253,253,150)':''}}><StarIcon/></h3>
            <h3 style={{color:priority>=3 ? 'rgb(253,253,150)':''}}><StarIcon/></h3>
            <h3 style={{color:priority>=4 ? 'rgb(253,253,150)':''}}><StarIcon/></h3>
            <h3 style={{color:priority>=5 ? 'rgb(253,253,150)':''}}><StarIcon/></h3>

        </div>
    </div>
)
}