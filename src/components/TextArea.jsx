import React, { useState } from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';

export default function TextArea(props) {
    const [text,setText]=useState("")
    const [savedText,setSavedtext]=useState("Your text ")
    function handleOnchange(e)
     {
        setText(e.target.value)
    }
    function handleonupClick()
    {
        let newText=text.toUpperCase()
        setText(newText)
    }
    function handleonloClick()
    {
        let newText=text.toLowerCase()
        setText(newText)
    }
    function handleonDel()
    {
      setText("")
      setSavedtext("")
    }
    function handleSave(){
      setSavedtext(text)
      setText("")
    }
  return (
  <>
    <div>
     <div className="mb-3" style={{color: props.mode === 'light' ? 'black' : 'white' }}>
       <h1 >Edit Your text here..</h1>
       <span className=''>text conatins {text.replace(/\s/g, "").length} charcters and {text.split(" ").filter((ele)=>{return ele.length !== 0}).length } words</span>
       <textarea className="form-control mb-3" onChange={handleOnchange} value={text} id="exampleFormControlTextarea1"  rows="8"></textarea>
       <button className="btn btn-outline-primary" onClick={handleonupClick}><i className="fa-regular fa-u"></i></button>
       <button className="btn btn-outline-primary mx-3" onClick={handleonloClick}><i className="fa-regular fa-l"></i></button>

       <button className="btn btn-outline-primary"  onClick={handleonDel}><i className="fa-sharp fa-solid fa-trash"></i></button>
       <button className="btn btn-outline-primary mx-3"  onClick={handleSave}>save</button>



    </div>
    <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white' }}>
      <h3>Your text summary</h3>
      <p>{savedText}</p>
      

    </div>
</div>
</>
  );
}
