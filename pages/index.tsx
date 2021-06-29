import Head from 'next/head'
import styled from 'styled-components'
import Goals from '../components/Goals'
import Log from '../components/Log'
import Link from 'next/link'
import ThisWeek from '../components/ThisWeek'

export default function Home() {
  return (
      <Outer>
        <SubHeaderL>
          <h3>This week&apos;s training</h3>
          <ThisWeek />
          <div>
            <Link href="/add-training">add training &gt;&gt;</Link>
          </div>
          <br/>or <br/><br/>
          <div>
            <Link href="/all-training">see upcoming weeks &gt;&gt;</Link>
          </div>
        </SubHeaderL>
        <Wrap>
          <h1>Running Log</h1>
          <Log/>
        </Wrap>
        <SubHeaderR>
          <h3>Goals</h3>
          <Goals />
        </SubHeaderR>
      </Outer>
  )
}

const Outer = styled.div`
  display:flex;
`

const SubHeaderL = styled.div`
  flex: 1.5;
  padding: 20px; 
  font-weight: 800; 
  letter-spacing: .12rem;
  background-color:white;
`

const SubHeaderR = styled.div`
  flex: 1;
  padding: 20px; 
  font-weight: 800; 
  letter-spacing: .12rem;
  background-color:white;
`

const Wrap = styled.div`
  flex: 3;
  height: 3000px;
  background-color: #f8fcfd;
  box-shadow: inset 0 0 10px #000000;
  padding: 30px;
`;