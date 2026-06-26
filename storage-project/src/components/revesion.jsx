//component life cyccle
//component created -> component mounted -> update -> unmount

//useeffect 
//types of use effect
//run once-> empty dependency
//run every time -> runs every time
//runs on specific stage -> with dependency


//form handelling
// const [name,setName]=useState("");

// <input
// value ={name}
// onChange={(e)=> setName(e.target.valeu)}/>

//const [form , setForm]=useState({
// name:"",
// email:" "})

// setForm({
//     ...form,
//     name:e.target.value,
//     email:e.target.value
// })

//conditinal rerendenring
// {islogin? <dashboard/>: <login/>}

// const student=["ram","sham","lakshman"];

// {
//     student.map((s,index)=>
//     <h3 key={index}>{s}</h3>)
// }

// useEffect(()=>{
//     axios.get("localhost:8081/hello")
//     .then((res)=>{
//         setData(res.data)
//     })
//      console.log(res.data);

// },[])

//component load -> useeffectruns-> api call-> resp comes
// ->store in state -> reneder ui

//router dom
//<brouserrouter>
//routes -> <route  path="/" elemnt ={<home/>} </routes>

//const inputRef =  useRef()

// inputref.current.focus()

//redux


//component ->dispactch-> action-> reducer->-> store -> useselector


//open app-> router open -> authenticvation -> use effect
//api call backend -> data store redux/state -> list render 
//condition -> user fills form -> curd operation
//data saved -> local storage -> context api/redux



//login -> admin -> user 
//admin dashboard -> admin can handels user 
//user -> apply ad post update 