import React, { useState } from "react";
import "./App.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import getSub from './alert'

const ApiCard = ({ item }) => {

    return (


        <>
            <div className="app" onClick={()=>getSub({item})}>

                <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Id: {item.id} Name:{item.login}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">

                            </Typography>
                        </CardContent>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 100, height: 100, marginLeft: 'auto' }}
                        image={item.avatar_url}
                        alt="User Profile"
                    />
                </Card>
            </div>
        </>

    );
}


export default ApiCard;
