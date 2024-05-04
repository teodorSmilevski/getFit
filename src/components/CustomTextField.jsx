import {styled, TextField} from "@mui/material";


const CustomField =styled(TextField)(({label,className,id,InputProps,type,value,onChange})=>({
        "& .MuiInputLabel-root.Mui-focused":{
            color:"#039394",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ":{
            borderColor:"#039394",
        },


}));


export default function CustomTextField({label,className,id,InputProps,type,value,onChange}){
    return<CustomField className={className} id={id} label={label} InputProps={InputProps}
    type={type} value={value} onChange={onChange}
    />;
}