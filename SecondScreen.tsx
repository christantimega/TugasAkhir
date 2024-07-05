import React, { useState } from 'react';
import { Text, View, Image, SafeAreaView, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import PromoItem from "./PromoItem";

export default function SecondScreen() {
    return(
        <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
        <View>
            <Image 
                source={{
                    uri: 'https://i.pinimg.com/236x/89/c6/b5/89c6b5b28627c3689419bb279d7ca103.jpg'
                }}
                style={{
                    height: 160, width: '100%'
                }}/>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                position: 'absolute',
                alignSelf: 'center',
                top: 20
            }}>Selamat Datang Pace, Mace</Text>
            <View style={{
                marginHorizontal: 25,
                height: 160,
                marginTop: -90,
                backgroundColor: 'white',
                elevation: 4,
                borderRadius: 13
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 13,
                    marginTop: 10,
                    }}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Saldo</Text>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Rp. 100.000.000</Text>
                </View>
                <View style={{
                    height: 0.8, 
                    backgroundColor: '#adadad', 
                    marginTop: 10,
                    }}>
                </View>
                <View style={{
                     flexDirection: 'row',
                     marginTop: 34, 
                     marginHorizontal: 38, 
                     justifyContent: 'space-between',
                     }}>
                    <View>
                        <Icon name="paper-plane" size={33} color="black"  />
                        <Text style={{marginTop: 5, alignSelf: 'center'}}>kirim</Text>
                    </View>
                    <View>
                        <Icon name="hand-holding-usd" size={33} color="black"  />
                        <Text style={{marginTop: 5, alignSelf: 'center'}}>minta</Text>
                    </View>
                    <View>
                        <Icon name="database" size={33} color="black"  />
                        <Text style={{marginTop: 5, alignSelf: 'center'}}>top up</Text>
                    </View>
                </View>
            </View>
{/* tanda */}
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{
                    marginTop: 20,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginHorizontal: 35,
                    flexWrap: 'wrap',
                    width: '90%'
                }}>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="money-check-alt" size={33} color="black" />
                        <Text style={{ 
                            marginTop: 5, 
                            alignSelf: 'center', 
                            textAlign: 'center',
                            width: 60
                        }}>pulsa data
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="gift" size={33} color="black" />
                        <Text style={{ 
                            marginTop: 5, 
                            alignSelf: 'center', 
                            textAlign: 'center',
                            width: 60
                        }}>hadiah gratis
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="google-play" size={33} color="black" />
                        <Text style={{ 
                            marginTop: 5, 
                            alignSelf: 'center', 
                            textAlign: 'center',
                            width: 60
                        }}>play store
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="lightbulb" size={33} color="black" />
                        <Text style={{ marginTop: 5, alignSelf: 'center', textAlign: 'center' }}>
                            listrik
                        </Text>
                    </View>
                </View>

{/* baris kedua */}
                <View style={{
                    marginTop: 20,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginHorizontal: 40,
                    flexWrap: 'wrap',
                    width: '90%'
                }}>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="wallet" size={33} color="black" />
                        <Text style={{ 
                            marginTop: 5, 
                            alignSelf: 'center', 
                            textAlign: 'center',
                            width: 60
                        }}>tarik saldo
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="money-bill-wave-alt" size={33} color="black" />
                        <Text style={{ 
                            marginTop: 5, 
                            alignSelf: 'center', 
                            textAlign: 'center',
                            width: 60
                        }}>tarik tunai
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="credit-card" size={33} color="black" />
                        <Text style={{ 
                            marginTop: 5, 
                            alignSelf: 'center', 
                            textAlign: 'center',
                            width: 60
                        }}>kirim ke bank
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="tasks" size={33} color="black" />
                        <Text style={{ 
                            marginTop: 5, 
                            alignSelf: 'center', 
                            textAlign: 'center',
                            width: 60 
                        }}>lain lainya
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{height: 20, width: '100%', backgroundColor: 'white', marginTop: 30}}>
            </View>
            <View style={{
                marginHorizontal: 16,
                width: '100%', 
                flexDirection: 'row', 
                flexWrap: 'wrap'}}>
                <PromoItem
                    image={{uri : "data:image/png;base64,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"}}
                    text="Saham Bibit"
                    diskon=""
                />
                <PromoItem
                    image={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dhkQYApXOxIAsCccd7cfB-TW1BmIq7Tixw&s"}}
                    text="Saham Facebook"
                    diskon="Diskon 50%"
                />
                <PromoItem
                    image={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUl-aubuuywxP2F3t_xAkoZvnkGPW5t2x-w&s"}}
                    text="Saham Coca Cola"
                    diskon=""
                />
                <PromoItem
                    image={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-CjcZSdWSP3xHl2TN9fytYYoW8e8PZgc1zA&s"}}
                    text="Saham Toyota"
                    diskon=""
                />
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
} 