import React, { useState } from "react";
import { Card, CardActions, Button, CardContent, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = ({ handleClick }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');

    return (
        <>
            <Card sx={{ width: 640, backgroundColor: '#F3F1EB', marginLeft: 10 }}>
                <CardContent>
                    <TextField
                        fullWidth
                        sx={{ mb: 1 }}
                        required
                        id="name"
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <TextField
                        fullWidth
                        sx={{ mb: 1 }}
                        required
                        id="phone"
                        label="Phone"
                        variant="outlined"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                    />
                    <TextField
                        fullWidth
                        sx={{ mb: 1 }}
                        required
                        id="email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <TextField
                        fullWidth
                        required
                        id="pathurl"
                        label="Photo URL"
                        variant="outlined"
                        sx={{ mb: 1 }}
                        value={url}
                        onChange={(e) => {
                            setUrl(e.target.value);
                        }}
                     />
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() => {
                            handleClick(name, phone, email, url);
                            setName('');
                            setPhone('');
                            setEmail('');
                            setUrl('');
                        }}
                        variant="contained"
                        color="secondary">
                        Add New
                        </Button>
                </CardActions>
            </Card>
        </>
    );
}

export default ContactForm;