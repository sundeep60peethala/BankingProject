import React, { useState } from 'react'

const FormRadioButton:React.FC = () => {

    const [selectedradio, setSelectedRadio] = useState<string>();
      const handleRadio =(e:React.ChangeEvent<HTMLInputElement>) =>{
                  //console.log(e.target.value); 
                  setSelectedRadio(e.target.value);
      }

  return (
      <>
    <div className="form-group col-md-12">
    <label className="font-weight-bold fw-bold">Gender : </label>
    <span className="font-weight-bold ms-lg-2" ><input type="radio" name="gender" id="male" value="Male" onChange={handleRadio}/> Male </span>
    <span className="font-weight-bold ms-lg-1" ><input type="radio" name="gender" id="female" value="FeMale" onChange={handleRadio} /> Female </span>
    <span className="font-weight-bold ms-lg-1" ><input type="radio" name="gender" id="others" value="Others" onChange={handleRadio} /> Others </span>
  </div>
  {/* <div>
      <p>{selectedradio}</p>
      </div> */}
    </>
  )
}

export default FormRadioButton;