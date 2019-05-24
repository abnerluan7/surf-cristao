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

export default class ScaleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  load = () => {
    this.props.navigation.navigate('Loc');
  }
  

  render() {

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../../assets/images/shirt3x.png')
                  : require('../../assets/images/shirt3x.png')
              }
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Quando você vai comprar uma roupa que tamanho compra?
            </Text>
            <TouchableOpacity onPress={this.load} style={styles.buttonNextPadd}>
            <View style={{flexDirection:'row', flexWrap:'wrap', paddingTop:40}}>
              <View
                style={styles.scale} 
                height={50}
                borderColor={'#313139'}
                borderRadius={50}
                borderWidth={2}>
                  <Text style={styles.ballText}>P</Text>
                </View>
              <View
                style={styles.scale} 
                height={50}
                borderColor={'#313139'}
                borderRadius={50}
                borderWidth={2}>
                  <Text style={styles.ballText}>M</Text>
              </View>
              <View
                style={styles.scale} 
                height={50}
                borderColor={'#313139'}
                borderRadius={50}
                borderWidth={2}>
                  <Text style={styles.ballText}>G</Text>
                </View>
              <View
                style={styles.scale} 
                height={50}
                borderColor={'#313139'}
                borderRadius={50}
                borderWidth={2}>
                  <Text style={styles.ballText}>GG</Text>
                </View>
              <View
                style={styles.scale} 
                height={50}
                borderColor={'#313139'}
                borderRadius={50}
                borderWidth={2}>
                  <Text style={styles.ballText2}>plus size</Text>
                </View>
            </View>
            </TouchableOpacity>
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
            </View>
            <TouchableOpacity onPress={this.load} style={styles.buttonNextPadd}>
              <View style={styles.buttonNot}>
                <Text style={styles.buttonNextText}>PULAR ETAPA</Text>
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
  scale: {
    marginHorizontal: 3,
    width: 50,
    alignItems: 'center',
  },
  ballText: {
    paddingTop: 12,
    width: 30,
    fontSize: 16,
    color: '#9b9b9f',
    lineHeight: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    fontFamily: 'montserrat-regular'
  },
  ballText2: {
    paddingTop: 2,
    width: 30,
    fontSize: 12,
    color: '#9b9b9f',
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
