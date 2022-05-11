window.onload = function () {
  var hardSell = this.document.getElementById("ContentWallHardsell");
  if (hardSell != null) {
    hardSell.remove();
    document.body.style.height = "unset";
    document.body.style.overflow = "unset";
  }
}