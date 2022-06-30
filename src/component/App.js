import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppRouter from "./AppRouter";
import {Link} from "react-router-dom";

function App() {
    return (
        <Box>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Button component={Link} to="/jira" color="inherit" sx={{ flexGrow: 1 }}>월간보고 조회</Button>
                        <Button component={Link} to="/jiranotion" color="inherit" sx={{ flexGrow: 1 }} herf="/jiranotion">지라 -> 노션 등록</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <AppRouter/>
        </Box>
    );
}

export default App;