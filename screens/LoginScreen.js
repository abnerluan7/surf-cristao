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
  TextInput
} from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  load = () => {
    this.props.navigation.navigate('App');
  }

  constructor(props) {
    super(props);
    this.state = { user: 'Usuário', ps: 'Senha'};
  }

  

  render() {

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/logo-white3x.png')
                  : require('../assets/images/logo-white3x.png')
              }
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Acessa aí
            </Text>
            <TextInput
                style={styles.getStartedInput}
                onChangeText={(user) => this.setState({user})}
                value={this.state.user}
              />

            <TextInput
                style={styles.getStartedInput}
                onChangeText={(ps) => this.setState({ps})}
                value={this.state.ps}
              />

              
            <TouchableOpacity onPress={this.load} style={styles.buttonNextPadd}>
              <View style={styles.buttonNext}>
                <Text style={styles.buttonNextText}>ENTRAR</Text>
              </View>
            </TouchableOpacity>

            <Text style={styles.bottomText}>
              ou acesse por
            </Text>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/facebook_circle-512.png')
                  : require('../assets/images/facebook_circle-512.png')
              }
              style={styles.faceImage}
            />
            <Text style={styles.bottomText2}>
              Não é usuaŕio?
            </Text>
            <Text style={styles.bottomText3}>
              Cadastre-se aqui!
            </Text>
          </View>


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1b',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 113,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  faceImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 65,
  },
  getStartedText: {
    paddingTop: 30,
    paddingBottom:20,
    fontSize: 26,
    color: '#fff',
    lineHeight: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    fontFamily: 'montserrat-regular'
  },
  getStartedInput:{
    color: '#9b9b9f',
    fontSize: 16,
    borderColor: '#9b9b9f',
    width: 300,
    paddingTop:10,
    borderBottomWidth: 2,

  },
  next: {
    marginTop: 25,
    alignItems: 'center',
    paddingTop: 80,
  },

  progress: {
    backgroundColor: '#0ebdc4',
    marginHorizontal: 3,
  },
  buttonNextPadd: {
    paddingVertical: 40
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
  buttonNextText: {
    fontSize: 20,
    color: '#fff',
    paddingTop: 12,
    fontFamily: 'montserrat-regular'
    
  },

  bottomText: {
    fontSize: 12,
    color: '#fff',
    paddingTop: 14,
    fontFamily: 'montserrat-regular',
    paddingBottom:5
    
  },
  bottomText2: {
    fontSize: 12,
    color: '#fff',
    paddingTop: 12,
    fontFamily: 'montserrat-regular',
    paddingTop:40
    
  },

  bottomText3: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'montserrat-regular',
    
  },
});
