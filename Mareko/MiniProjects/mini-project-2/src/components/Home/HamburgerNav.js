import React, {useState} from "react";

import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

export const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "NZ Public Holidays", href: "/public-holidays-nz" },
    { name: "Entitlements", href: "/workplace-entitlements" },
]

export default function HamburgerNav() {

    const [open, setOpen] = useState(false)

    return(
        <div>

            <IconButton sx={{display: 'flex'}}>
                <MenuIcon sx={{ m: 1.5, fontSize: '45px', color: '#fff', alignItems: 'flex-start' }} onClick={() => setOpen(true)} />
            </IconButton>
        
            
            <SwipeableDrawer anchor="left" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
                <div>
                    <IconButton>
                        <ChevronLeftIcon onClick={() => setOpen(false)}/>
                    </IconButton>
                </div>
                
                <Divider>
                    <List>
                        {navigationLinks.map((item) => (
                            <ListItem>
                                <Link sx={{mr: 1}} color="textPrimary" variant="button" underline="none" href={item.href}>{item.name}</Link>
                            </ListItem>
                        ))}
                    </List>
                </Divider>
            </SwipeableDrawer>
        </div>
    )
}