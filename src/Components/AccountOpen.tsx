import React, {useState } from 'react';
import FormRadioButton from '../Common/FormRadioButton';
import {PasswordStrength} from '../Common/PasswordStrength'


interface Istate {
  password : string;
}

const AccountOpen:React.FC = () => {

  const [userInfo, setuserInfo] = useState<Istate>({
    password: '',
  });
  
  const handleChangePassword = (e:React.ChangeEvent<HTMLInputElement>):void => {
    //let password  = e.target.value;
    //console.log(password);
    setuserInfo({
      ...userInfo,
      password:e.target.value
    });
  }
  return (
    <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header bg-secondary text-black">
                  <h4>Open Account</h4>
                  <hr className="bg-white border-3 border-top border-white"></hr>
                  <form>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">UserName</label>
                      <input type="text" className="form-control" placeholder='UserName' name="UserName" />
                    </div>
                    <div className="form-group mt-2">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email</label>
                      <input name="email" className="form-control" placeholder='Email' />
                    </div>
                    <div className="form-group mt-2">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Passowrd</label>
                      <input type="text" className="form-control" placeholder='Passowrd' name="Passowrd" onChange={handleChangePassword} />
                      <span>
                        <PasswordStrength password={userInfo.password} />
                      </span>
                    </div>
                    <div className="form-group mt-2">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">ConfirmPassowrd</label>
                      <input type="text" className="form-control" placeholder='ConfirmPassowrd' name="ConfirmPassowrd" />
                    </div>
                    <div className="form-row mt-3">
                      <FormRadioButton />
                    </div>
                    <button type="submit" className="btn btn-dark fw-bold mt-4">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
    </div>
  );
};

export default AccountOpen;

