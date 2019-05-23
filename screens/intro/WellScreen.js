import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Progress from 'react-native-simple-progress';

export default class WellScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  load = () => {
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
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Seja bem vindo ao aplicativo dos Surfistas de Cristo
            </Text>

            <Text style={styles.getStartedText}>
             Fique próximo de Deus e de pessoas de bem!
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
              <View
                style={styles.progress} 
                height={6}
                progressColor={'#0ebdc4'}
                borderColor={'#0ebdc4'}
                borderRadius={7}
                borderWidth={6} />
              <View
                style={styles.progress} 
                height={6}
                progressColor={'#ffffff'}
                borderColor={'#ffffff'}
                borderRadius={7}
                borderWidth={6} />
              <View
                style={styles.progress} 
                height={6}
                progressColor={'#ffffff'}
                borderColor={'#ffffff'}
                borderRadius={7}
                borderWidth={6} />
              <View
                style={styles.progress} 
                height={6}
                progressColor={'#ffffff'}
                borderColor={'#ffffff'}
                borderRadius={7}
                borderWidth={6} />
              <View
                style={styles.progress} 
                height={6}
                progressColor={'#ffffff'}
                borderColor={'#ffffff'}
                borderRadius={7}
                borderWidth={6} />
            </View>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Continuar</Text>
            </TouchableOpacity>
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
    marginTop: 150,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 113,
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
    fontSize: 18,
    color: '#fff',
    lineHeight: 20,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
    paddingTop: 80,
  },

  progress: {
    backgroundColor: '#0ebdc4',
    marginHorizontal: 3,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
