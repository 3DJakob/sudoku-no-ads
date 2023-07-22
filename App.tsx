import { Button, StyleSheet, View } from 'react-native'
import { Board, generateBoard } from './lib/board'
import Sudoku from './components/Sudoku'
import { useState } from 'react'

const App: React.FC = () => {
  const [board, setBoard] = useState<Board>(generateBoard())

  return (
    <View style={styles.container}>
      <Sudoku board={board} />
      <Button onPress={() => setBoard(generateBoard())} title='Generate' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
