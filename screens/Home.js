import React,{useEffect,useState} from 'react';
import {View, Text, ScrollView,Image} from "react-native";
import axios from 'axios';

const Home = () => {
    //1. 그릇 설정
    const [photos,setPhotos] = useState([])
    const [loading, setLoading] = useState(true)

    //3. 데이터 네트워킹 함수(url 접속 -> 파싱)
    const getPhotos = async () => {
        try{
            const {data,status} = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")

            setPhotos(data,results)
            setLoading(false)

        } catch(err) {
            alert(err.response.data.message)
            setLoading(false)
        }
    }

    //2. 불러오는 자동함수
    useEffect(( )=> {
        getPhotos()
    }, [])

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ScrollView>
                {photos.map( photo => (
                    <View>
                        <Text style={{ fontSize:18, fontWeight:'600'}}>
                            {photo.title}
                        </Text>
                            <Image
                            style={{width:200, height:200}}
                            source={{uri:"https://image.tmdb.org/t/p/w500"+ photo.poster_path}}
                            />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default Home;