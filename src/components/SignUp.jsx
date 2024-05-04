import {Button, IconButton, TextField} from "@mui/material";
import {useState} from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {VisibilityOff} from "@mui/icons-material";
import {Link} from "react-router-dom";
import "./SignUp.css";
import CustomTextField from "./CustomTextField.jsx";


export default function SignUp(){
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const[showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false)


    const showConfirmPasswordVisibility=()=>{
        setShowConfirmPassword(!showConfirmPassword);
    }
    const showPasswordVisibility=()=>{
        setShowPassword(!showPassword);
    }

    return(
        <div className="sign_up">
            <div className="body_left">
                <img src="https://static.vecteezy.com/system/resources/previews/007/642/456/non_2x/fitness-men-on-gym-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-vector.jpg" alt="some pic"/>
            </div>
            <div className="body_right">
                <h1>Create Account</h1>
                <div className="inputs">
                    <CustomTextField
                        className="text_fields"
                        id="name"
                        label="Full Name"
                    />
                    <CustomTextField
                        className="text_fields"
                        id="email"
                        label="Email address"
                    />

                    <CustomTextField
                        className="text_fields"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        label="Password"
                        InputProps={{
                            endAdornment:(
                                <IconButton
                                onClick={showPasswordVisibility}
                                >
                                    {showPassword? <VisibilityIcon/> : <VisibilityOff/>}
                                </IconButton>
                            ),
                        }}
                    />
                    <CustomTextField
                        className="text_fields"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        label="Confirm Password"
                        InputProps={{
                            endAdornment:(
                                <IconButton
                                    onClick={showConfirmPasswordVisibility}
                                >
                                    {showConfirmPassword? <VisibilityIcon/> : <VisibilityOff/>}
                                </IconButton>
                            ),
                        }}
                    />
                    <Button>Create Account</Button>

                </div>
                <h5>Or sign up with...</h5>
                <div className="other_ways">
                    <Button><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="google logo"/>Sign up with Google </Button>
                    <Button><img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png" alt="facebook logo"/>Sign up with Facebook </Button>
                </div>
                <h5>Already have an account?<Link to="/login">Log in</Link></h5>
            </div>

        </div>
    )
}