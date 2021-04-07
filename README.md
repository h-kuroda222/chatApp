# chatApp

React nativeドキュメント

・react nativeの仕組み  
　通常のreactではDOM操作によって画面を描画するが、  
　react nativeは内部でJAVAやObjective-c等のネイティブのレンダリングAPIを呼び出すため、  
　ネイティブのモバイルUIコンポーネントを表示させる  
　webViewのようにアプリ内でHTMLを見れる枠組を作成しているわけではないため、 
　スムーズな操作感のあるアプリを作成できる  
　(webViewを使用してアプリを作成する言語に、CodobaやTitaniumなどがある) 


・環境構築   
 
・react nativeとexpoのインストール  
　npm install -g expo-cli  
　スマホアプリのexpoをインストール  


・プロジェクトの作成  
　プロジェクトを進めるディレクトリに移動して  
　expo init プロジェクト名  
　選択肢が表示されるので、プロジェクトに必要なものを選択  

・プロジェクトの立ち上げ  
　expo start  
　QRコードを読み取ってスマホのexpoアプリを立ち上げる  


・react nativeの書き方  
　
　・画面の表示  
　　通常のJSXで使える<div><p>タグなどな使えないので、   
　　react nativeからimportして用意されているタグを使用する  
　　また、cssは使えないので、react nativeで用意されているstylesheetを使う  
　　import {View,Text,StyleSheet,} from 'react-native';  
　　 (通常のcssの書き方と異なっていたり、使用できないプロパティがあるため、styled-componentを使用したほうがわかりやすい)  
　　それ以外は基本的に通常のreactと一緒  

　
　・主なタグ  
　　<View>  
　　<div>や<span>と同じ役割  

　　<Text>  
　　<p>タグの役割  

　　<TextInput>  
　　<input>タグの役割  
　　onChangeText={() => {}}の形でイベントを発火できる  

　　<Image source={require('./sample.png')} />  
　　<img>タグの役割  
　　srcではなく、sourceでパスを渡す  


　　<TouchableOpacity>  
　　<button>タグの役割  
　　onPress={()=>{}}の形でイベントを発火できる  
　　<Button>も使えるがデフォルトのスタイルが当たっているため、  
　　タップした時に動作させたい場合に使用できる  

　　<FlatList>, <ScrollView>  
　　react nativeでは、コンポーネントが画面サイズを超えても  
　　勝手にスクロールされるようにはならないため、  
　　スクロールさせるためのタグを使用する必要がある  

　　<FlatList
　　　data={list}
　　　renderItem={({ item }) => <Component props={item} />}
　　/>
　　dataに表示させたいものを配列として渡す(要素はstringである必要がある)
　　renderItemに表示させるコンポーネントを渡す

　
　　<ScrollView>  
　　要素を囲むだけ  
　　画面内に表示されていないものまで全ての要素がレンダリングされてしまう  
　　(FlatListはレイジーロードされる)   
　　限られたサイズの要素を表示させる時に使用する  
　　maximumZoomScaleとminimumZoomScaleをpropsとして渡すことで、  
　　画像のピンチインアウトでの拡大縮小が出来る(iosのみ)  


　　<SafeAreaView>  
　　デバイスのステータスバーの下から要素を表示させることが出来る  
　　 (iOSのみ)  


　　<KeyboardAvoidingView>  
　　キーボードを表示した場合、画面が隠れるため、  
　　このタグで囲むことでキーボードの上に要素が表示させるようにずれる  
　　behaviorプロパティにheightかpaddingを指定することで動きを調整できる  

　　<TouchableWithoutFeedback
      　onPress={() => {
        　Keyboard.dismiss();
      　}}
    　>…</TouchableWithoutFeedback>
　　で要素を囲むことで、囲まれた要素がタップされた時に、  
　　キーボードを消すことが出来る  



　　


　　
　

