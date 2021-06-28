import styled from 'styled-components'
import { useState } from 'react'
import Link from 'next/link'
import { useMutation, gql } from '@apollo/client';

const AddTraining = () => {
    const [startDate, setStartDate] = useState("")
    const [mon, setmon] = useState("")
    const [tues, settues] = useState("")
    const [wed, setwed] = useState("")
    const [thurs, setthurs] = useState("")
    const [fri, setfri] = useState("")
    const [sat, setsat] = useState("")
    const [sun, setsun] = useState("")

    const ADD_WEEK = gql`
        mutation addWeek($startdate: String, $mon: String, $tues: String, $wed: String, $thurs: String, $fri: String, $sat: String, $sun: String) {
            addWeek(startdate: $startdate, 
                mon: $mon,
                tues: $tues,
                wed: $wed,
                thurs: $thurs,
                fri: $fri,
                sat: $sat,
                sun: $sun
            )
        }
    `;
    const [addWeek] = useMutation(ADD_WEEK);

    const submitTrainingWeek = function() {
        addWeek({variables: { startdate: startDate, mon: mon, tues: tues, wed: wed, thurs: thurs, fri: fri, sat: sat, sun: sun}})
        setmon("")
        settues("")
        setwed("")
        setthurs("")
        setfri("")
        setsat("")
        setsun("")
        setStartDate("")
    }

    return (
        <>
            <AddTrainingCont>
                <h3>add training for week starting on 
                    <input style={{ marginLeft:5}} type="text" value={startDate} placeholder="m/d/yyyy" onChange={(e) => setStartDate(e.target.value)}/>:
                </h3>
                <hr/>
                <div>
                    mon: <input style={{ width:"80%" }} value={mon} type="text" onChange={(e) => setmon(e.target.value)}/>
                </div><br/>
                <div>
                    tues: <input style={{ width:"80%" }} value={tues} type="text" onChange={(e) => settues(e.target.value)}/>
                </div><br/>
                <div>
                    wed: <input style={{ width:"80%" }} value={wed} type="text" onChange={(e) => setwed(e.target.value)}/>
                </div><br/>
                <div>
                    thurs: <input style={{ width:"80%" }} value={thurs} type="text" onChange={(e) => setthurs(e.target.value)}/>
                </div><br/>
                <div>
                    fri: <input style={{ width:"80%" }} value={fri} type="text" onChange={(e) => setfri(e.target.value)}/>
                </div><br/>
                <div>
                    sat: <input style={{ width:"80%" }} value={sat} type="text" onChange={(e) => setsat(e.target.value)}/>
                </div><br/>
                <div>
                    sun: <input style={{ width:"80%" }} value={sun} type="text" onChange={(e) => setsun(e.target.value)}/>
                </div>
                <div>
                    <SubmitButton onClick={submitTrainingWeek}>add</SubmitButton>
                </div>

            </AddTrainingCont>
            <div style={{margin: "auto", width: 200}}>
                <Link href="/">back to home page >></Link>
            </div>
        </>
    )
}

const AddTrainingCont = styled.div`
    margin:auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width:700px;
    height:500px;
    padding:20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color:white;
`

const SubmitButton = styled.div`
    padding:5px;
    font-weight:700;
    color:white;
    background-color:#03a9f4;
    border-radius: 2px;
    width:100%;
    text-align:center;
    margin-top:90px;
`

export default AddTraining