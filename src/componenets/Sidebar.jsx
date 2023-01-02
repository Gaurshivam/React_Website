import React from 'react'
import { Box,List,Switch ,ListItem,ListItemButton,ListItemText,ListItemIcon  } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const Sidebar = ({mode,setMode}) => {
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none", sm:"block"}}}>
    <Box position="fixed">
    <List>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#home">
              <ListItemIcon >
              <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#simple-list">
              <ListItemIcon >
              <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Page" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#simple-list">
              <ListItemIcon >
              <GroupIcon  />
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#simple-list">
              <ListItemIcon >
              <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#simple-list">
              <ListItemIcon >
              <Diversity3Icon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#simple-list">
              <ListItemIcon >
              <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#simple-list">
              <ListItemIcon >
              <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#simple-list">
              <ListItemIcon >
              <ModeNightIcon />
              </ListItemIcon>
              <Switch onClick={e=>setMode(mode==="light" ? "dark" :"light")}/>
            </ListItemButton>
          </ListItem>
          </List>
      </Box>
    </Box>
  )
}

export default Sidebar
