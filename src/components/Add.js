import { AddBox, CalendarMonthSharp, EmojiEmotions, Image, LocalOffer, People, VideoFile } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'

function Add() {
    const [open, setOpen] = useState(false)

    const StyledModal = styled(Modal)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    })
    const UserBox = styled(Box)({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px'
    })
    return (
        <>
            <Tooltip title="Delete" sx={{
                position: 'fixed',
                bottom: 20,
                left: {
                    xs: 10,
                    md: 30
                }
            }}
                onClick={e => setOpen(true)}
            >
                <Fab color="primary" aria-label="add">
                    <AddBox />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={'background.default'} p={3} borderRadius={5}>
                    <Typography variant='h6' color='gray' textAlign='center'>Create post</Typography>
                    <UserBox>
                        <Avatar src='https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/307530415_3364009577216340_2342595607909514401_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=O3vnnDvqz-wAX8BwuzE&_nc_ht=scontent.fhan4-1.fna&oh=00_AT9coyO-f6jztgxElWvKOGV1yK8QMyygfmKamwHer6MCGA&oe=632B2F1A' />
                        <Typography color={'text.primary'} variant='span' fontWeight={500}>DungHQ</Typography>
                    </UserBox>
                    <TextField sx={{ width: '100%' }}
                        multiline
                        maxRows={2}
                        id="standard-helperText"
                        label="DungHQ, What are you thinking?"
                        defaultValue=""
                        helperText=""
                        variant="standard"
                    />
                    <Stack direction='row' gap={1} mt={2} mp={2}>
                        <EmojiEmotions color='error' />
                        <VideoFile color='info' />
                        <Image color='success' />
                        <LocalOffer color='inherit' />
                        <People color='secondary' />
                    </Stack>
                    <ButtonGroup sx={{ width: '100%', margin:'30px 0 0 0' }} variant="contained" aria-label="outlined primary button group">
                        <Button sx={{ width: '80%' }}>Post</Button>
                        <Button sx={{ width: '20%' }}><CalendarMonthSharp /></Button>

                    </ButtonGroup>
                </Box>
            </StyledModal>

        </>
    )
}

export default Add