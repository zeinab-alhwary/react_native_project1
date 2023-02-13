import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

function Login(){
    const [userName,setuserName]=useState('');
    const [userPass,setuserPass]=useState('');
      
    const [userNameErr,setuserNameErr]=useState("");
    const [PassErr,setPassErr]=useState("");
    const handelInput=()=>{
       // console.log(userName.length)
        if(userName.length==0)
        {
            setuserNameErr("user name is required")
        }
       else if(userName.length<=2 )
        {
            setuserNameErr("user name must be more than 2char")
        }
        else{
            setuserNameErr("")
        }

       
        
       if(userPass.length==0)
        {
            setPassErr("Password is required")
        }
       else if(userPass.length<=8 )
        {
            setPassErr("Password must be more than 8char")
        }
        else{
            setPassErr("")
        }
       

        

    }
    return(
        <>
        <View style={{width:"100%",alignItems:"center",backgroundColor:"black",height:'100vh'}}>
            <TextInput onChangeText={(txt=>setuserName(txt))} style={{width:'50%', borderColor:"red",borderWidth:1,padding:10,margin:10, color:"white" ,marginTop:50}}  placeholder="Enter Username"></TextInput>
            <Text style={{color:'red'}}>{userNameErr}</Text>
            <TextInput onChangeText={(txt=>setuserPass(txt))} style={{width:'50%',padding:10,borderColor:"red",borderWidth:1,margin:10 ,color:"white",marginTop:30}} placeholder="Enter Password" secureTextEntry={true}></TextInput>
            <Text style={{color:'red'}}>{PassErr}</Text>
            <Button title="Login" color={'red'} style={{marginTop:20}} onPress={()=>handelInput()}></Button>
        </View>
        </>
    )
}
export default Login;