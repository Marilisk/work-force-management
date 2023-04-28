import { useNavigate } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import c from './../../styles/TopMenu.module.scss'
import { FC, useState } from 'react';
import { Tab, Tabs, } from '@mui/material';
import { tabItemStyles, tabsStyles } from '../../styles/tabsStyles';
//import { Theme } from '@material-ui/core';




const TopMenu: FC = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const navigate = useNavigate()

    return <>
        <div className={c.wrap}>
            <Paper sx={{ mb: '20px' }} >

                <Tabs classes={tabsStyles}
                    value={tabIndex}
                    onChange={(e, i) => setTabIndex(i)} >

                    <Tab classes={tabItemStyles}
                        label={'Табель'}
                        icon={<DescriptionOutlinedIcon fontSize="small" />}
                        onChange={() => navigate('/timesheet/')} />

                    <Tab classes={tabItemStyles}
                        label={'Календарь'}
                        icon={<CalendarMonthOutlinedIcon fontSize="small" />}
                        onChange={() => navigate('/timesheet/calendar')} />

                    <Tab classes={tabItemStyles}
                        label={'Структура'}
                        icon={<CalendarMonthOutlinedIcon fontSize="small" />}
                        onChange={() => navigate('/timesheet/structure')} />

                </Tabs>

            </Paper>

        </div>

    </>
};

export default TopMenu;



