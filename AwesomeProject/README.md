
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

## Installation react-native-splash-screen

npm i react-native-splash-screen --save

react-native link react-native-splash-screen or rnpm link react-native-splash-screen

Third step(Plugin Configuration):

Android:

Update the MainActivity.java to use react-native-splash-screen via the following changes:

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.cboy.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {
   @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
    // ...other code
}
iOS:

Update AppDelegate.m with the following additions:

#import "AppDelegate.h"
#import "RCTRootView.h"
#import "SplashScreen.h"  // here

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // ...other code

    [SplashScreen show];  // here
    return YES;
}

@end

















