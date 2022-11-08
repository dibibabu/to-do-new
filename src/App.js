 
import { useState } from 'react';
import './App.css';
import InputArea from './components/inputArea';
import TodoItems from './components/todoItems';

function App() {
  const [items, setitems] = useState([])
  const addItems=(inputText)=>{

    setitems((prevItems)=>{
      return[...prevItems,inputText]

    })

  }
  console.log(items);
 return(
    <div className="container">
      <div className='heading'>

        <h1>
          toDo list
        </h1>
       <InputArea addItems={addItems}/>

      </div>
      <ui>
        {items.map((item,index)=>{
          return(
            <TodoItems key={index} text={item}/>
          )
        })}
      </ui>
   
    </div>
  );
}

export default App;
