# chatApp
---
# React nativeドキュメント

・react nativeの仕組み  
　通常のreactではDOM操作によって画面を描画するが、  
　react nativeは内部でJAVAやObjective-c等のネイティブのレンダリングAPIを呼び出すため、  
　ネイティブのモバイルUIコンポーネントを表示させる  
　webViewのようにアプリ内でHTMLを見れる枠組を作成しているわけではないため、  
　スムーズな操作感のあるアプリを作成できる  
　(webViewを使用してアプリを作成する言語に、CodobaやTitaniumなどがある) 


・環境構築   
 
・react nativeとexpoのインストール  
　`npm install -g expo-cli`  
　スマホアプリのexpoをインストール  


・プロジェクトの作成  
　プロジェクトを進めるディレクトリに移動して  
　`expo init プロジェクト名`  
　選択肢が表示されるので、プロジェクトに必要なものを選択  

・プロジェクトの立ち上げ  
　`expo start`  
　QRコードを読み取ってスマホのexpoアプリを立ち上げる  


・react nativeの書き方  

　・画面の表示  
　　通常のJSXで使えるdivやpタグなどな使えないので、 
　　react nativeからimportして用意されているタグを使用する  
　　また、cssは使えないので、react nativeで用意されているstylesheetを使う  
　　`import {View,Text,StyleSheet,} from 'react-native';`  
　　 (通常のcssの書き方と異なっていたり、使用できないプロパティがあるため、styled-componentを使用したほうがわかりやすい)  
　　それ以外は基本的に通常のreactと一緒  


　・主なタグ  
　　`<View>`  
　　divやspanと同じ役割  

　　`<Text>`  
　　pタグの役割  

　　`<TextInput>`  
　　inputタグの役割  
　　`onChangeText={() => {}}`の形でイベントを発火できる  

　　`<Image source={require('./sample.png')} />`  
　　imgタグの役割  
　　srcではなく、sourceでパスを渡す  


　　`<TouchableOpacity>`  
　　buttonタグの役割  
　　`onPress={()=>{}}`の形でイベントを発火できる  
　　`<Button>`も使えるがデフォルトのスタイルが当たっているため、  
　　タップした時に動作させたい場合に使用できる  

　　`<FlatList>`, `<ScrollView>`  
　　react nativeでは、コンポーネントが画面サイズを超えても  
　　勝手にスクロールされるようにはならないため、  
　　スクロールさせるためのタグを使用する必要がある  

　　<FlatList  
　　　data={list}  
　　　renderItem={({ item }) => <Component props={item} />}  
　　/>  
　　dataに表示させたいものを配列として渡す(要素はstringである必要がある)
　　renderItemに表示させるコンポーネントを渡す

　
　　`<ScrollView>`  
　　要素を囲むだけ  
　　画面内に表示されていないものまで全ての要素がレンダリングされてしまう  
　　(FlatListはレイジーロードされる)   
　　限られたサイズの要素を表示させる時に使用する  
　　maximumZoomScaleとminimumZoomScaleをpropsとして渡すことで、  
　　画像のピンチインアウトでの拡大縮小が出来る(iosのみ)  


　　`<SafeAreaView>`  
　　デバイスのステータスバーの下から要素を表示させることが出来る  
　　 (iOSのみ)  


　　`<KeyboardAvoidingView>`  
　　キーボードを表示した場合、画面が隠れるため、  
　　このタグで囲むことでキーボードの上に要素が表示させるようにずれる  
　　behaviorプロパティにheightかpaddingを指定することで動きを調整できる  
```
　　<TouchableWithoutFeedback  
 　　　onPress={() => {  
　　　　Keyboard.dismiss();  
　　　　}}  
    　>…</TouchableWithoutFeedback>  
```
　　で要素を囲むことで、囲まれた要素がタップされた時に、  
　　キーボードを消すことが出来る  


---
# imgaePicker 

・インストール
　`npm install  expo-constants expo-permissions expo-image-picker`  
　imagePickerとexpo-permissionsをインストール  


・使い方  

サンプルコード  
```
import Constants from 'expo-constants';  
import Permissions from 'expo-permissions';  

 callDeviceCamera = async () => {  
    const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);  

　// パーミッションが拒否された場合、カメラを起動しないようにする  
    if (status !== 'granted') {  
      return;  
    }  

    const result = await ImagePicker.launchCameraAsync({  
      mediaTypes: ImagePicker.MediaTypeOptions.Images,  
      allowsEditing: true  
    });  

    if (result.cancelled) {  
      return;  
    }  

    const imageInfo = result as ImagePicker.ImageInfo;  
  }  
```


・ImagePicker.launchCameraAsync  
　カメラで写真を撮るためのシステムUIを表示させる  
　mediaTypesで写真撮影か動画撮影か選択出来るようになる  
　　MediaTypeOptions.All　写真と動画どちらも選択できる(iOSのみ)  
　　MediaTypeOptions.images　写真のみ  
　　MediaTypeOptions.Videos　動画のみ  

