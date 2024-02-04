import * as React from 'react';
import { Text, StyleSheet, Pressable, View, StatusBar, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';



const Assurance = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, }}>
            <View style={{ flexDirection: 'row', marginTop: hp('5%'), marginLeft: wp('2%'), }}>
                <Entypo name="shield" color={"#FA7070"} size={hp('3%')} />
                <Text style={{ fontSize: hp('2.5%'), fontWeight: 600 }}>   Our Assurance</Text>
            </View>

            <View style={{ backgroundColor: '#FA7070', margin: 10, borderRadius: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ borderColor: '#A6CF98', borderWidth: 0, borderRadius: 20, margin: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ height: hp('15%'), width: wp('35%'), resizeMode: 'contain' }} source={require('../../assets/assurance/icon1.png')} />
                        <Text style={{ fontSize: hp('2%'), fontWeight: 600 }} numberOfLines={2}>Trained</Text>
                        <Text style={{ fontSize: hp('2%'), fontWeight: 600 }} numberOfLines={2}>Phlebotomists</Text>
                    </View>

                    <View style={{ borderColor: '#A6CF98', borderWidth: 0, borderRadius: 20, margin: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ height: hp('15%'), width: wp('35%'), resizeMode: 'contain' }} source={require('../../assets/assurance/icon1.png')} />
                        <Text style={{ fontSize: hp('2%'), fontWeight: 600 }} numberOfLines={2}>100%</Text>
                        <Text style={{ fontSize: hp('2%'), fontWeight: 600 }} numberOfLines={2}>Hygienic</Text>
                    </View>


                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ height: hp('15%'), width: wp('35%'), resizeMode: 'contain', }} source={require('../../assets/assurance/icon1.png')} />
                    <Text style={{ fontSize: hp('2%'), fontWeight: 600 }} numberOfLines={2}>World Class</Text>
                    <Text style={{ fontSize: hp('2%'), fontWeight: 600 }} numberOfLines={2}>Technology</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ borderColor: '#A6CF98', borderWidth: 0, borderRadius: 20, margin: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ height: hp('15%'), width: wp('35%'), resizeMode: 'contain' }} source={require('../../assets/assurance/icon1.png')} />
                        <Text style={{ fontSize: hp('2%'), fontWeight: 600 }} numberOfLines={2}>Processed</Text>
                        <Text style={{ fontSize: hp('2%'), fontWeight: 600 }} numberOfLines={2}> In Lab</Text>
                    </View>
                    <View style={{ borderColor: '#A6CF98', borderWidth: 0, borderRadius: 20, margin: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ height: hp('15%'), width: wp('35%'), resizeMode: 'contain' }} source={require('../../assets/assurance/icon1.png')} />
                        <Text style={{ fontSize: hp('2%'), fontWeight: 600 }} numberOfLines={2}>Accurate </Text>
                        <Text style={{ fontSize: hp('2%'), fontWeight: 600 }} numberOfLines={2}>Report Online</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Assurance;