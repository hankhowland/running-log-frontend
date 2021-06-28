import styled from "styled-components"

const WeekCompact = ({ week }) => {
    return (
        <WeekCont>
            week of <b>{week.startDate}</b>:<br/>
            mon: {week.mon}<br/>
            tue: {week.tues}<br/>
            wed: {week.wed}<br/>
            thu: {week.thurs}<br/>
            fri: {week.fri}<br/>
            sat: {week.sat}<br/>
            sun: {week.sun}<br/>
            mon: {week.mon}<br/>
        </WeekCont>
    )
}

export default WeekCompact


const WeekCont = styled.div`
    font-weight:normal;
    font-size:14px;
    margin-bottom: 30px;
    line-height: 30px;
    border:1px solid black;
    padding: 10px;
`