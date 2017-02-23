# Detect old browsers
Android 4.4 以前に搭載されている標準ブラウザーや IE の旧バージョンを判定するための JavaScript です。

## 使用方法

### detect-android-browser.js

ページでファイルを読み込み、 DetectAndroidBrowser() を実行すると Boolean を返します。

AndroidBrowser の場合に true, そうでない場合は false です。

この判定をもとに、処理を行います。

### detect-old-ies.js

ページでファイルを読み込み、 DetectOldIEs() を実行すると Boolean を返します。

引数に文字列を与えることで、文字列に対応する IE のバージョン判定を行います。

```
lte_IE6: IE6 を含む、それより古いバージョン
lte_IE7: IE7 を含む、それより古いバージョン
lte_IE8: IE8 を含む、それより古いバージョン
lte_IE9: IE9 を含む、それより古いバージョン
gte_IE10: IE10 を含む、それより新しいバージョン
eq_IE8: Internet Explorer 8
eq_IE9: Internet Explorer 9
eq_IE10: Internet Explorer 10
eq_IE11: Internet Explorer 11

```

どちらも index.html に サンプルを掲載してあります。

## お約束事

このリポジトリのファイルを使用したことで発生した損害について制作者は一切の責任を負いません。

その点ご了承いただいた上でお使い下さい。