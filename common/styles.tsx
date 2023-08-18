import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal :50,
        backgroundColor: 'white',
        flex: 1,
        marginLeft:5,
        justifyContent: 'center',
      },
      button: {
        backgroundColor: 'purple',
        padding: 10,
        marginTop:10,
        borderRadius: 15, 
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign:'center',
        paddingVertical:2
        
      },
      input: {
        borderWidth: 2,
        borderColor: 'gray',
        marginBottom:5,
        borderRadius:15,
        paddingHorizontal:10
      },
      invalidInput: {
        borderColor: 'red',
      },
      warningText: {
        color: 'red',
        fontSize:11,
        fontStyle:'italic',
        marginBottom :5,

      },
      loginText: {
        marginBottom:15,
        fontSize:30
      },
});