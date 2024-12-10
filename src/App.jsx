import './App.css'
import {Header, Input, Button, List} from './TodoList'

function App() {


  return (
    <>
      <Header></Header>

      <div className='input-button'> 
      <Input></Input>
      <Button></Button>
      </div>
      
      <List></List>
    </>
  )
}

export default App
