//import { Browser } from "@capacitor/browser";
import { App } from "@capacitor/app";

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
  //openCapSite();
  //alert("hi");
}, 1000);


 */
