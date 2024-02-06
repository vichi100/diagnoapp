import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Keyboard, SafeAreaView } from "react-native";
import OTPInput from './OTPInput'
import { ButtonContainer, ButtonText } from "./styles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = (props) => {
    const [otpCode, setOTPCode] = useState("");
    const [isPinReady, setIsPinReady] = useState(false);
    const maximumCodeLength = 4;
    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, }}>
            <Pressable style={styles.container} onPress={Keyboard.dismiss}>

                <View style={{
                    position: 'absolute', alignSelf: 'flex-end',
                    marginTop: wp('1%'), paddingRight: wp('5%')
                }}>
                    <AntDesign name="edit" color={"#5E6073"} size={hp('4')} />

                </View>

                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>

                    <View style={{ marginBottom: hp('9%') , }}>
                        <Text style={{ fontSize: hp('3%') , fontFamily: 'bold'}}>Hey, Vichi</Text>
                        <Text style={{ fontSize: hp('3%') }}>+91 9833097595</Text>
                    </View>

                    <OTPInput
                        code={otpCode}
                        setCode={setOTPCode}
                        maximumLength={maximumCodeLength}
                        setIsPinReady={setIsPinReady}
                    />

                    <ButtonContainer
                        disabled={!isPinReady}
                        style={{
                            backgroundColor: !isPinReady ? "#FF8787" : "#FF8787",
                            borderRadius: 10
                        }}
                    >
                        <ButtonText
                            style={{
                                color: !isPinReady ? "black" : "#000000",
                                fontWeight: 500
                            }}
                        >
                            Login
                        </ButtonText>
                    </ButtonContainer>
                </View>
                <StatusBar style="auto" />
            </Pressable>
        </SafeAreaView>
    );
}


export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#141414",
        // alignItems: "center",
        // justifyContent: "center",
    },
});