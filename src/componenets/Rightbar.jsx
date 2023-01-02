import React from 'react';
import { Box, Typography, AvatarGroup, Avatar, ImageList} from "@mui/material";
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant='h6' fontWeight={200}>Online Friends</Typography>
        <AvatarGroup max={6} >
          <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/477151294/photo/smile-girl-at-beach.jpg?b=1&s=170667a&w=0&k=20&c=ED-0JCVCFv_AjX7TZ-YJTh5sUA4D7jBrTsUmiEmtO4Y=" />
          <Avatar alt="Travis Howard" src="https://media.istockphoto.com/id/1074638206/photo/side-view-long-beard-business-man-portrait.jpg?b=1&s=170667a&w=0&k=20&c=qKqps3CvWJBlTY0GfR9LgBfVHHrw2UQfsrEyQy0FNvc=" />
          <Avatar alt="Cindy Baker" src="https://media.istockphoto.com/id/864516870/photo/young-woman-photographing-the-autumn-season.jpg?b=1&s=170667a&w=0&k=20&c=vNF_OOYGXK4_PyMAhZc0FS4JpfVpFfj6ROYAETxdM6g=" />
          <Avatar alt="Agnes Walker" src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=" />
          <Avatar alt="Trevor Henderson" src="https://media.istockphoto.com/id/1168966537/photo/a-man-looking.jpg?b=1&s=170667a&w=0&k=20&c=Dxa_ufWQ0TE8ux_wkxcycNnl4P1Gw-rPSnlarEwxwoY=" />
          <Avatar alt="Trevor Henderson" src="https://media.istockphoto.com/id/1168966537/photo/a-man-looking.jpg?b=1&s=170667a&w=0&k=20&c=Dxa_ufWQ0TE8ux_wkxcycNnl4P1Gw-rPSnlarEwxwoY=" />
          <Avatar alt="Trevor Henderson" src="https://media.istockphoto.com/id/1168966537/photo/a-man-looking.jpg?b=1&s=170667a&w=0&k=20&c=Dxa_ufWQ0TE8ux_wkxcycNnl4P1Gw-rPSnlarEwxwoY=" />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={200} mt={2} mb={2}>Latest Post</Typography>
        <ImageList cols={4}>
          <ImageListItem >
            <img
              src="https://plus.unsplash.com/premium_photo-1661342431791-32cc2802dfed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmYXN0JTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
              alt='img'
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWtmYXN0JTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
              alt='img'
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://media.istockphoto.com/id/1402282467/photo/bowl-of-oatmeal-with-mixed-fruits-topping.jpg?b=1&s=170667a&w=0&k=20&c=C-_USMWe2R470pMPdJjw-wYjBp8jCH__Xwvn4o_pCSo=" 
              alt='img'
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://media.istockphoto.com/id/1040928664/photo/woman-taking-photo-of-breakfast-served-in-cafe.jpg?b=1&s=170667a&w=0&k=20&c=wNXIybS0ARj-o3YU4I-1_xx96r668B2RVcwmlkc5lTo=" 
              alt='img'
            />
          </ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight={200} mt={2} >Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/477151294/photo/smile-girl-at-beach.jpg?b=1&s=170667a&w=0&k=20&c=ED-0JCVCFv_AjX7TZ-YJTh5sUA4D7jBrTsUmiEmtO4Y="/>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://media.istockphoto.com/id/864516870/photo/young-woman-photographing-the-autumn-season.jpg?b=1&s=170667a&w=0&k=20&c=vNF_OOYGXK4_PyMAhZc0FS4JpfVpFfj6ROYAETxdM6g=" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://media.istockphoto.com/id/1168966537/photo/a-man-looking.jpg?b=1&s=170667a&w=0&k=20&c=Dxa_ufWQ0TE8ux_wkxcycNnl4P1Gw-rPSnlarEwxwoY=" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>


      </Box>
    </Box>
  )
}

export default Rightbar
