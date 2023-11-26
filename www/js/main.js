//import { Browser } from "@capacitor/browser";
//import App from "@capacitor/app";
//import { App } from "../../nodes_modules/@capacitor/app";
import { App } from "../../node_modules/@capacitor/app";

setTimeout(() => {
  location = "https://www.runebin.com/";
  //
  //openCapSite();
  //alert("hi");
}, 3000);

App.addListener("backButton", ({ canGoBack }) => {
  if (canGoBack) {
    window.history.back();
  } else {
    App.exitApp();
  }
});

/**
 * const openCapSite = async () => {
  await Browser.open({ url: "https://www.runebin.com/" });
};
setTimeout(() => {
  location = "https://www.runebin.com/";
  //
  //openCapSite();
  //alert("hi");
}, 1000);


 */
