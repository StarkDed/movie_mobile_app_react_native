import { View, Image,FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import MovieCard from '@/components/MovieCard'
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/SearchBar'

const Search = () => {
  const {data:movies,
    loading:moviesLoading,
    error:moviesError
  } = useFetch(()=>fetchMovies({query:''}))

  

  return (
    <View className="flex-1 bg-primary">
      <Image 
        source={images.bg}
        className="flex-1 absolute z-0 w-full"
        resizeMode="cover"
      /> 
      <FlatList 
        data={movies}
        renderItem={({item})=>(
          <MovieCard
            {...item}
          />
        )}
        className=" px-5 mt-5"
        keyExtractor={(item)=>item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent:'center',
          alignItems:'center',
          gap:16,
          marginVertical:16,
        }}
        contentContainerStyle={{
          paddingBottom:100
        }}
        ListHeaderComponent={
          <>
          <View className="w-full flex-row justify-center mt-20 items-center">
            <Image 
              source={icons.logo}
              className="w-12 h-10"
            />
          </View>

          <View className="my-5">
            <SearchBar placeholder="Search movies ..." />
          </View>

          {moviesLoading && 
            <ActivityIndicator
              size="large"
              color="#0000ff"
            />}
          </>
        }
      />
    </View>
  )
}

export default Search