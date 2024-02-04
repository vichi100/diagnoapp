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

const Testimonial = (props) => {


    const carouselItems = [

        {
            name: "Vichi",
            place: "Bilaspur, Sarkanda",
            testimonial: "I have opted for their home sample collection services at a convenient time. Worth appreciating. Their customer care team is also highly professional.",
        },
        {
            name: "Suraj",
            place: "Bilaspur, Rajkishore Nagar",
            testimonial: "I rely on Apollo Diagnostics for all my monthly health checkups and tests. Their home sample collection facility saves time.  ",
        },
        {
            name: "Syam Sunder",
            place: "Bilaspur, Mopka",
            testimonial: "From the past few months, I am doing my routine checkups with Apollo diagnostics. I can say that their reports are quite accurate and their services are reasonable too.",
        },
        {
            name: "Tina Mishra",
            place: "Bilaspur, Gol Bajar",
            testimonial: "When I was looking for home blood collection facility, my friend suggested me Apollo diagnostics. I gave it a shot and found very convenient. I was happy with their great service. Their home sample collection service is extremely prompt in providing all assistance.",
        },
        {
            name: "Riya Mukharji",
            place: "Bilaspur, Bangali Para",
            testimonial: "I am very much satisfied with their services. One can easily book and register for any service. The Phlebotomists are also well behaved and experienced. All in all I definitely recommend their services",
        },
    ]


    const renderItem = ({ item }) => {
        return (
            <View style={[{
                // backgroundColor: 'black',
                borderColor: 'black',
                // borderWidth: 1,
                borderRadius: 15,
                height: 200,
                // padding: 50,
                // marginLeft: 25,
                // marginRight: 25,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
                


            }, styles.card, styles.shadowProp]}>
                <Text numberOfLines={5} style={{ fontSize: 14, textAlign: 'center',  margin: 15 }}>{item.testimonial}</Text>
                <View style={{marginTop:20, alignItems: 'center'}}>
                    <Text style={{ fontSize: hp('3') }}>{item.name}</Text>
                    <Text>{item.place}</Text>
                </View>
            </View>
        )


    }


    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, }}>
            <View style={{ flexDirection: 'row', marginTop: hp('5%'), marginLeft: wp('2%'), }}>
                <Entypo name="shield" color={"#FA7070"} size={hp('3%')} />
                <Text style={{ fontSize: hp('2.5%'), fontWeight: 600 }}>   Testimonials</Text>
            </View>
            <View style={{
                flex: 1, alignItems: 'center', justifyContent: 'center',

            }}>
                <Carousel
                    layout={"default"}
                    firstItem={1}
                    loop={true}
                    data={carouselItems}
                    sliderWidth={wp('90%')}
                    itemWidth={wp('70%')}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>

    )
}

export default Testimonial;




const styles = StyleSheet.create({
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