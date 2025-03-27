import { View, Image,FlatList, ActivityIndicator,Text } from 'react-native'
import React from 'react'
import {useState,useEffect} from 'react'
import { images } from '@/constants/images'
import MovieCard from '@/components/MovieCard'
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/SearchBar'

const Search = () => {
  const [searchQuery,setSearchQuery]=useState('');
  const {data:movies,
    loading:moviesLoading,
    error:moviesError,
    refetch:loadMovies,
    reset,
  } = useFetch(()=>fetchMovies({query:searchQuery}),false)

  useEffect(()=>{
    const timeoutId= setTimeout( async () =>{
      if(searchQuery.trim()){
        await loadMovies();
      }else{
        reset()
      }
    },500)
    
    return ()=>clearTimeout(timeoutId)
  }
  ,[searchQuery])

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
        ListEmptyComponent={
          <>
            {!moviesLoading && !moviesError ? (
              <View className="mt-10 px-5">
                <Text className="text-center text-gray-500">
                  {searchQuery.trim() ? "No movies found" : "Search for movie"}
                </Text>
              </View>
            ) : null}
          </>
        }
        ListHeaderComponent={
          <>
          <View className="w-full flex-row justify-center mt-20 items-center">
            <Image 
              source={icons.logo}
              className="w-12 h-10"
            />
          </View>

          <View className="my-5">
            <SearchBar 
            placeholder="Search movies ..."
            value={searchQuery}
            onChangeText={(text:string)=>setSearchQuery(text)}
            />
          </View>

          {moviesLoading && 
            <ActivityIndicator
              size="large"
              color="#0000ff"
          />}

          {moviesError && 
            <Text
            className="text-red-500 px-5 my-3"
          >{moviesError.message}</Text>}

          {!moviesLoading && !moviesError && searchQuery.trim() 
            && Array.isArray(movies) && movies?.length>0 && (
              <Text className="text-xl text-white font-bold">Search result for {' '}
                <Text className="text-accent">{searchQuery}</Text>
              </Text>
            )
            
          }
          </>
        }
      />
    </View>
  )
}

export default Search