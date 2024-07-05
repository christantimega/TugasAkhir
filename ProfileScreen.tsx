import React, { useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ProfileScreen() {
    const [kampus, setKampus] = useState('Sorong');
    const [prodi, setProdi] = useState('CEO Tokopodia');
    const [tgllahir, setTgllahir] = useState('27 juli 2003');
    const [asal, setAsal] = useState('Jakarta');
    const [kontak, setKontak] = useState('085236104855');
    const [email, setEmail] = useState('Prasetyobs038@gmail.com');

    return (
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
            <View style={{ height: 170,}}>
                <View>
                    <Image 
                        source={{
                            uri: 'https://i.pinimg.com/236x/89/c6/b5/89c6b5b28627c3689419bb279d7ca103.jpg'
                        }}
                        style={{
                            width: 410,
                            height: 170,
                            position: 'absolute'   
                        }}/>
                </View>
                <View style={{ marginTop: 40, marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={{
                            uri: 'data:image/jpeg;base64,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'
                        }}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 100 / 2,
                            borderWidth: 4,
                            borderColor: '#a9a9a9',
                        }}/>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', paddingRight: 150 }}>
                            Pace Prastiyo :v  
                        </Text>
                        <Text style={{ fontSize: 15, marginTop: 5, color: 'white' }}>
                            Bos Perusahaan
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, paddingTop: 30 }}>
                <View style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    backgroundColor: 'white',
                    borderRadius: 12,
                    paddingHorizontal: 13,
                    paddingVertical: 15,
                    elevation: 2
                }}>
                <Icon name="home" size={20} color="black" />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ 
                            marginBottom: 1, 
                            fontSize: 17, 
                            color: 'black', 
                            fontWeight: 'bold' 
                            }}>Domisili 
                        </Text>
                        <TextInput
                            value={kampus}
                            onChangeText={setKampus}
                            style={{paddingHorizontal: 1}}/>
                    </View>
                </View>
                <View style={{ 
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginTop: 10,
                    backgroundColor: 'white',
                    borderRadius: 12,
                    paddingHorizontal: 13,
                    paddingVertical: 15,
                    elevation: 2
                }}>
                <Icon name="users" size={20} color="black" />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ 
                            marginBottom: 1, 
                            fontSize: 17, 
                            color: 'black', 
                            fontWeight: 'bold' 
                            }}>Pekerjaan 
                        </Text>    
                        <TextInput
                            value={prodi}
                            onChangeText={setProdi}
                            style={{ paddingHorizontal: 1 }}/>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginTop: 10,
                    backgroundColor: 'white',
                    borderRadius: 12,
                    paddingHorizontal: 13,
                    paddingVertical: 15,
                    elevation: 2
                }}>
                <Icon name="calendar-alt" size={20} color="black" />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ 
                            marginBottom: 1, 
                            fontSize: 17, 
                            color: 'black', 
                            fontWeight: 'bold' 
                            }}>Tanggal Lahir 
                        </Text>
                        <TextInput
                            value={tgllahir}
                            onChangeText={setTgllahir}
                            style={{paddingHorizontal: 2 }}/>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginTop: 10,
                    backgroundColor: 'white',
                    borderRadius: 12,
                    paddingHorizontal: 13,
                    paddingVertical: 15,
                    elevation: 2
                }}>
                <Icon name="building" size={20} color="black" />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ 
                            marginBottom: 1, 
                            fontSize: 17, 
                            color: 'black', 
                            fontWeight: 'bold' 
                            }}>Kota Asal 
                        </Text>
                        <TextInput
                            value={asal}
                            onChangeText={setAsal}
                            style={{paddingHorizontal: 1 }}/>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginTop: 10,
                    backgroundColor: 'white',
                    borderRadius: 12,
                    paddingHorizontal: 13,
                    paddingVertical: 15,
                    elevation: 2
                }}>
                <Icon name="mobile-alt" size={20} color="black" />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ 
                            marginBottom: 1, 
                            fontSize: 17, 
                            color: 'black', 
                            fontWeight: 'bold' 
                            }}>Nomor Handphone 
                        </Text>
                        <TextInput
                            value={kontak}
                            onChangeText={setKontak}
                            style={{paddingHorizontal: 1 }}/>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginTop: 10,
                    backgroundColor: 'white',
                    borderRadius: 12,
                    paddingHorizontal: 13,
                    paddingVertical: 15,
                    elevation: 2,
                    marginBottom: 30
                }}>
                <Icon name="envelope" size={20} color="black" />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ 
                            marginBottom: 1, 
                            fontSize: 17, 
                            color: 'black', 
                            fontWeight: 'bold' 
                            }}>Email 
                        </Text>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            style={{paddingHorizontal: 1 }}/>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 30 }}>
                     <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="facebook" size={25} color="#bdbdbd" />                       
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="instagram" size={25} color="#bdbdbd" />                       
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="github" size={25} color="#bdbdbd" />                       
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="youtube" size={25} color="#bdbdbd" />                       
                     </TouchableOpacity>                                     
                    </View>
                </View>
        </ScrollView>
    </SafeAreaView>
    );
}
