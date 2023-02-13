import { StyleSheet } from "react-native";

export default StyleSheet.create({
    imageHom:{
        flex:1,
        position:'relative',
        resizeMode:"cover",
        width:'100%',
       // height:300,
        alignItems:"center",
    },
    txt:{
        position:'absolute',
        top:'30%',
        right:'20%',
        backgroundColor:'#fff',
        opacity:0.7,
        padding:20,
    },
    txtChild:{
      fontSize:20
    },
    footer:{
         
        flexDirection:'row',
        backgroundColor:'black',
        padding:30,
        alignItems:'center',
        justifyContent:'center'
    },
    footericon:{
     marginLeft:10,
      
      
    }

})