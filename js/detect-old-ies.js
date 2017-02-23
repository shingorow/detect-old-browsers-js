(function(global) {
  function DetectOldIEs(whichVersion) {
    var _ua = (function(){
      return {
        lte_IE6:typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined",
        lte_IE7:typeof window.addEventListener == "undefined" && typeof document.querySelectorAll == "undefined",
        lte_IE8:typeof window.addEventListener == "undefined" && typeof document.getElementsByClassName == "undefined",
        lte_IE9:document.uniqueID && typeof window.matchMedia == "undefined",
        gte_IE10:document.uniqueID && window.matchMedia ,
        eq_IE8:document.uniqueID && document.documentMode === 8,
        eq_IE9:document.uniqueID && document.documentMode === 9,
        eq_IE10:document.uniqueID && document.documentMode === 10,
        eq_IE11:document.uniqueID && document.documentMode === 11,
        Trident:document.uniqueID
      }
    })();

    return _ua[whichVersion];
  }
  
  global.DetectOldIEs = DetectOldIEs;
}(this));