import { FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { listaDeHumor } from './ListadeHumor';
import { Item } from './Item';


const New = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={listaDeHumor}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item {...item} />} />
    </SafeAreaView>

  )
}

export default New;