　戻り値  
　ユーザーがキャンセルした場合、{ cancelled: true }が返る  
　それ以外は、以下の情報が入ったオブジェクトが返る  
　 firebaseのstorageに写真や動画をアップロードする場合、以下のurlをアップロードする  
　{ cancelled: false, type: 'image', uri, width, height, exif, base64 }  
　


・expo-video-player  
　動画再生用ライブラリ  
 
　・インストール  
　　`npm install expo-av`  
　　`npm install expo-video-player`  


サンプルコード  
```
import { Video } from 'expo-av'  
import VideoPlayer from 'expo-video-player'  

<VideoPlayer  
  videoProps={{  
    shouldPlay: true,  //読み込み時に動画を再生するかしないか選択する  
    resizeMode: Video.RESIZE_MODE_CONTAIN,  //動画のアスペクト比を調整する  
    source: {  
      uri: ‘動画ソースのURL’,  
    },  
  }}  
  inFullscreen={true}  
  width={200}  
  height={100}  
/>  
```
---
# Firebaseエミュレータの環境構築  

1. firebase CLIをインストール  
　`npm install -g firebase-tools`  
　https://firebase.google.com/docs/cli#mac-linux-npm  

　firebase CLIのバージョンは、8.14.0以降である必要がある  
　`firebase —version`で確認できる  


2 .  エミュレータをインストールする  
　　1. プロジェクトの初期化(既にプロジェクトがあった場合でも問題ない)  
　　　`firebase init`  
　　　`Error: Failed to authenticate, have you run firebase login?`というエラーが出た場合  
　　　`firebase login`コマンドでログインする  

　　2.エミュレーターを初期化する   
　　　`firebase init emulators`  
　　　対話型のインストーラーが起動するので、プロジェクトにあった選択をする  
　　　(今回はfirestoreとauthenticationとemulatorを選択する)  


３. エミュレーターの起動  
　`firebase emulators:start`で起動する  

・エミュレータ起動後に「Error: firestore: emulator has exited with code: 1」というエラーが出た場合  
　→https://www.oracle.com/java/technologies/javase-downloads.html  
　　Java SEを最新にアップデート or ダウンロードする  
  
---
# Appiumの環境構築  

・appiumのインストール  
　`npm install -g appium`  

・appium-doctorのインストール  
　`npm install appium-doctor`  


・apium-doctorを実行してエラーを修正する  
　1. Carthage was NOT found!が出た場合  
　　`brew install carthage`  

　2. ANDROID_HOME environment variable is NOT set!が出た場合  
　　ターミナルで、ANDROID_HOMEの環境変数を設定する  
　　・Android studioを起動  
　　　「file」 → 「other setting」 → 「Default Project Structure」を開くと、android SDKのパスが見れる  
　　　open ~/.bash_profileでbash_profileを開き、以下のパスを追加  
　　　export ANDROID_HOME=‘android SDKのパス’   
　　　source ~/.bash_profileで反映させる  


　3. JAVA_HOME environment variable is NOT set!が出た場合  
　　ターミナルで、JAVA_HOMEのパスを確認する  
　　/usr/libexec/java_home -v  
　　表示されたパスをターミナルで設定する  
　　　(何も表示されない場合、JavaとJava SEをインストールする)  
　　open ~/.bash_profileでbash_profileを開き、以下のパスを追加  
　　export JAVA_HOME=‘JAVA_HOMEのパス’  
　　source ~/.bash_profileで反映させる  


・wdのインストール  
　`npm install wd`  

・apkファイルをダウンロードする(androidエミュレーターを使用する場合)  
　`expo build:android` で一度ビルドする  
　表示されたURLからapkファイルをダウンロードし、プロジェクトディレクトリに入れる  

・.appフォルダを作成する(iosエミュレーターを使用する場合)  
　ターミナルで「react-native run-ios --configuration=release」を入力  

・configの設定  
　iosエミュレータ−を使用する場合  
```
　export const config = {  
    platformName: "iOS",  
    platformVersion: "14.3",  
    deviceName: "iPhone 12 Pro Max",  
    automationName: "XCUITest",  
    wdaLocalPort: 19000,  //expoのport番号  
    nativeWebTap: true,  
    app:'/Users/daikikuroda/Desktop/dev/fire-app/firechief/fire-chief.app’  //.appファイルのパス  
};
```

　androidエミュレーターを使用する場合  
```
　export const config = {  
    platformName: "android",  
    platformVersion: "10.0",  
    deviceName: "Android Emulator",  
    wdaLocalPort: 19000,  
    nativeWebTap: true,  
    app:'/Users/daikikuroda/Desktop/dev/fire-app/firechief/fire-chief.apk'　// .apkファイルのパス  
};  
```  


・aooium desktopのインストール  
　https://github.com/appium/appium-desktop/releases/tag/v1.9.0  


・appiumサーバの立ち上げ  
　`npm run appium`  
　もしくはappium desktopの「server starrt」ボタンを押す  
　※appiumサーバ立ち上げ後に、エミュレーターを起動してください  


・テストする要素を編集  
　テストする要素のタグに「accessibilityLabel=“ID名”」を追加する  

・テストの実行  
　`npm test ファイル名`  
　




　　　



　　
　

