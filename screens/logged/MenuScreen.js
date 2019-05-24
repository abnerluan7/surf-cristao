import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';



import Progress from 'react-native-simple-progress';

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  load = () => {
    this.props.navigation.navigate('Notif');
  }
  

  render() {

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../../assets/images/logo-white3x.png')
                  : require('../../assets/images/logo-white3x.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.next}>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <View
                  style={styles.scale} >
                  <View style={styles.paddingIco}>
                    <Image
                        source={require('../../assets/images/flood.png')}
                        style={styles.iconImage}
                      />
                  </View>
                    <Text style={styles.ballText}>Home</Text>
                  </View>
                <View
                  style={styles.scale}>
                    <View style={styles.paddingIco}>
                      <Image
                          source={require('../../assets/images/shirt.png')}
                          style={styles.iconImage}
                        />
                    </View>
                    <Text style={styles.ballText}>Loja</Text>
                </View>
                <View
                  style={styles.scale}>
                    <View style={styles.paddingIco}>
                      <Image
                          source={require('../../assets/images/chat-bubble.png')}
                          style={styles.iconImage}
                        />
                    </View>
                    <Text style={styles.ballText}>Eventos</Text>
                  </View>
                <View
                  style={styles.scale}>
                    <View style={styles.paddingIco}>
                    <Image
                        source={require('../../assets/images/chat-bubble.png')}
                        style={styles.iconImage}
                      />
                    </View>
                    <Text style={styles.ballText}>Notificações</Text>
                </View>
              </View>

              <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <View
                  style={styles.scale} >
                  <View style={styles.paddingIco}>
                    <Image
                        source={require('../../assets/images/chat-bubble.png')}
                        style={styles.iconImage}
                      />
                  </View>
                    <Text style={styles.ballText}>Notícias</Text>
                  </View>
                <View
                  style={styles.scale}>
                    <View style={styles.paddingIco}>
                      <Image
                          source={require('../../assets/images/chat-bubble.png')}
                          style={styles.iconImage}
                        />
                    </View>
                    <Text style={styles.ballText}>Surf</Text>
                </View>
                <View
                  style={styles.scale}>
                    <View style={styles.paddingIco}>
                      <Image
                          source={require('../../assets/images/chat-bubble.png')}
                          style={styles.iconImage}
                        />
                    </View>
                    <Text style={styles.ballText}>Doações</Text>
                  </View>
                <View
                  style={styles.scale}>
                    <View style={styles.paddingIco}>
                    <Image
                        source={require('../../assets/images/chat-bubble.png')}
                        style={styles.iconImage}
                      />
                    </View>
                    <Text style={styles.ballText}>Atividades</Text>
                </View>
              </View>

              <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <View
                  style={styles.scale} >
                  <View style={styles.paddingIco}>
                    <Image
                        source={require('../../assets/images/chat-bubble.png')}
                        style={styles.iconImage}
                      />
                  </View>
                    <Text style={styles.ballText}>Vídeos</Text>
                  </View>
                <View
                  style={styles.scale}>
                    <View style={styles.paddingIco}>
                      <Image
                          source={require('../../assets/images/chat-bubble.png')}
                          style={styles.iconImage}
                        />
                    </View>
                    <Text style={styles.ballText}>Documentos</Text>
                </View>
                <View
                  style={styles.scale}>
                    <View style={styles.paddingIco}>
                      <Image
                          source={require('../../assets/images/map.png')}
                          style={styles.iconImage}
                        />
                    </View>
                    <Text style={styles.ballText}>Descubra</Text>
                  </View>
                <View
                  style={styles.scale}>
                    <View style={styles.paddingIco}>
                    <Image
                        source={require('../../assets/images/chat-bubble.png')}
                        style={styles.iconImage}
                      />
                    </View>
                    <Text style={styles.ballText}>Contato</Text>
                </View>
              </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1B',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 105,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 250,
    height: 188,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  paddingIco: {
    paddingTop:12
  },
  iconImage: {
    marginTop: 20,
    width: 35,
    height: 45,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 65,
  },
  getStartedText: {
    paddingTop: 25,
    fontSize: 16,
    color: '#fff',
    lineHeight: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    fontFamily: 'montserrat-regular'
  },
  scale: {
    flex:0.9,
    alignItems: 'center', 
    height:100,
    borderColor:'#313139',
    borderWidth:1
  },
  ballText: {
    paddingTop: 0,
    fontSize: 12,
    color: '#fff',
    lineHeight: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    fontFamily: 'montserrat-regular'
  },
  next: {
    marginTop: 40,
    alignItems: 'center',
  },

  progress: {
    backgroundColor: '#0ebdc4',
    marginHorizontal: 3,
  },
  buttonNextPadd: {
    paddingVertical: 15
  },
  buttonNext: {
    borderColor: "#0ebdc4",
    borderWidth: 2,
    backgroundColor: "#0ebdc4",
    width: 320,
    height: 50,
    alignItems: 'center',
    borderRadius: 30
  },

  buttonNot: {
    borderColor: "#0ebdc4",
    borderWidth: 2,
    width: 320,
    height: 50,
    alignItems: 'center',
    borderRadius: 30
  },
  buttonNextText: {
    fontSize: 20,
    color: '#fff',
    paddingTop: 12,
    fontFamily: 'montserrat-regular'
    
  },
});
