
## Installation React native

npm install -g react-native-cli
 
react-native init AwesomeProject

## Installation genymotion for android
 
cd AwesomeProject

react-native run-android

## Installation react native element

npm install rnpm -g

npm i react-native-vector-icons --save && rnpm link react-native-vector-icons

npm i react-native-elements --save

## Installation React Native Charts Wrapper

npm install --save react-native-charts-wrapper

1. Add Maven Repository

android/build.gradle

allprojects {
    repositories {
        ...

        maven { url "https://jitpack.io" }    // used for MPAndroidChart
    }
}
2. Add Maven Dependency

Mostly automatic install with react-native

react-native link react-native-charts-wrapper

## Installation immutability-helper

npm install --save immutability-helper


## react-navigation

npm install --save react-navigation
















