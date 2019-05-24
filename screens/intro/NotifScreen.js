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

export default class NotifScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  load = () => {
    this.props.navigation.navigate('Scale');
  }
  

  render() {

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../../assets/images/chat-bubble3x.png')
                  : require('../../assets/images/chat-bubble3x.png')
              }
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Permita as suas notificações para que possamos mandar novidades, avisos e convites dos surfistas!
            </Text>
          </View>

          <View style={styles.next}>
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
                progressColor={'#0ebdc4'}
                borderColor={'#0ebdc4'}
                borderRadius={7}
                borderWidth={6} />
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
            </View>
            <TouchableOpacity onPress={this.load} style={styles.buttonNextPadd}>
              <View style={styles.buttonNext}>
                <Text style={styles.buttonNextText}>CONTINUAR</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._handleHelpPress} style={styles.buttonNextPadd}>
              <View style={styles.buttonNot}>
                <Text style={styles.buttonNextText}>NÃO PERMITIR</Text>
              </View>
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
    marginTop: 120,
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
    fontSize: 16,
    color: '#fff',
    lineHeight: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    fontFamily: 'montserrat-regular'
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
