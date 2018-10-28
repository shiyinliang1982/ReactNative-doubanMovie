import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

//导入路由
import {Router, Stack, Scene} from 'react-native-router-flux';

//导入控件
import Home from './pages/home/Home';
import MovieList from "./pages/movie/MovieList";
import MovieDetail from './pages/movie/MovieDetail';
import About from './pages/about/About';

//去除警告
import {YellowBox} from 'react-native'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="home" component={Home} title="主页" initial={true}/>
                    <Scene key="movie" component={MovieList} title="电影列表"/>
                    <Scene key="detail" component={MovieDetail} title="电影详情"/>
                    <Scene key="about" component={About} title="关于"/>
                </Stack>
            </Router>
        );
    }
}
