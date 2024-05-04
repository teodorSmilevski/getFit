import {Button, TextField} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import {IconButton} from "@mui/material";
import LockPersonIcon from '@mui/icons-material/LockPerson';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {VisibilityOff} from "@mui/icons-material";
import {useState} from "react";
import { Link } from "react-router-dom";
import CopyrightIcon from '@mui/icons-material/Copyright';
import CustomTextField from "../components/CustomTextField.jsx";
import "./Login.css";

export default function Login(){
    const [isChecked,setIsChecked]=useState(false);//za checkboxot kaj remember me
    const [password,setPassword]=useState("");//ovie dvete se za kaj paswordot
    const [showPassword,setShowPassword]=useState(false);


    const handlePasswordVisibility=()=>{
        setShowPassword(!showPassword);
    }

    const handleCheckbox=event=>{
        setIsChecked(event.target.checked);
    }

    return(
        <div className="login">
            <div className="body_left">
                <img src="https://img.freepik.com/free-vector/green-grunge-background-with-quote_1048-454.jpg?w=740&t=st=1714825230~exp=1714825830~hmac=aaefef5bf214e1f03a7038619d530e662a60ea3e54551d5a1f35470954ce49da" alt="some pic"/>
            </div>
            <div className="body_right">
                <div className="header">
                    <h1>Welcome back!</h1>
                    <p>Get back on track now.</p>
                </div>
                <div className="inputs">
                    <div className="email">
                        <CustomTextField id="input-with-icon-textfield"
                                   label="E-mail"
                                   InputProps={{
                            startAdornment:(
                                <IconButton>
                                        <EmailIcon/>
                                    </IconButton>
                            ),
                                    }}/>
                    </div>
                    <div className="password">
                        <CustomTextField id="input-with-icon-textfield"
                                   type={showPassword ?'text':'password'}
                                   value={password}
                                   onChange={(e)=>setPassword(e.target.value)}
                                   label="Password"
                            InputProps={{
                                startAdornment:(
                                    <IconButton>
                                        <LockPersonIcon/>
                                    </IconButton>
                                ),
                                endAdornment:(
                                    <IconButton
                                    onClick={handlePasswordVisibility}
                                    edge="end"
                                    >
                                        {showPassword ? <VisibilityIcon/> : <VisibilityOff/>}
                                    </IconButton>
                                ),
                            }
                            }
                        />
                    </div>
                    <div className="after_inputs">
                        <div className="remember_me">
                            <label>
                                <input type="checkbox"
                                       checked={isChecked}
                                       onClick={handleCheckbox}/>
                                Remember me!
                            </label>
                        </div>
                        <div className="forgot_password">
                            <Link to="/forgotPassword">Forgot password?</Link>
                        </div>
                    </div>
                    <Button
                    sx={{
                        color:"white",
                        backgroundColor:"#039394",
                        '&:hover':{
                            color:"#039394",
                            borderColor:"#039394"
                        },
                    }}
                    >Login</Button>
                </div>
                <div className="other_login_ways">
                    <h5>Or login using...</h5><br/>
                    <div className="google_facebook">
                    <Button><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="google logo"/>Google </Button>
                    <Button><img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png" alt="facebook logo"/>Facebook </Button>
                    </div>
                </div>
                <div className="no_account">
                    <h5>Don't have an account?</h5>
                    <Link to="/signUp">Sign Up</Link>
                </div>
                <p id="copyright"><CopyrightIcon/>2024 ALL RIGHTS RESERVED</p>
            </div>
        </div>
    )
}