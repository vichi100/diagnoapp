import * as React from 'react';
import { Text, StyleSheet, Pressable, View, StatusBar, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Carousel, { Pagination, ParallaxImage } from "react-native-snap-carousel";

import Assurance from './Assurance';
import TestPackage from './TestPackage';
import Header from './Header';
import Testimonial from './Testimonial';
import BookingHome from '../bookTest/BookingHome';
import Test from '../bookTest/Test';


// import FontAwesome6 from  '../../assets/';

const Home = (props) => {

    const { navigation } = props;
    const { onPress, title = 'Save' } = props;




    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, }}>
            <ScrollView>

                {/* <BookingHome/> */}

                <Header />

                {/* Test Packages */}

                {/* <Test /> */}
                <TestPackage />

                {/* assurance */}

                <Assurance />

                {/* Testimonial */}

                <Testimonial/>





                {/* Specialities */}

                {/* <View style={{ flexDirection: 'row', marginTop: hp('5%'), marginLeft: wp('2%'), }}>
                    <FontAwesome name="heartbeat" color={"#FA7070"} size={hp('3%')} />
                    <Text style={{ fontSize: hp('2.5%'), fontWeight: 600 }}>  Our Specialities</Text>
                </View> */}

                {/* <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                    <View style={[styles.card, styles.shadowProp]}>




                        <Text style={{ flex: 1, flexDirection: 'row', backgroundColor: '#A6CF98' }}>
                            <Image style={{ height: hp('15%'), width: wp('15%'), resizeMode: 'contain', backgroundColor: '#FA7070' }} source={require('../../assets/specialty/hormone.jpeg')} />


                            HbA1c also called Glycated hemoglobin gives the average sugar level in the body over a period of 2 to 3 months unlike blood sugar which indicates daily level. This test is used to diagnose prediabetes, diagnose type 1 and type 2 diabetes & monitor your diabetes treatment plan.

                        </Text>


                    </View>

                </ScrollView> */}
            </ScrollView>
        </SafeAreaView>

    )
}

export default Home;

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
        // paddingVertical: 15,
        // paddingHorizontal: 25,
        // width: wp('79%'),
        // height: hp('25%'),
        // marginVertical: 15,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },


});