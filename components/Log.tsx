import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useQuery, gql, useMutation } from '@apollo/client';

const GET_LOG= gql`
  query logQuery {
    text(name: "log")
  }
`;

const Log = () => {
    const { loading, error, data } = useQuery(GET_LOG);
    const [log, setLog] = useState("no data loaded");
    useEffect(() => {
        if (data) {
            setLog(data.text)
        }
    }, [data])
    
    const EDIT_LOG = gql`
        mutation updateText($cont: String) {
            updateText(name: "log", cont: $cont)
        }
    `;
    const [editLog] = useMutation(EDIT_LOG);
    
    return (
        <LogContainer
            onKeyPress={(e) => {if (e.key == "Enter") {editLog({variables: { cont: log}})}}} 
            value={log} 
            onChange={(e) => setLog(e.target.value)}
            rows={50}
            cols={70} />
    )
}

export default Log;

const LogContainer = styled.textarea`
  border:none;
  background-color: #f8fcfd;
`