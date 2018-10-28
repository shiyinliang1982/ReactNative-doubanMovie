import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

//路由配置
import {Actions} from 'react-native-router-flux'

//导入轮播图组件
import Swiper from 'react-native-swiper';

class Home extends React.Component {
    render() {
        return (
            <View style={styles.out_wrapper}>
                <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}
                        autoplayTimeout={3}>
                    <View style={styles.slide}>
                        <Image style={styles.img}
                               source={{uri: 'http://www.itheima.com/images/slidead/HOMEPAGE/20180613114526968x385.jpg'}}>
                        </Image>
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.img}
                               source={{uri: 'http://www.itheima.com/images/slidead/HOMEPAGE/2018051409245620185529165539341.jpg'}}>
                        </Image>
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.img}
                               source={require("../assert/img/blockchain.png")}>
                        </Image>
                    </View>
                </Swiper>

                <View style={styles.container}>
                    <Text style={styles.container_item} onPress={Actions.movie}>正在上映</Text>
                    <Text style={styles.container_item} onPress={Actions.movie}>即将上映</Text>
                    <Text style={styles.container_item} onPress={Actions.about}>关于</Text>
                </View>
            </View>

        );
    }
}

let styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#311B92',
            height: 55,
            padding: 15
        },
        container_item: {
            flex: 1,
            color: '#fff',
            fontSize: 16,
            textAlign: 'center'
        },
        wrapper: {
            height: 180
        },
        slide: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#9DD6EB',
        },
        out_wrapper: {
            height: 180
        },
        img: {
            width: '100%',
            height: '100%'
        }
    }
);
export default Home