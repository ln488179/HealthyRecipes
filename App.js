import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import bruschetta from './assets/bruschetta.png';
import * as SplashScreen from 'expo-splash-screen';

function HomeScreen({ navigation }) {
  const [servings, setServings] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.headers}>Bruschetta Recipe</Text>
      <Image source={bruschetta} style={styles.image} />
      <TextInput style={styles.input} 
        onChangeText={newText => setServings(newText)}
        placeholder="Enter the Number of Servings"
        defaultValue={servings} />

      <TouchableOpacity style={styles.button} 
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            servings: servings,
          });
        }}>
        <Text style={styles.buttonText}>View Recipe</Text>
      </TouchableOpacity> 
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { servings } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.headers}>Bruschetta</Text>
    
      <Text style={styles.subHeaders}>Ingredients</Text>
      <Text style={styles.paragraph}>{servings*4} plum tomatoes</Text>
      <Text style={styles.paragraph}>{servings*6} basil leaves</Text>
      <Text style={styles.paragraph}>{servings*3} garlic cloves, chopped</Text>
      <Text style={styles.paragraph}>{servings*3} TB olive oil</Text>
      
      <Text style={styles.subHeaders}>Directions</Text>
      <Text style={styles.paragraph}>Combine the ingredients add salt to taste. Top French bread slices with mixture.</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  //SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HealthyRecipe" component={HomeScreen}
         options={{
          title: 'Healthy Recipes',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="Details" component={DetailsScreen}
         options={{
          title: '',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  headers: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subHeaders: {
    paddingTop: 25,
    paddingLeft: 25,
    fontSize: 25,
    fontWeight: 'bold'
  },
  paragraph: {
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    marginTop: 30,
    marginBottom: 10,
    width: 430, 
    height: 290
  },
  input: { 
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    height: 40,
    padding: 10,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 20,
    margin: 10,
    backgroundColor: "gray",
    padding: 10,
    width: 200,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  }, 
});