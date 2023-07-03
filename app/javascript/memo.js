const buildHTML = (XHR) => { //buildHTML関数を定義・HTMLの生成部分の切り出し
  const item = XHR.response.post;//投稿されたメモの情報を抽出
  const html = ` 
  <div class="post">
   <div class="post-date">
     投稿日時：${item.created_at}
   </div>
   <div class="post-content">
     ${item.content}
   </div>
 </div>`; //テンプレートリテラルでHTMLの要素を作成できる
 return html; //buildHTMLの返り値にHTMLを指定（3~11行）
}

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
    XHR.onload = () => { //onloadプロパティ＝リクエストの送信が成功した時に呼び出される
    if (XHR.status != 200){ //HTTPステータスコードが格納
      alert(`Error ${XHR.status}: ${XHR.statusText}`);
      return null;//javascriptの処理から抜ける
    }
      const list = document.getElementById("list");
    const formText = document.getElementById("content");
    list.insertAdjacentHTML("afterend", buildHTML); //listに格納された要素の直後に生成したHTMLを挿入
    formText.value = ""; //formTextのvalue属性にからの文字列を指定
    };
  });
};

window.addEventListener('load', post); //ページが読み込まれたら関数postを実行