import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
// import banner1 from "../assets/bannerimgOne.jpg"
// import banner2 from "../assets/bannerimgFour.jpg"
// import banner3 from "../assets/bannerimgThree.jpg"

const Carousel = () => {
   const images =   [
    "https://amanikandan1997.github.io/mini-e-commerce/static/media/bannerImgOne.b425fd03282a7093baa0.jpg",
    "https://amanikandan1997.github.io/mini-e-commerce/static/media/bannerImgFour.ce8423f2f374b1adcb40.jpg",
    "https://amanikandan1997.github.io/mini-e-commerce/static/media/bannerImgThree.696470c8a6e223420f83.jpg",
    "https://amanikandan1997.github.io/mini-e-commerce/static/media/bannerImgFive.03fbaf880325ce4b8079.jpg", // Network image
    //require(),          // Local image
   ]
   


  return (
    <View>
 <SliderBox
  images={images}
  sliderBoxHeight={114}
 
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor="#FFEE58"
  inactiveDotColor="#90A4AE"
  
  dotStyle={{
    width: 4,
    height: 4,
    borderRadius: 15,
    marginHorizontal: 10,
    padding: 0,
    margin: 0
  }}
  autoplay
        circleLoop
        autoplayInterval={1000} // autoplay interval in milliseconds
/>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})