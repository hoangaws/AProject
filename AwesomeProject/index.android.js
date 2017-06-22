import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Routers } from './react_native_element/Routers.js';
import SplashScreen from 'react-native-splash-screen';
let SQLite = require('react-native-sqlite-storage')

export default class AwesomeProject extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  constructor(props) {
    super(props)

    this.state = {
      record: null
    }


    var db = SQLite.openDatabase({name : "example1.db", createFromLocation : 1}, this.openCB, this.errorCB);
    console.log('ahihi1');
    console.log(db);
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM test', [], (tx, results) => {
        console.log("Query completed");

        // Get rows with Web SQL Database spec compliance.

        var len = results.rows.length;
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);
          console.log(`Employee name: ${row.name}, Dept Name: ${row.id}`);
        }

        // Alternatively, you can use the non-standard raw method.

        /*
          let rows = results.rows.raw(); // shallow copy of rows Array
  
          rows.map(row => console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`));
        */
      });
    });

  }

  

  errorCB(err) {
    console.log("SQL Error: " + err);
  }

  successCB() {
    console.log("SQL executed fine");
  }

  openCB() {
    console.log("Database OPENED");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is an example with sqlite3 and a prepopulated database. Enjoy!
        </Text>
        <Text style={styles.instructions}>
          {this.state.record !== null ? 'Success: ' + this.state.record.name : 'Waiting...'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);


//   render() {
//     return (
//       <Routers />
//     );
//   }
// }

// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
