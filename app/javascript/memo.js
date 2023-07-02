function post (){
  const submit = document.getElementById("submit");//submitの要素を取得
  submit.addEventListener("click", () =>{ //アロー関数
    const form =document.getElementById("form");//フォームに入力した値を取得
    const formData = new FormData(form);// new FormData(フォームの要素);でオブジェクトを生成
  });
};

window.addEventListener('load', post);//ページが読み込まれたら関数postを実行