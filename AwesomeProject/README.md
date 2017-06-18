
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

## react-native-admob

npm i react-native-admob -S

react-native link

## react native image picker

npm install react-native-image-picker@latest --save
react-native link react-native-image-picker

## react-native-fetch-blob

npm install --save react-native-fetch-blob
react-native link react-native-fetch-blob
RNFB_ANDROID_PERMISSIONS=true react-native link











