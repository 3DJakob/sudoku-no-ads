export type CellValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type BoardRow = [
  CellValue, CellValue, CellValue,
  CellValue, CellValue, CellValue,
  CellValue, CellValue, CellValue
]

export type Board = [
  BoardRow,
  BoardRow,
  BoardRow,
  BoardRow,
  BoardRow,
  BoardRow,
  BoardRow,
  BoardRow,
  BoardRow
]

export const generateEmptyBoard = (): Board => {
  const emptyBoard = []
  for (let i = 0; i < 9; i++) {
    const emptyRow = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    emptyBoard.push(emptyRow)
  }
  return emptyBoard as Board
}

export const getRow = (board: Board, row: number): BoardRow => {
  return board[row]
}

export const getColumn = (board: Board, column: number): BoardRow => {
  const columnValues = []
  for (let i = 0; i < 9; i++) {
    columnValues.push(board[i][column])
  }
  return columnValues as BoardRow
}

export const isValid = (board: Board, row: number, col: number, num: CellValue): boolean => {
  // check if row is valid
  if (getRow(board, row).includes(num)) {
    return false
  }

  if (getColumn(board, col).includes(num)) {
    return false
  }

  // check if box is valid
  const boxRow = Math.floor(row / 3) * 3
  const boxCol = Math.floor(col / 3) * 3
  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (board[i][j] === num) {
        return false
      }
    }
  }

  return true
}

// const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const generateBoard = (): Board => {
  const empty = generateEmptyBoard()
  let isInvalid = false

  // loop all cells
  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      const possibleNumbers: CellValue[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

      // generate random number
      const shuffledPossible = possibleNumbers.sort(() => Math.random() - 0.5)

      let r = 0
      while (!isValid(empty, row, column, shuffledPossible[r]) && r < 9) {
        r++
      }
      if (shuffledPossible[r] == null) {
        // console.log('no valid number found')
        isInvalid = true
        break
      } else {
        empty[row][column] = shuffledPossible[r]
      }
    }
  }

  if (isInvalid) {
    return generateBoard()
  }

  return empty
}
