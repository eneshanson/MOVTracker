import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCbpio3QTR3cvCUYQAgE4k4pF0gLKSFnHM",
    authDomain: "movmaker-d060a.firebaseapp.com",
    databaseURL: "https://movmaker-d060a.firebaseio.com",
    projectId: "movmaker-d060a",
    storageBucket: "",
    messagingSenderId: "35977312651"
};

export const firebaseApp= firebase.initializeApp(config)
export const ActorRef = firebase.database().ref('Actors')
export const FavoriteActorRef = firebase.database().ref('FavoriteActors')
export const MovieRef = firebase.database().ref('Movies')
export const FavoriteMovieRef = firebase.database().ref('FavoriteMovies')