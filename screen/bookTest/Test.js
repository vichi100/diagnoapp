import * as React from 'react';
import { Text, StyleSheet, Pressable, View, StatusBar, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';


const Test = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, }}>

            <View style={{ flexDirection: 'row', marginTop: hp('5%'), marginLeft: wp('2%'), }}>
                <FontAwesome6 name="hand-holding-heart" color={"#FA7070"} size={hp('3%')} />
                <Text style={{ fontSize: hp('2.5%'), fontWeight: 600 }}>   Care For You</Text>
            </View>

            <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>

                {/* 1 */}

                <View style={[styles.card, styles.shadowProp]}>

                    <Text style={{ fontSize: hp('2%'), fontWeight: 600 }}>
                        Premarrige Profile Test
                    </Text>
                    <View style={{ marginTop: hp('2%'), }}>
                        {/* <Text numberOfLines={2}>
                            HbA1c also called Glycated hemoglobin gives the average sugar level in the body over a period of 2 to 3 months unlike blood sugar which indicates daily level. This test is used to diagnose prediabetes, diagnose type 1 and type 2 diabetes & monitor your diabetes treatment plan.
                        </Text> */}
                        {/* <Text style={{ alignItems: 'left' }}>more</Text> */}
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
                            <MaterialCommunityIcons name="information-outline" color={"#FA7070"} size={hp('3%')} />
                            <Text style={{marginLeft:10}}>35 Parameters Covered</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop:10 }}>
                            <MaterialCommunityIcons name="clipboard-text-outline" color={"#FA7070"} size={hp('3%')} />
                            <Text style={{marginLeft:10}}>Report Same Day / Leading Time 2 Hourse</Text>
                        </View>
                    </View>

                    <View style={{
                        flex: 1, flexDirection: 'row', justifyContent: 'space-between',
                        borderRadius: 10, marginTop: 20, borderColor: '#B4B4B8', borderWidth: 1
                    }}>
                        <View style={{ padding: 15, width: '50%', backgroundColor: '#A7D397', alignItems: 'center' }}>
                            <Text style={{ fontSize: hp('1.8%'), fontWeight: "600" }}>&#8377; 90</Text>
                        </View>


                        <View style={{ padding: 15, width: '50%', backgroundColor: '#F9B572', alignItems: 'center' }}>
                            <Text style={{ fontSize: hp('1.8%'), fontWeight: "600" }}>Book</Text>
                        </View>
                    </View>

                </View>

                {/* 2 */}


                <View style={[styles.card, styles.shadowProp]}>

                    <Text style={{ fontSize: hp('2%'), fontWeight: 600 }}>
                        Premarrige Profile Test
                    </Text>
                    <View style={{ marginTop: hp('2%'), }}>
                        <Text numberOfLines={3}>
                            HbA1c also called Glycated hemoglobin gives the average sugar level in the body over a period of 2 to 3 months unlike blood sugar which indicates daily level. This test is used to diagnose prediabetes, diagnose type 1 and type 2 diabetes & monitor your diabetes treatment plan.
                        </Text>
                        <Text style={{ alignItems: 'left' }}>more</Text>
                    </View>

                    <View style={{
                        flex: 1, flexDirection: 'row', justifyContent: 'space-between',
                        borderRadius: 10, marginTop: 20, borderColor: '#B4B4B8', borderWidth: 1
                    }}>
                        <View style={{ padding: 15, width: '50%', backgroundColor: '#A7D397', alignItems: 'center' }}>
                            <Text style={{ fontSize: hp('1.8%'), fontWeight: "600" }}>&#8377; 90</Text>
                        </View>


                        <View style={{ padding: 15, width: '50%', backgroundColor: '#F9B572', alignItems: 'center' }}>
                            <Text style={{ fontSize: hp('1.8%'), fontWeight: "600" }}>Book</Text>
                        </View>
                    </View>

                </View>
                <View style={[styles.card, styles.shadowProp]}>

                    <Text style={{ fontSize: hp('2%'), fontWeight: 600 }}>
                        Premarrige Profile Test
                    </Text>
                    <View style={{ marginTop: hp('2%'), }}>
                        <Text numberOfLines={3}>
                            HbA1c also called Glycated hemoglobin gives the average sugar level in the body over a period of 2 to 3 months unlike blood sugar which indicates daily level. This test is used to diagnose prediabetes, diagnose type 1 and type 2 diabetes & monitor your diabetes treatment plan.
                        </Text>
                        <Text style={{ alignItems: 'left' }}>more</Text>
                    </View>

                    <View style={{
                        flex: 1, flexDirection: 'row', justifyContent: 'space-between',
                        borderRadius: 10, marginTop: 20, borderColor: '#B4B4B8', borderWidth: 1
                    }}>
                        <View style={{ padding: 15, width: '50%', backgroundColor: '#A7D397', alignItems: 'center' }}>
                            <Text style={{ fontSize: hp('1.8%'), fontWeight: "600" }}>&#8377; 90</Text>
                        </View>


                        <View style={{ padding: 15, width: '50%', backgroundColor: '#F9B572', alignItems: 'center' }}>
                            <Text style={{ fontSize: hp('1.8%'), fontWeight: "600" }}>Book</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Test;



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