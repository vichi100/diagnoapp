import * as React from 'react';
import { Text, StyleSheet, Pressable, View, StatusBar, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';


const Header = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, }}>
            <View style={{ marginLeft: wp('2%') }}>
                <Text style={styles.headLine}>Dr</Text>
                <Text style={styles.headLine}>Meghani</Text>
                <View style={{
                    position: 'absolute', alignSelf: 'flex-end',
                    marginTop: wp('3%'), paddingRight: wp('5%')
                }}>
                    <MaterialCommunityIcons name="microscope" color={"#FA7070"} size={hp('6%')} />
                </View>
            </View>

            {/* <View style={{ flexDirection: 'row', margin: wp('2%'), justifyContent: 'space-between', marginTop: hp('2%') }}>
                <View style={{ alignItems: 'center', width: wp('47%'), height: hp('10%'), backgroundColor: '#6FC7E1', borderRadius: 10 }}>
                    <Text style={{ margin: hp('4%'), fontSize: hp('2%'), fontWeight: "600" }}>
                        Book Test
                    </Text>
                </View>
                <View style={{ alignItems: 'center', width: wp('47%'), height: hp('10%'), backgroundColor: '#EABDCF', borderRadius: 10 }}>
                    <Text style={{ margin: hp('4%'), fontSize: hp('2%'), fontWeight: "600" }}>
                        My Reports
                    </Text>
                </View>
            </View> */}




            {/* Button style */}


            <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 40 , transform: [{ rotate: '15deg'}]}}>

                <View style={{ flexDirection: 'row' }}>

                    <View style={{
                        width: 160,
                        height: 160,
                        borderRadius: 80,
                        borderWidth: 0,
                        borderColor: 'blue',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#6FC7E1',
                        shadowColor: '#171717',
                        shadowOffset: { width: -2, height: 2 },
                        shadowOpacity: 0.4,
                        shadowRadius: 4,
                    }}>


                        <Text style={{ textAlign: 'center', fontSize: hp('1.9%'), fontWeight: 600, marginTop: 60 }}>Book Test</Text>
                        <Text style={{ textAlign: 'center', fontSize: hp('1.5%'), fontWeight: 500,  }}>Free Home Collection</Text>
                        <View style={{
                            flex: 1,
                            justifyContent: 'flex-end', marginBottom: 10
                        }}>
                            <Fontisto name="blood-test" color={"#d14545"} size={hp('4%')} />
                        </View>

                    </View>


                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        width: 160,
                        height: 160,
                        borderRadius: 80,
                        borderWidth: 0,
                        borderColor: 'blue',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#C0D8C0',
                        shadowColor: '#171717',
                        shadowOffset: { width: -2, height: 2 },
                        shadowOpacity: 0.4,
                        shadowRadius: 4,
                    }}>

                        <Text style={{ textAlign: 'center', fontSize: hp('1.8%'), fontWeight: 600, marginTop: 60 }}>Upload Prescription</Text>
                        <View style={{
                            flex: 1,
                            justifyContent: 'flex-end', marginBottom: 10
                        }}>
                            <Ionicons name="cloud-upload-outline" color={"#116dc2"} size={hp('4%')} />
                        </View>


                    </View>
                    <View style={{
                        width: 160,
                        height: 160,
                        borderRadius: 80,
                        borderWidth: 0,
                        borderColor: 'blue',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#EABDCF',
                        marginLeft: 19,
                        shadowColor: '#171717',
                        shadowOffset: { width: -2, height: 2 },
                        shadowOpacity: 0.4,
                        shadowRadius: 4,
                    }}>
                        <Text style={{ textAlign: 'center', fontSize: hp('1.8%'), fontWeight: 600, marginTop: 60, }}>Download Report</Text>
                        <View style={{
                            flex: 1,
                            justifyContent: 'flex-end', marginBottom: 10
                        }}>
                            <MaterialCommunityIcons name="file-download-outline" color={"#2a8049"} size={hp('4%')} />
                        </View>

                    </View>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: { flex: 1 },
    textWrapper: {
        height: hp('70%'), // 70% of height device screen
        width: wp('80%')   // 80% of width device screen
    },
    headLine: {
        fontSize: hp('10%')
    },
    myText: {
        fontSize: hp('5%') // End result looks like the provided UI mockup
    },
    wr1: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'EBEF95'
        // justifyContent:'space-between',
        // alignItems:'center',
        // height: hp('50%'), // 70% of height device screen
        // width: wp('50%')   // 80% of width device screen

    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 13,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 25,
        width: wp('79%'),
        height: hp('25%'),
        marginVertical: 15,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },

    card1: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 5,
        width: wp('79%'),
        height: hp('25%'),
        marginVertical: 5,
    },
    shadowProp1: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
});