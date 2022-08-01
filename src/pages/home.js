import { Button, Grid, Card } from "@mui/material";
import Table from "../components/Table";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Navbar from "../components/Layout/Navbar";
import MainLayout from "../components/Layout/MainLayout";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Home() {

    return (
        <>
            <MainLayout>
                <Grid container>
                    <Grid item xs={12} md={6}>
                    {/* <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <Item>xs=8</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item>xs=4</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item>xs=4</Item>
                                </Grid>
                                <Grid item xs={8}>
                                    <Item>xs=8</Item>
                                </Grid>
                            </Grid>
                        </Box> */}
        
                    </Grid>
                    <Grid>
                        
                    </Grid>

                </Grid>

            </MainLayout>
        </>

    )
}