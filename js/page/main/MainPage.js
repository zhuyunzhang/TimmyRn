import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

export default class MainPage extends Component {
    static navigationOptions = {
        title: 'Main',
        headerStyle: {
            backgroundColor: '#333', //背景色
        },
        headerTintColor: '#f00', //文字和箭头颜色
        headerTitleStyle: {   //文本样式
            fontWeight: 'bold',
            fontSize: 20,
        },
    };

    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'#000'}}>Main Page</Text>
                <Text style={{color:'#000'}}>UserName: {this.props.navigation.getParam('UserName')}</Text>
                <Text style={{color:'#000'}}>Password: {this.props.navigation.getParam('Password')}</Text>
                <Button
                    title="返回上一个界面"
                    onPress={()=>
                        this.props.navigation.goBack()
                    }
                />
            </View>
        );
    }
}
