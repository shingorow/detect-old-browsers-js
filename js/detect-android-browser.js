(function(global) {
  function DetectAndroidBrowser() {
    var ua = window.navigator.userAgent,
        isAndroidBrowser = /Android/.test(ua) && /Linux; U;/.test(ua) && !/Chrome/.test(ua);
        
    return isAndroidBrowser;
  }
  
  global.DetectAndroidBrowser = DetectAndroidBrowser;
}(this));