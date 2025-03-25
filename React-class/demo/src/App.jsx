import './App.css'
import Example from './Example'
import style from './myStyle.module.css'


function App() {
  
  let subject = 'React'

  const clickfun =()=>{
    alert("without aragment")
  }

  const clickfun2 =(empname)=>{
    console.log(empname);
    
  }

  const clickfun3 =()=>{
    document.getElementById("demo").innerHTML = "I have Angular";
  }


  return (
    <>
     <h1 >React </h1>
     <h4>{subject}</h4>
     <h2 style={{color:`red`, backgroundColor:'yellow', textAlign:'center'}} >React </h2>
     <h3 className={style.reactStyle}>New color</h3>
     <button className={style.reactStyle} onClick={clickfun}>Click Me</button>
     <button className={style.reactStyle} onClick={()=>{clickfun2('steev')}}>Click me me</button>
     <button onClick={clickfun3}>Change name</button>
     <h1 id='demo'> I have React </h1>

     <Example sub={subject}/>
     
      
    </>

  )
} 

export default App


