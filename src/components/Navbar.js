import { Mail, NotificationAdd, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React, { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {

  }

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  })
  const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
  }))
  const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  }))
  const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }))

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography
          variant='h5'
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          DUNGHQ DEV
        </Typography>
        <Pets />
        <Search>
          <InputBase placeholder='Search . . .' sx={{ color: 'black' }} />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <NotificationAdd />
          </Badge>
          <Avatar src='https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/307530415_3364009577216340_2342595607909514401_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=O3vnnDvqz-wAX8BwuzE&_nc_ht=scontent.fhan4-1.fna&oh=00_AT9coyO-f6jztgxElWvKOGV1yK8QMyygfmKamwHer6MCGA&oe=632B2F1A'
            onClick={e => setOpen(true)}

          />
        </Icons>
        <UserBox>
          <Avatar src='https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/307530415_3364009577216340_2342595607909514401_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=O3vnnDvqz-wAX8BwuzE&_nc_ht=scontent.fhan4-1.fna&oh=00_AT9coyO-f6jztgxElWvKOGV1yK8QMyygfmKamwHer6MCGA&oe=632B2F1A' />
          <Typography variant='span'>
            DungHQ
          </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        // anchorEl={anchorRef.current}
        open={open}
        // onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar