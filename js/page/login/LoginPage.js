import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    Button,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
const {ScreenWidth, ScreenHeight} = Dimensions.get('window');

// type Props = {};
export default class LoginPage extends Component {

    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            username: '',
            password: '',
        }
    }

    /**
     * 登陆按钮点击:
     * 1.先进行本地校验
     * 2.本地校验后进行访问后台校验
     * @private
     */
    _onPressLogin = ()=> {
        if (this.state.username == null || this.state.username.length <= 0) {
            console.log("请输入用户名");
            return;
        }
        if (this.state.password == null || this.state.password.length <= 0) {
            console.log("请输入密码");
            return;
        }
        if (this.state.username === 'timmy' && this.state.password === '123') {
            console.log("恭喜登陆成功")
        }
        this.props.navigation.navigate('Main', {
                UserName: this.state.username,
                Password: this.state.password,
            }
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.loginIconStyle}
                       source={require('../../res/img/ic_rn.jpg')}/>

                <TextInput
                    style={styles.inputStyle}
                    maxLength={11}
                    placeholder='请输入用户名'
                    placeholderTextColor='#999'
                    clearButtonMode='always'
                    onChangeText={(text)=>
                                this.setState({
                                   username :text
                                })
                           }
                    selectionColor="#00f"
                    underlineColorAndroid='transparent'/>
                <TextInput
                    style={styles.inputStyle}
                    keyboardType='numeric'
                    maxLength={6}
                    placeholder='请输入密码'
                    placeholderTextColor='#999'
                    clearButtonMode='always'
                    onChangeText={(text)=>
                                this.setState({
                                   password :text
                                })
                           }
                    selectionColor="#00f"
                    underlineColorAndroid='transparent'/>
                <TouchableOpacity
                    style={styles.loginConStyle}
                    activeOpacity={0.5}
                    onPress={()=>
                    this._onPressLogin()
                }>
                    <Text style={styles.loginTextStyle}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7'
    },
    loginIconStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#fff'
    },
    inputStyle: {
        width: '90%',
        height: 40,
        borderColor: '#ffa800',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 3,
        paddingLeft: 10,
        color: "#2d2d2d"
    },
    loginConStyle: {
        width: '90%',
        backgroundColor: '#ffa800',
        padding: 8,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    loginTextStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
