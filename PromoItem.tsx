import React, { useState } from 'react';
import { Text, View, Image, Dimensions, ImageSourcePropType } from "react-native";

const {width} = Dimensions.get('window')
export default function PromoItem(props: { image: ImageSourcePropType; text: string; diskon: string }){
    return (
        <View style={{ 
            backgroundColor: 'white', 
            elevation: 4, 
            borderRadius: 10, 
            width:width/2 -27,
            marginRight: 18,
            marginBottom: 18,
            marginTop: 15
            }}>
                <Image source={props.image} style={{
                    height:width/2-27, 
                    width:width/2-27, 
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,                   
                    }}/>
            <View style={{marginLeft:10, marginVertical: 10}}>
               <Text style={{fontWeight: 'bold', fontSize: 14, alignSelf: 'center'}}>{props.text}</Text> 
                <Text style={{
                    position:'absolute', 
                    bottom: 173, 
                    backgroundColor: 'white', 
                    padding: 4, 
                    borderRadius: 4, 
                    left: 1  }}>{props.diskon}
                </Text>
            </View>
        </View>
    )
}