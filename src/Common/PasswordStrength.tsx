import React from 'react';
import zxcvbn from 'zxcvbn';

interface Iprops {
  password  : string;
}

export const PasswordStrength:React.FC<Iprops> = ({password}) => {

    const testResult = zxcvbn(password);
    //console.log(testResult);
    const num = testResult.score * 100/4;
    //console.log(num);
    

    const funcProgressColor = () => {
        switch(testResult.score) {
          case 0:
            return 'none';
          case 1:
            return '#EA1111';
          case 2:
            return '#FFAD00';
          case 3:
            return '#9bc158';
          case 4:
            return '#00b500';
          default:
            return 'none';
        }
      }

      const createPassLabel = () => {
        switch(testResult.score) {
          case 0:
            return '';
          case 1:
            return 'Weak';
          case 2:
            return 'Fair';
          case 3:
            return 'Good';
          case 4:
            return 'Strong';
          default:
            return '';
        }
      }

    const passwordcolor = () =>({
        width: `${num}%`,
        background: funcProgressColor(),
        height: '7px'
    })

  return (
      <>
        <div className="progress mt-1" style={{height: '7px'}}>
            <div className="progress-bar" style={passwordcolor()}> </div>
        </div>
        <p style={{color: funcProgressColor()}} >{createPassLabel()}</p>
    </>
  )
}
