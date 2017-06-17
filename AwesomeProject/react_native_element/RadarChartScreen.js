import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor
} from 'react-native';
import update from 'immutability-helper';
import {RadarChart} from 'react-native-charts-wrapper';


class RadarChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {},
      legend: {
        textSize: 14,
        form: 'CIRCLE'
      }
    };
  }

  componentDidMount() {

    this.setState(
      update(this.state, {
        data: {
          $set: {
            dataSets: [{
              values: [{value: 7}, {value: 9}, {value: 3}, {value: 5}, {value: 6}],
              label: 'Reading',
              config: {
                color: processColor('#FF8C9D'),

                drawFilled: true,
                fillColor: processColor('#FF8C9D')
              }
            },
            {
              values: [{value: 0}, {value: 10}, {value: 4}, {value: 7}, {value: 2}],
              label: 'Listening',
              config: {
                color: processColor('#8CEAFF'),

                drawFilled: true,
                fillColor: processColor('#8CEAFF')
              }
            }],
          }
        },
        xAxis: {
          $set: {
            valueFormatter: ['test11111', 'ssssB', 'Csssss', 'Dsssssss', 'ssssssssssE']
          }
        }
      })
    );
  }


  render() {
    return (


        <View style={styles.container}>
          <RadarChart
            style={styles.chart}
            data={this.state.data}
            xAxis={this.state.xAxis}
            description={{text: 'gbrtt'}}
          />
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});

export default RadarChartScreen;