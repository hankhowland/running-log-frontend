import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components'
import WeekCompact from './WeekCompact';

function getPreviousMonday()
{
    var date = new Date();
    var day = date.getDay();
    var prevMonday = new Date();
    if(date.getDay() == 0){
        prevMonday.setDate(date.getDate());
    }
    else{
        prevMonday.setDate(date.getDate() - (day-1));
    }
    return prevMonday;
}
const prevMonday = getPreviousMonday();
const dateStr = `${prevMonday.getMonth()}/${prevMonday.getDate()}/${prevMonday.getFullYear()}`

const GET_WEEK = gql`
  query getWeek {
    week(startdate: "${dateStr}") {
            startDate
            mon
            tues
            wed
            thurs
            fri
            sat
            sun
        }
    }
`;

const ThisWeek = () => {
    const { loading, error, data } = useQuery(GET_WEEK);
    if (loading) {return <div>loading..</div>}
    if (data) {
        return <WeekCompact week={data.week} />
    } else {
        return <div>no data</div>
    }
}

export default ThisWeek;