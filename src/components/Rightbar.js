import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { listImg } from '../listImg'
function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/306465413_3364396707177627_4642824127742114403_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=ixvcbSIHzCUAX8wOAr_&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8wY5PrZ_QltvOPRiij6l9H4eFBfzXtTMrbzSg_7J3rkA&oe=632DA241" />
          <Avatar alt="Remy Sharp" src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/306465413_3364396707177627_4642824127742114403_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=ixvcbSIHzCUAX8wOAr_&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8wY5PrZ_QltvOPRiij6l9H4eFBfzXtTMrbzSg_7J3rkA&oe=632DA241" />
          <Avatar alt="Remy Sharp" src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/306465413_3364396707177627_4642824127742114403_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=ixvcbSIHzCUAX8wOAr_&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8wY5PrZ_QltvOPRiij6l9H4eFBfzXtTMrbzSg_7J3rkA&oe=632DA241" />
          <Avatar alt="Remy Sharp" src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/306465413_3364396707177627_4642824127742114403_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=ixvcbSIHzCUAX8wOAr_&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8wY5PrZ_QltvOPRiij6l9H4eFBfzXtTMrbzSg_7J3rkA&oe=632DA241" />
          <Avatar alt="Remy Sharp" src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/306465413_3364396707177627_4642824127742114403_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=ixvcbSIHzCUAX8wOAr_&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8wY5PrZ_QltvOPRiij6l9H4eFBfzXtTMrbzSg_7J3rkA&oe=632DA241" />

        </AvatarGroup>
        <Typography variant='h6' fontWeight={100}>Latest photo</Typography>
        <ImageList sx={{ width: '100%', height:'200px' }} cols={3} rowHeight={100}>
          {listImg.map((item) => (
            <ImageListItem key={item.id} sx={{ overflow: 'hidden' }}>
              <img
                src={`${item.src}`}
                srcSet={`${item.src}`}
                alt={item.id}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mp={2}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
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
        </List>
      </Box>
    </Box >
  )
}

export default Rightbar