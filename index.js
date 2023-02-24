// const inputElement = document.getElementById('image');
// inputElement.addEventListener('change', event => {
//   event.preventDefault();
//   event.stopPropagation();
//   const file = event.target.files[0];
// })


const uploadImageModule =(() => {
  const inputElement = document.getElementById('image');
  const previewElement = document.getElementById('image-preview');
  
  inputElement.addEventListener('change', event => {
    event.preventDefault();   //デフォルトのイベントのキャンセル
    event.stopPropagation();  //子要素のイベントが親要素に伝播するのを防ぐ
    
    //type="file"を指定されたinput要素のchangeイベントは」「ファイルのリスト」を返す
    const file = event.target.files[0];
    
    //ファイルが存在しないか、ファイル形式が"image/*"ではないとき"
    if (!file || !file.type.match(/image\/*/)) {
      alert("画像ファイルではありません。")
      return false;
    }
    
    // FileReaderのインスタンスを生成（ローカルファイルを読み込むオブジェクト）
    const reader = new FileReader();  // ローカルファイルを読み込む機能のオブジェクト
    
    // FileReaderの読み込みが完了した結果（アップロードした画像ファイルのデータ）を、img要素のsrcにセット
    reader.addEventListener('load', event => {
        // event.target.resultは、base64エンコードされた画像データ
        previewElement.setAttribute('src' , event.target.result);
    })
  
    // セットされたオブジェクトを読み込む
    reader.readAsDataURL(file);
  });
})();