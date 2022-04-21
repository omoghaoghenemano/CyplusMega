import React,{useState} from 'react'
import { AppBar,Typography,Link,Box, ListItemText  } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useStyles from './styles'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const classes = useStyles()
  return (
    <div>
        <AppBar className={classes.root}  >
            <div className='navbar__container'>
               <Link className={classes.link}  > <Typography variant='body1'>Trending</Typography></Link>
            <Link  className={classes.link}  ><Typography variant='body1'>Houses/Rent</Typography></Link>
            <Link className={classes.link} > <Typography  variant='body1'>Best Sellers</Typography></Link>
            
            <Link onClick={()=>{
                setOpen(true)
            }} className={classes.link}>Help  <KeyboardArrowDown
                  sx={{
                  mr:3,
                  top:"31.1%",
                  position:"absolute",
                  
                    opacity: 2,
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                  }}
                /></Link>
        
            </div>
        </AppBar>
    </div>
  )
}