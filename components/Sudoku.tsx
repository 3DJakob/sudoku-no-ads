import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { Board } from '../lib/board'

const Column = styled.View`
  flex-direction: column;
`

const Row = styled.View`
  flex-direction: row;
`

const Cell = styled.View`
  border: 1px solid black;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`

export interface SudokuProps {
  board: Board
}

const Sudoku: React.FC<SudokuProps> = ({ board }) => {
  return (
    <Column>
      {board.map((row, i) => (
        <Row key={i}>
          {row.map((cell, j) => (
            <Cell key={j}>
              <Text style={{ fontSize: 26 }}>{cell}</Text>
            </Cell>
          ))}
        </Row>
      ))}
    </Column>
  )
}

export default Sudoku
