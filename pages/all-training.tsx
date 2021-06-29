import styled from 'styled-components'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useQuery, useMutation, gql } from '@apollo/client';
import WeekCompact, { Week } from '../components/WeekCompact'
const GET_WEEKS = gql`
    query getWeeks {
        weeks {
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
`

const DELETE_WEEK = gql`
        mutation addWeek($startdate: String) {
            deleteWeek(startdate: $startdate)
        }
    `;


const AllTraining = () => {
    const { loading, error, data } = useQuery(GET_WEEKS);
    const [weeks, setWeeks] = useState([])
    useEffect(() => {
        if (data) {
            setWeeks(data.weeks)
        }
    }, [data])


    
    const [deleteWeek] = useMutation(DELETE_WEEK);

    if (loading) return 'loading...';

    const deleteOnClick = function(startDate: String) {
        deleteWeek({variables: { startdate: startDate }});
        var newWeeks = weeks.filter(function( obj: Week ) {
            return obj.startDate !== startDate;
        });
        setWeeks(newWeeks)
    }
    return (
        <AllTrainingCont>
            <h3>All Training:</h3>
            {weeks.map((week: Week) => {
                return (
                    <>
                        <WeekCompact week={week} key={week.startDate} />
                        <div style={{marginBottom: '50px'}}>
                            <DeleteLink onClick={(e) => deleteOnClick(week.startDate)}>delete week ^^</DeleteLink>
                        </div>
                    </>
                )
            })}
            <div>
                <Link href="/">back to home page &gt;&gt;</Link>
            </div>
        </AllTrainingCont>
        
    )
}

export default AllTraining

const AllTrainingCont = styled.div`
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: auto;
    padding: 20px;
    width: 60%;
`
const DeleteLink = styled.a`
    color: red;
`