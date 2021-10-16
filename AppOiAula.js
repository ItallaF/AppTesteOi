# AppTesteOi
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header
          placement="center"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Oi', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />

        <View style={styles.img}>
          <Image
            source={{
              uri:
                'https://www.pngkey.com/png/full/380-3801757_oi-novos-logos-da-oi.png',
            }}
            style={{ width: 150, height: 100 }}
          />
        </View>

        <View style={styles.container_btn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              alert(
                'A Oi, empresa pioneira na prestação de serviços convergentes no país, oferece telefonia móvel, banda larga, TV por assinatura, transmissão de voz local e de longa distância, e tem, atualmente, a maior rede wi-fi do Brasil. A companhia está presente em todo o território nacional e é a empresa que tem a maior capilaridade de rede do Brasil, chegando às áreas remotas do país e promovendo a inclusão digital da população. Além de serviços de telecomunicações para os mercados varejo e corporativo, a Oi oferece soluções de TI inovadoras, hospedadas em plataforma de computação em nuvem, para empresas de todos os portes. \n Em março de 2017, a companhia possuía, no Brasil, cerca de 63 milhões de Unidades Geradoras de Receitas (UGRs), das quais cerca de 40 milhões estavam no segmento Móvel Pessoal, 16,3 milhões no segmento Residencial e 6,5 milhões no segmento B2B (grandes corporações e PMEs). Atualmente, a Oi conta com 2 milhões de hotspots da rede Oi WiFi em todo o Brasil. \n A companhia é signatária do Pacto Global, elabora e publica o seu Relatório Anual de Sustentabilidade, reporta ao CDP (Carbon Disclosure Project) e está no Nível 1 de Governança Corporativa da BM&FBOVESPA. \n Por meio do Oi Futuro, instituto de responsabilidade social da Oi, a companhia desenvolve e apoia ações inovadoras e colaborativas para melhorar a vida das pessoas e da sociedade. Com atuação nas frentes de Educação, Cultura, Inovação Social e Esporte, o instituto acelera iniciativas que, através da tecnologia, potencializam o desenvolvimento pessoal e coletivo. A Oi é uma das maiores patrocinadoras da cultura no país, e o Oi Futuro atua como um catalisador criativo e um laboratório de projetos que promovam a transformação por meio da arte, da educação, do empreendedorismo e do esporte.'
              )
            }>
            <Text style={styles.textBtn}>Empresa</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container_btn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              alert(
                'Rio de Janeiro, RJ \n São Paulo, SP \n Belo Horizonte, MG \n Salvador, BA \n Fortaleza,  CE \n Recife, PE \n Goiânia, GO \n ou FALE CONOSCO \n 0800 031 0800'
              )
            }>
            <Text style={styles.textBtn}>Contato</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container_btn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              alert(
                ' AUTORIZADA ANDRE KEVNY MONTES CLAROS \n RUA GOVERNADOR VALADARES, 42, Horário de Funcionamento: Seg a Sex, 09:00 as 18:00, Sab, 09:00 às 12:45 Dom NÃO FUNCIONA \n LOJA PROPRIA \n CARIBE E PAULINO MONTES CLAROS \n RUA PADRE AUGUSTO, 164, Horário de Funcionamento: Seg a Sex, 09:00 as 18:00 Sab, 09:00 as 13:00 Dom, NÃO FUNCIONA'
              )
            }>
            <Text style={styles.textBtn}>Lojas Fisicas </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
  },

  img: {
    marginTop: 50,
    alignSelf: 'center',
  },

  container_btn: {
    marginTop: 10,
    alignItems: 'center',
  },

  textBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white'
  },
  btn: {
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor:'blue',
    borderRadius: 5,
  },
});
