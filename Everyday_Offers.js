function AcceptOffers() {

var AcceptButtons = document.getElementsByClassName("sn-sr-content-accordions-filter-active sn-col-xs-12 sn-col-sm-2 sn-no-padding sn-pull-right");


if (AcceptButtons === null) {
    alert("No buttons found - Are you on the Everyday Offers page?");
    throw new Error("No buttons found - Are you on the Everyday Offers page?");
  }

var i;
for (i = 0; i < AcceptButtons.length; i++) {
  AcceptButtons[i].click();
 }
alert("All Offers Accepted");

}
AcceptOffers()
