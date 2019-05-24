import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { search: 'Shop'};
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
         <View style={styles.header}>
           <View></View>
           <View></View>
           <View></View>
         </View>
         <View styele={styles.body}>

            <View style={styles.getStartedLink}>
              <Text style={styles.getStartedLinkText}>Shop Surfistas</Text>
              <Text style={styles.getStartedLinkSeta}>-></Text>
            </View>

            <View style={styles.shop}>

              <View  style={styles.card1}>
                <View  style={styles.image}>

                </View>
                <View  style={styles.info}>

                </View>
              </View>

              <View  style={styles.card2}>
                <View  style={styles.cardImage}>

                </View>
                <View  style={styles.info}>

                </View>
              </View>

            </View>

            <View style={styles.getStartedLink}>
              <Text style={styles.getStartedLinkText}>Próximos eventos</Text>
              <Text style={styles.getStartedLinkSeta2}>-></Text>
            </View>

            <View style={styles.shop}>

              <View  style={styles.card3}>
                <View  style={styles.image}>

                </View>
                <View  style={styles.info}>

                </View>
              </View>

              <View  style={styles.card4}>
                <View  style={styles.cardImage}>

                </View>
                <View  style={styles.info}>

                </View>
              </View>

            </View>

            <View style={styles.getStartedLink}>
              <Text style={styles.getStartedLinkText}>Próximos encontros</Text>
              <Text style={styles.getStartedLinkSeta3}>-></Text>
            </View>

            <View style={styles.shop}>

              <View  style={styles.card3}>
                <View  style={styles.image}>

                </View>
                <View  style={styles.info}>

                </View>
              </View>

              <View  style={styles.card4}>
                <View  style={styles.cardImage}>

                </View>
                <View  style={styles.info}>

                </View>
              </View>

            </View>

            <View style={styles.banner}></View>

         </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191a26',
    alignItems: 'center',
  },
  header:{
    height: 80,
    backgroundColor: '#21242d'
  },
  body:{
    alignItems: 'center',
    marginTop: 40,
  },
  getStartedLink:{
    borderColor: '#9b9b9f',
    paddingTop:10,
    width:370,
    borderBottomWidth: 2,
    flexDirection:'row', 
    flexWrap:'wrap',
    marginLeft:50
  },
  getStartedLinkText:{
    color: '#fff',
    fontSize: 18,
    paddingBottom: 10
  },
  getStartedLinkSeta:{
    color: '#0ebdc4',
    fontSize: 26,
    width:230,
    textAlign: 'right'
  },
  getStartedLinkSeta2:{
    color: '#0ebdc4',
    fontSize: 26,
    width:205,
    textAlign: 'right'
  },
  getStartedLinkSeta3:{
    color: '#0ebdc4',
    fontSize: 26,
    width:185,
    textAlign: 'right'
  },
  shop:{
    width: 345,
    marginLeft:40,
    marginRight:50,
    paddingBottom:40,
    paddingTop:40,
    flexDirection:'row', 
    flexWrap:'wrap',

  },
  card1:{
    height: 240,
    width: 160,
    backgroundColor: '#21242d',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius:25
  },
  card2:{
    height: 240,
    width: 160,
    marginLeft:20,
    backgroundColor: '#21242d',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius:25
  },
  card3:{
    height: 170,
    width: 160,
    backgroundColor: '#21242d',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius:25
  },
  card4:{
    height: 170,
    width: 160,
    marginLeft:20,
    backgroundColor: '#21242d',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius:25
  },
  card5:{
    height: 170,
    width: 160,
    backgroundColor: '#21242d',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius:25
  },
  card6:{
    height: 170,
    width: 160,
    marginLeft:20,
    backgroundColor: '#21242d',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius:25
  },
  banner:{
    backgroundColor: '#093948',
    height: 180,
    width: 500,
    borderColor: '#707070',
    borderTopWidth: 1
  }

});
