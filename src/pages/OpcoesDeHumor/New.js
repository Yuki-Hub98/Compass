import { FlatList} from 'react-native'
import React from 'react'
import { listaDeHumor,Humor } from './ListadeHumor';
import { Item }  from './Item';
import { SafeAreaView } from 'react-native';

const New = () => {
  return (
    <SafeAreaView>
        <FlatList
        data={listaDeHumor}
        keyExtractor={(item) => item.id} 
        renderItem={({item}) => <Item {...item}/> } />
    </SafeAreaView>
    
)}

export default New;

