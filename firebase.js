console.log('firebse file')

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8ee8Jk5IEyFS11cIzemI8R5Y8bPCmfd8",
    authDomain: "mypj-a9478.firebaseapp.com",
    databaseURL: "https://mypj-a9478-default-rtdb.firebaseio.com",
    projectId: "mypj-a9478",
    storageBucket: "mypj-a9478.appspot.com",
    messagingSenderId: "154918779617",
    appId: "1:154918779617:web:1de34a0a470b9c8e6295a0",
    measurementId: "G-42B4D2GEJD"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// firebase 실시간 데이터베이스
const database = firebase.database()

// firebase에 데이터 쓰기
const writeUserData = (userId, name, email) =>{
    firebase.database().ref('users/'+userId).set({
        name : name,
        email : email,
    })
}

// firebase에 있는 데이터 읽기
const readUserData = (userId) => {
    const userRef = firebase.database().ref('users/')

    userRef.once('value').then((res)=>{
        const data = res.val()
        console.log(data)
    })
    
}



/*
    1. addUserBtn 이라는 id를 가진 버튼을 클릭 시
    2. 사용자가 input에 입력한 세개의 데이터를 각각 console창에 찍어보기
*/
let btn = document.getElementById("addUserBtn")
let frm = document.frm.elements

btn.addEventListener("click", () => {
    console.log(frm[0].value)
    console.log(frm[1].value)
    console.log(frm[2].value)

    writeUserData(frm[0].value,frm[2].value,frm[1].value)
})

let getUserBtn = document.getElementById("getUserBtn")

getUserBtn.addEventListener("click", ()=>{
    console.log("get")
    readUserData()
})
