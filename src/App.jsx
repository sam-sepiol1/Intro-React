import './App.css'
import List from './TodoList'
import Header from './Header'
import Form from './Form'


function App() {


  return (
    <>
      <Header></Header>

      <div className='form'> 
      <Form></Form>
      </div>
      
      <List></List>
    </>
  )
}

export default App
