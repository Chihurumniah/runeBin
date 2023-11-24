import { Browser } from "@capacitor/browser";

const openCapSite = async () => {
  //document.getElementById("apploader").style.display = "none";
  await Browser.open({ url: "https://www.runebin.com/" });
};

setTimeout(() => {
  //location = "https://www.runebin.com/";
  openCapSite();
  //alert("hi");
}, 1000);
