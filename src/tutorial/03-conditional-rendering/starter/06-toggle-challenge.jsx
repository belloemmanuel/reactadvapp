import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)
  return (
  <>
  <button className="btn" onClick={()=>setShowAlert(!showAlert)}>Toggle</button>
  {showAlert && <Alert/>}
  </>
    )
};

const Alert=()=>{
  return(
    <div className="alert alert-danger">
      <p>hello world</p>
    </div>
  )
}

export default ToggleChallenge;
