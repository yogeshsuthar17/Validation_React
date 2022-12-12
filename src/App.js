import React from "react";
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {name1:"",email:"",mobile:"",select1:"",
                  gender:"",message:"",password:"",cpassword:"",checked:true,error:{},detail:{}}
    
  }
  handelchange=(e)=>
  {
    this.setState({[e.target.name]:e.target.value}) 
  }
  handelchangee=(e)=>
  {
    this.setState({checked:!this.state.checked})
  }
  formvalidation=(e)=>
  { 
    
    const{name1,email,mobile,select1,gender,message,password,cpassword,checkbox}=this.state
    let isvalid = true
    const error = {}
    if(!name1)
    {
      error.name1="Enter name"
      isvalid=false
    }
    else if(name1.length<3)
    {
        error.name1="Enter name with minimum length 3 "
        isvalid=false
    }
    
    if(!email)
    {
      error.email="Enter email"
      isvalid=false
    }
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    {
        error.email="Enter valid email"
    }
    if(!mobile)
    {
      error.mobile="Enter mobile no"
      isvalid=false
    }
    if(mobile.length != 10)
    {
      error.mobile="number should be of 1o digit"
      isvalid=false
    }
    if(!select1)
    {
      error.select1="select your semester"
      isvalid=false
    }
    if(!gender)
    {
      error.gender="select gender"
      isvalid=false
    }
    if(!message)
    {
      error.message="Enter message"
      isvalid=false

  
    }
    if(message.length<5)
    {
      error.message="minimum"
      isvalid=false
    }
  
    
    if(!password)
    {
      error.password="Enter password"
      isvalid=false
    }
    else if(password.length<8)
    {
        error.password=" password length should be 8 and above"
    }
    
    // if(password!=password.match("(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"))
    
    // {
    //   error.passowrd="Passowrd should be contain (A-z , symbol , Number)"
    //   isvalid=true
    // }
    if(!cpassword)
    {
      error.cpassword="Enter confirm password"
      isvalid=false
    }
    if(password!=cpassword)
    {
      error.cpassword="Confirm password not mtach"
      isvalid=false
    }
    if(this.state.checked)
    {
      error.checkbox="Check the box"
      isvalid=false
    }

    this.setState({error})
    return isvalid
  }
  onSubmit=(e)=>
  {
    e.preventDefault()
    const isvalid = this.formvalidation()
 
    if(isvalid)
    {
      console.warn("form data" +this.state.name1+this.state.email+this.state.password+this.state.mobile+this.state.message)
         const detail = {}
    detail.name1 = this.state.name1
    detail.email = this.state.email
    detail.mobile = this.state.mobile
    detail.select1 = this.state.select1
    detail.gender = this.state.gender
    detail.message = this.state.message
    this.setState({detail})
 
      
      this.setState({name1:"",email:"",mobile:"",select1:"",gender:"",message:"",password:"",cpassword:"",checked:"",error:{},})
      
     
    }

  }

  render()
  {
    const{name1,email,mobile,select1,gender,message,password,cpassword,checkbox,error,detail}=this.state

  return (
   <>
   <form onSubmit={this.onSubmit.bind(this)}>
{/*     
   {
      Object.keys(error).map((key)=>{
        return <div style={{color:'red'}} key = {key}>{error[key]}</div>
      })
    } */}
    
    <h1>Register Here</h1>
   Name : <input type="text" name="name1" placeholder='Enter name' value={name1} onChange={this.handelchange.bind(this)} /> &nbsp;<span style={{color:"red"}}>{error.name1}</span><br/><br/>
   {/* <div style={{color:'red'}}>{error.name1}</div> */}
   <br/>
   Email : <input type="text" name="email" placeholder='Enter email' value={email} onChange={this.handelchange.bind(this)} />&nbsp;<span style={{color:"red"}}>{error.email}</span><br/><br/>
   {/* <div style={{color:'red'}}>{error.email}</div> */}
   Mobile : <input type="text" name="mobile" placeholder='Enter mobile no'value={mobile} onChange={this.handelchange.bind(this)} />&nbsp;<span style={{color:"red"}}>{error.mobile}</span><br/><br/>
   {/* <div style={{color:'red'}}>{error.mobile}</div> */}
   Semester : <select name='select1' value={select1} onChange={this.handelchange.bind(this)}>
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>&nbsp;<span style={{color:"red"}}>{error.select1}</span><br/><br/>
    {/* <div style={{color:'red'}}>{error.select1}</div> */}
   Gender : Male: <input type="radio" name="gender" value="male"  onChange={this.handelchange.bind(this)} />
   Female : <input type="radio" name="gender" value="female" onChange={this.handelchange.bind(this)} />&nbsp;<span style={{color:"red"}}>{error.gender}</span><br/><br/>
   {/* <div style={{color:'red'}}>{error.gender}</div> */}
   Message : <textarea rows="4" cols="50" name="message" value={message} placeholder='Enter message' onChange={this.handelchange.bind(this)}></textarea>&nbsp;<span style={{color:"red"}}>{error.message}</span><br/><br/>
   {/* <div style={{color:'red'}}>{error.message}</div> */}
   Password : <input type="password" name="password" placeholder='Enter password' value={password} onChange={this.handelchange.bind(this)} />&nbsp;<span style={{color:"red"}}>{error.password}</span><br/><br/>
   {/* <div style={{color:'red'}}>{error.password}</div> */}
   Confirm : <input type="password" name="cpassword" placeholder='Confirm password'value={cpassword} onChange={this.handelchange.bind(this)} />&nbsp;<span style={{color:"red"}}>{error.cpassword}</span><br/><br/>
   {/* <div style={{color:'red'}}>{error.cpassword}</div> */}
   I Agree <input type="checkbox" name="checkbox" value={checkbox} onChange={this.handelchangee.bind(this)}/>&nbsp;<span style={{color:"red"}}>{error.checkbox}</span><br/><br/>
   {/* <div style={{color:'red'}}>{error.checkbox}</div> */}
   <input type="submit" value="submit"/>
  <br/>
  <br/>
  <div>
    {detail.name1}<br/>
    {detail.email}<br/>
    {detail.mobile}<br/>
    {detail.gender}<br/>
    {detail.select1}<br/>
    {detail.message}<br/>

  </div>
  {/* {this.state.name1}<br/>
  {this.state.email}<br/>
  {this.state.mobile}<br/> */}
  
   </form>
   
   </>
  );
}
}
export default App




// import React from "react";

// class App extends React.Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state={mytxt:"",myary:[]}
//     }
//     onchange=(e)=>
//     {
//         this.setState({mytxt:e.target.value})
//         e.preventDefault()
//     }
//     Add=()=>
//     {
//         let list = this.state.myary
//         list.push(this.state.mytxt)
//         this.setState({mytxt:"",myary:list})
//     }
//     render()
//     {
        
//         return(
//             <>
//             <h1>ToDo List</h1>
//             <input type="text" onChange={this.onchange.bind(this)} placeholder="Enter Task"/>&nbsp;
            

//             {this.state.myary.map((value,index)=>{
            

//                  {index+1}{value}
//             <input type="button" value="Add" onClick={this.Add.bind(this)}/> }
            
            
//             )}
            
            
            
            
//             </>
//         )
//     }
// }
