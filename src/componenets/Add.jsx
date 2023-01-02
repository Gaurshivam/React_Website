import { Tooltip, Box, styled, Modal, Typography, Avatar, TextField, ButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Stack } from '@mui/system';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})


const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip onClick={e => setOpen(true)}
                title="Delete"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 }
                }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={300} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={8}>
                    <Typography variant='h6' color="gray" textAlign="center">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar alt="Trevor Henderson"
                            src="https://media.istockphoto.com/id/1168966537/photo/a-man-looking.jpg?b=1&s=170667a&w=0&k=20&c=Dxa_ufWQ0TE8ux_wkxcycNnl4P1Gw-rPSnlarEwxwoY="
                            sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant="span">
                            Shivam Gaur
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's in your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={3} mb={3}>
                        <EmojiEmotionsIcon color='primary' />
                        <ImageIcon color='secondary' />
                        <VideoCameraBackIcon color='success' />
                        <PersonAddIcon color='error' />
                    </Stack>
                    <ButtonGroup 
                    fullWidth
                    variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}>
                        
                        <DateRangeIcon /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>



        </>
    )
}

export default Add
