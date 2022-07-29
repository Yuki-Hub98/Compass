import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { Emotion } from './Emotion';
import { useNavigation } from '@react-navigation/native';


const MenuHumor = () => {
  
  const [id, setId] = useState(0);
  const [click, setClick] = useState(false);
  const [array, setArray] = useState([]);

  const arrayIcon = (key) => {
    setClick(true);
    if (array.includes(key)) {
      setArray(array.filter(item => item !== key))
    } else if (array.length < 3) {
      setArray([...array, key])

    }
  };
  const clickEmotion = (key, id) => {
    setId(key)
    if (key === id) {
      setId(0)
    }
  }


  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.BotaoFechar}>
          <Text style={styles.textoBotaoFechar}> X </Text>
        </TouchableOpacity>
        <View style={styles.cabeçalho}>
          <Text style={styles.textoCabeçalho}> Como você está ?</Text>
        </View>
        <View style={styles.dataEhora}>
          <Text> HOJE, 23 DE JANEIRO</Text>
          <Text> 08:35 </Text>
        </View>
        <View style={styles.emotionCabeçalho}>
          <View style={styles.areaEmotions}>
            <TouchableOpacity onPress={() => clickEmotion(1, id)} style={[styles.formatoEmotion, { backgroundColor: id === 1 ? "#304FFE" : "white" }]}>
              <Image style={styles.tamanhoEmotion} source={require("../../../assets/humores/radiant.png")} />
            </TouchableOpacity>
            <View style={styles.areaTextoEmotion}>
              <Text style={styles.textoEmotion}>Radiante</Text>
            </View>
          </View>
          <View style={styles.areaEmotions}>
            <TouchableOpacity onPress={() => clickEmotion(2, id)} style={[styles.formatoEmotion, { backgroundColor: id === 2 ? "#304FFE" : "white" }]}>
              <Image style={styles.tamanhoEmotion} source={require("../../../assets/humores/happy.png")} />
            </TouchableOpacity>
            <View style={styles.areaTextoEmotion}>
              <Text style={styles.textoEmotion}>Feliz</Text>
            </View>
          </View>
          <View style={styles.areaEmotions}>
            <TouchableOpacity onPress={() => clickEmotion(3, id)} style={[styles.formatoEmotion, { backgroundColor: id === 3 ? "#304FFE" : "white" }]}>
              <Image style={styles.tamanhoEmotion} source={require("../../../assets/humores/ok.png")} />
            </TouchableOpacity>
            <View style={styles.areaTextoEmotion}>
              <Text style={styles.textoEmotion}>Ok</Text>
            </View>
          </View>
          <View style={styles.areaEmotions}>
            <TouchableOpacity onPress={() => clickEmotion(4, id)} style={[styles.formatoEmotion, { backgroundColor: id === 4 ? "#304FFE" : "white" }]}>
              <Image style={styles.tamanhoEmotion} source={require("../../../assets/humores/sad.png")} />
            </TouchableOpacity>
            <View style={styles.areaTextoEmotion}>
              <Text style={styles.textoEmotion}>Triste</Text>
            </View>
          </View>
          <View style={styles.areaEmotions}>
            <TouchableOpacity onPress={() => clickEmotion(5, id)} style={[styles.formatoEmotion, { backgroundColor: id === 5 ? "#304FFE" : "white" }]}>
              <Image style={styles.tamanhoEmotion} source={require("../../../assets/humores/terrible.png")} />
            </TouchableOpacity>
            <View style={styles.areaTextoEmotion}>
              <Text style={styles.textoEmotion}>Acabado</Text>
            </View>
          </View>
        </View>
        <View style={styles.areaIcones}>
          <View style={styles.grupoIcones}>
            <View View style={styles.posiçãoIcones}>
              <TouchableOpacity onPress={() => arrayIcon(0)} style={[styles.formatoIcone, { backgroundColor: click && array.includes(0) ? '#304ffe' : 'white' }]}>
                <Image style={styles.tamanhoIcones} source={require("../../../assets/atividades/rest.png")} />
              </TouchableOpacity >
              <View style={styles.areaTextoEmotion}>
                <Text style={styles.textoIcone}>Descanço</Text>
              </View>
            </View>
            <View View style={styles.posiçãoIcones}>
              <TouchableOpacity style={styles.formatoIcone} onPress={() => arrayIcon(1)} style={[styles.formatoIcone, { backgroundColor: click && array.includes(1) ? '#304ffe' : 'white' }]}>
                <Image style={styles.tamanhoIcones} source={require("../../../assets/atividades/date.png")} />
              </TouchableOpacity>
              <View style={styles.areaTextoEmotion}>
                <Text style={styles.textoIcone}>Encontro</Text>
              </View>
            </View>
            <View View style={styles.posiçãoIcones}>
              <TouchableOpacity style={styles.formatoIcone} onPress={() => arrayIcon(2)} style={[styles.formatoIcone, { backgroundColor: click && array.includes(2) ? '#304ffe' : 'white' }]}>
                <Image style={styles.tamanhoIcones} source={require("../../../assets/atividades/movies.png")} />
              </TouchableOpacity>
              <View style={styles.areaTextoEmotion}>
                <Text style={[styles.textoIcone, { fontSize: 10 }]}>Filmes e series</Text>
              </View>
            </View>
          </View>
          <View style={styles.grupoIcones}>
            <View style={styles.posiçãoIcones}>
              <TouchableOpacity style={styles.formatoIcone} onPress={() => arrayIcon(3)} style={[styles.formatoIcone, { backgroundColor: click && array.includes(3) ? '#304ffe' : 'white' }]}>
                <Image style={styles.tamanhoIcones} source={require("../../../assets/atividades/shopping.png")} />
              </TouchableOpacity>
              <View style={styles.areaTextoEmotion}>
                <Text style={styles.textoIcone}>Compras</Text>
              </View>
            </View>
            <View style={styles.posiçãoIcones}>
              <TouchableOpacity style={styles.formatoIcone} onPress={() => arrayIcon(4)} style={[styles.formatoIcone, { backgroundColor: click && array.includes(4) ? '#304ffe' : 'white' }]}>
                <Image style={styles.tamanhoIcones} source={require("../../../assets/atividades/good_meal.png")} />
              </TouchableOpacity>
              <View style={styles.areaTextoEmotion}>
                <Text style={styles.textoIcone}>Boa Refeição</Text>
              </View>
            </View>
            <View View style={styles.posiçãoIcones}>
              <TouchableOpacity style={styles.formatoIcone} onPress={() => arrayIcon(5)} style={[styles.formatoIcone, { backgroundColor: click && array.includes(5) ? '#304ffe' : 'white' }]}>
                <Image style={styles.tamanhoIcones} source={require("../../../assets/atividades/party.png")} />
              </TouchableOpacity>
              <View style={styles.areaTextoEmotion}>
                <Text style={styles.textoIcone}>Festa</Text>
              </View>
            </View>
          </View>
          <View style={styles.grupoIcones}>
            <View View style={styles.posiçãoIcones}>
              <TouchableOpacity style={styles.formatoIcone} onPress={() => arrayIcon(6)} style={[styles.formatoIcone, { backgroundColor: click && array.includes(6) ? '#304ffe' : 'white' }]}>
                <Image style={styles.tamanhoIcones} source={require("../../../assets/atividades/sports.png")} />
              </TouchableOpacity>
              <View style={styles.areaTextoEmotion}>
                <Text style={styles.textoIcone}>Esporte</Text>
              </View>
            </View>
            <View View style={styles.posiçãoIcones}>
              <TouchableOpacity style={styles.formatoIcone} onPress={() => arrayIcon(7)} style={[styles.formatoIcone, { backgroundColor: click && array.includes(7) ? '#304ffe' : 'white' }]}>
                <Image style={styles.tamanhoIcones} source={require("../../../assets/atividades/cooking.png")} />
              </TouchableOpacity>
              <View style={styles.areaTextoEmotion}>
                <Text style={styles.textoIcone}>Cozinhar</Text>
              </View>
            </View>
            <View View style={styles.posiçãoIcones}>
              <TouchableOpacity style={styles.formatoIcone} onPress={() => arrayIcon(8)} style={[styles.formatoIcone, { backgroundColor: click && array.includes(8) ? '#304ffe' : 'white' }]}>
                <Image style={styles.tamanhoIcones} source={require("../../../assets/atividades/games.png")} />
              </TouchableOpacity>
              <View style={styles.areaTextoEmotion}>
                <Text style={styles.textoIcone}>Jogos</Text>
              </View>
            </View>
          </View>
        </View>

        <TextInput style={styles.input} placeholder="Escreva aqui o que aconteceu hoje" />

        <TouchableOpacity style={styles.botaoSalvar}>
          <Text style={styles.textoBotaoSalvar}>SALVAR</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>

  )
}

export default MenuHumor;

