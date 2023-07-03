function post (){
  const submit = document.getElementById("submit");//submitの要素を取得
  submit.addEventListener("click", (e) => { //クリックのイベント発火の際に実行する関数を定義
    e.preventDefault(); //投稿ボタンをクリックしたという現象を無効にする
    const form = document.getElementById("form");//フォームに入力した値を取得
    const formData = new FormData(form); // new FormData(フォームの要素);でオブジェクトを生成
    const XHR = new XMLHttpRequest(); //HTTP通信を行うメソッド
    XHR.open("POST", "/posts", true); //HTTPメソッド、パス、非同期通信であるかopenメソッドでリクエスト内容を指定
    XHR.responseType = "json"; //レスポンスのデータフォーマットをJsonに指定
    XHR.send(formData); //リクエストを送信、フォームの内容を送信
  });
};

window.addEventListener('load', post); //ページが読み込まれたら関数postを実行