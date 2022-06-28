import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

function CalendarForm() {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
    }
    return (
        <div>
            <Calendar
                value={dateState}
                onChange={changeDate}
                
            />
  
            {/* <p>Current selected date is <b>{moment(new Date()).format('MMMM Do YYYY')}</b></p> */}

            <style jxs="true" global="true">{`
                
            .react-calendar {
                width: 100%;
                max-width: 100%;
                background: white;
                border: none !important;
                font-family: Kanit; 
           
              
            `}</style>
        </div>
    )
}

export default CalendarForm