import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function LoginScreen({navigation}: any){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
    <View style={{ 
            flex: 1, 
            alignItems: 'center',
            backgroundColor: '#f5f5f5' 
        }}>
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
                source={{
                    uri: 'data:image/jpeg;base64,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'
                }}
                style={{
                    paddingRight: 410,
                    width: 100,
                    height: 720,
                    position: 'absolute'
                }}/>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMU-dUqLKxV3OC8Y8z6RBEoaisHujIRZEzZA&s' }}
                style={{ width: 120, height: 120, borderRadius: 10, }}
            />
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 10 }}>
                M-baking<Text style={{ color: '#4682b4' }}>Papua</Text>
            </Text>
            <Text style={{ marginTop: 10, fontWeight: 'bold', }}>Login</Text>
        </View>
        <View style={{ 
            flexDirection: 'row-reverse', 
            alignItems: 'center', 
            marginHorizontal: 50, 
            marginTop: 10, 
            backgroundColor: 'white', 
            borderRadius: 12, 
            paddingHorizontal: 13,
            elevation: 2
        }}>
            <Icon name="envelope" size={20} color="#4682b4"  />
            <TextInput
            value={email}
            onChangeText={setEmail}
            style={{ flex: 1, marginLeft: 2 }}
            placeholder="Email"
            />   
        </View>
        <View style={{ 
            flexDirection: 'row-reverse', 
            alignItems: 'center', 
            marginHorizontal: 50, 
            marginTop: 10, 
            backgroundColor: 'white', 
            borderRadius: 12, 
            paddingHorizontal: 13,
            elevation: 2
        }}>
            <Icon name="lock" size={20} color="#4682b4" />
            <TextInput
            value={password}
            onChangeText={setPassword}
            style={{ flex: 1, marginLeft: 3 }}
            placeholder="Password"
            secureTextEntry={true}
            />
        </View>
        <TouchableOpacity style={{
            backgroundColor: "#1e90ff",
            paddingVertical: 10, 
            paddingHorizontal: 135, 
            marginTop: 30, 
            borderRadius: 10
        }}

        onPress={() => navigation.navigate('ThirdScreen')}>
            
            <Text style={{
            color: 'white',
            textAlign: 'center', 
            fontWeight: 'bold'
            }}>Log in</Text>
        </TouchableOpacity>
        <View style={{
            marginHorizontal: 20, 
            flexDirection: 'row', 
            marginTop: 7
        }}>
        <TouchableOpacity style={{flex: 1, marginLeft: 30}}>
            <Text> Masukan Pace</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 80}}>
            <Text>Ko Lupa?</Text>
        </TouchableOpacity>
        </View>
        <View style={{
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center', 
            marginTop: 140,
            flexDirection: 'row-reverse',
         }}>
            
        </View>
    </View>
    );
}