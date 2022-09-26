// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import {List, ListItem, Divider, Typography, Avatar, ListItemAvatar, ListItemText} from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    if (Array.isArray(data)) {
        return (
            <List sx={{ width: '100%', maxWidth: 650, bgcolor: '#BEDDDD', marginLeft: 12 }}>
                { data.map((todo, index) => {
                    return (
                        <ListItem key={index} divider>
                            <ListItemAvatar>
                                <Avatar
                                src={todo.photo}
                                sx={{ width: 65, height: 65 }}
                                >
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                            style={{marginLeft:'1em'}}
                            primary={todo.name}
                            secondary={
                              <div>
                                <Typography>{todo.phone}</Typography>
                                <Typography>{todo.email}</Typography>
                              </div>
                            } />
                        </ListItem>
                    );
                })}
            </List>
        );
    } else {
        return (
            <List sx={{ width: '100%', maxWidth: 650, bgcolor: '#DBF6F0', marginLeft: 12 }}>
                <ListItem key={'0'} divider>
                    <ListItemAvatar>
                        <Avatar src={data.photo}>
                            <ImageIcon />
                            {/* <img /> */}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={data.name} secondary={
                        <div>
                        <div>{data.phone}</div>
                        <div>{data.email}</div>
                        </div>
                    } />
                </ListItem>
            </List>
        );
    }
};

export default Contact;
