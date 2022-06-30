import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";
import { useForm } from "react-hook-form";
import {getJiraHistory} from "../../interface/jira/base";

function JiraApp() {
    const [loading, setLoading] = useState(false);
    const [historyList, setHistoryList] = useState([]);
    const { register, handleSubmit } = useForm();

    async function getHistory(data) {
        const getList = await getJiraHistory('NGCPO', data);
        const getListEih = await getJiraHistory('EIH', data);
        const mergeList = getList.concat(getListEih);

        setHistoryList(mergeList);
        setLoading(false);
    }

    const onSubmit = (data) => {
        setLoading(true);
        getHistory(data);
    }

    return(
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 5,
                '& .MuiTextField-root': { m: 1, width: '40ch' },
            }}
            noValidate
        >
            <CssBaseline />

            <Typography component="h1" variant="h5">
                지라 월간보고 추출
            </Typography>

            <SearchForm
                register={register}
            />

            <SearchList
                loading={loading}
                historyList={historyList}
            />
        </Box>
    )
}

export default JiraApp;