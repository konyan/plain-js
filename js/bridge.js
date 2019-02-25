window.androidObj = function AndroidClass() {};

export function phoneCall() {
  console.log("PHone: 09451560566");
  window.androidObj.textToAndroid("09451560566");
}

// export function updateFromAndroid(message = "default") {
//   console.log("Message",message);
// //   localStorage.setItem("brand",message);
//   return message;
// }
