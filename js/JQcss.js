// html head에 cdn으로 값을 가져온 후
// 다른 JS에서도 제이쿼리에 접근 할 수 있다

// .css()를 이용해서 style값을 바꿀 수 있다
$("#header").css("color","blue");

// 값을 여러개 넣고 싶을 때는 객체형태로 작성
// 속성이름을 적을 때 -이 있다면 첫글자 대문자로
$("#header").css({
    backgroundColor : "gray",
    fontSize : `${3}rem`
    // fontSize : "3rem"
});

// 버튼을 클릭했을 때, hidden 클래스 추가
$("#btn").on("click", function(){
    // 형제 태그를 통해서 p태그를 찾고 클래스 추가
    // $("#btn").prev().addClass("hidden");
    // this를 통해서 현재 이벤트가 실행된 태그를 가져올 수 있다
    $(this).prev().addClass("hidden");
    console.log($(this));
});


// 버튼을 클릭했을 때, header를 숨기고 보여줌

$("#toggleBtn").on("click", function(){
    $("#header").toggleClass("hidden");
});


$("#todo input").on("click", function(e){
    
    console.log(e.target.checked);
    // 제이쿼리를 사용하면서 자바스크립트의 내용 사용가능
    // this를 통해서 이벤트가 발생한 태그를 가져올 수 있음
    // .prop(속성이름)을 통해서 속성값을 가져올 수 있음 
    console.log($(this).prop("checked"));

    if(e.target.checked){
        $("#todo").css("color", "lightgray").addClass("checked")
    }else{
        $("#todo").css("color", "").removeClass("checked")
    }

    // $("#todo span").css({
    //     color : "red"
    // });
});

// 자바스크립트를 이용해서 버튼에 이벤트 넣기
// const btns = document.querySelectorAll("#number_btns button");

// for(let i=0; i<btns.length; i++){
//     btns[i].addEventListener("click", function(e){
//         e.target.style.color = "red";
//         e.target.disabled = "true";
//     })
// }

// $("선택자")를 이용해서 여러개를 가져올 수 있는지
console.log($("#number_btns button"))
$("#number_btns button").on("click", function(){
    $(this).css("color", "red").prop("disabled", "true")
});

