/**
 * script.js
 *
 * First script to be executed, loads the json and starts the first scene when the button is pressed
 */

'use strict'; // Turns on "strict mode", preventing use of non-declared variables

let json;

window.onload = loadJson();

/**
 * Starts the scene when the button is pressed
 *
 * @param {event} event
 */
function startScene(event){
  event.preventDefault();
  //stack of the visited scene
  document.cookie = "scene_number=" + getSceneId(getInitialScene()) + ";";
  // Was a backclick zone activated
  document.cookie = "isback=" + false +";";
  // List of unic transition scenes
  document.cookie = "skip=" + 0 + ";";
  // List of already visited scene
  document.cookie = "visited_scenes=" + 0 + ";";
  // Different state of the gif given a scene
  document.cookie = "gif_state=0/;";
  document.location.href = 'ping.html';
};
