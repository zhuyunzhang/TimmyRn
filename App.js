import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    Button,
    TouchableOpacity,
    Dimensions
} from 'react-native';
const {ScreenWidth, ScreenHeight} = Dimensions.get('window');

// type Props = {};
export default class App extends Component<Props> {

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
        if (this.state.username === 'timmy' && this.state.password === '123') {
            console.log("恭喜登陆成功")
        }
    };
// <Text style={{color:"#f00"}}>
// UserName: {this.state.username} Password:{this.state.password}
// </Text>
    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image style={{width:80,height:80,borderRadius:40,borderWidth:3,borderColor:'#fff'}}
                       source={require('./js/res/img/ic_rn.jpg')}/>

                <TextInput
                    style={{width:'90%',height: 40, borderColor: '#ffa800', borderWidth: 1,marginTop:10,borderRadius:3,paddingLeft:10,color:"#2d2d2d"}}
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
                    style={{width:'90%',height: 40, borderColor: '#ffa800',marginTop:10, borderWidth: 1,borderRadius:3,paddingLeft:10,color:"#2d2d2d"}}
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
                    style={{width:'90%',backgroundColor:'#ffa800',padding:8,marginTop:10,justifyContent:'center',alignItems:'center',borderRadius:20}}
                    activeOpacity={0.5}
                    onPress={()=>
                    this._onPressLogin()
                }>
                    <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
