// import React, { useState, useEffect } from "react";
// import { db } from "../firebase";

// export const Chat = () => {
//   const [messages, setMessages] = useState();
//   useEffect(() => {
//     db.collection("messages").orderBy("createdAt").limit(50).onSnapShot(snapshot => {
//       setMessages(snapshot.docs.map(doc => doc.data()))
//     })
//   }, [])
//   return (
//     <div>div</div>

//   )
// };

// import React, { useState, useMemo, useEffect } from "react";
// import db from "../firebase";

// /**
//  * ユーザー名 (localStrageに保存)
//  **/
// const getUserName = () => {
//   const userName = localStorage.getItem("firebase-Chat1-username");
//   if (!userName) {
//     const inputName = window.prompt("ユーザー名を入力してください", "");
//     if (inputName) {
//       localStorage.setItem("firebase-Chat1-username", inputName);
//       return inputName;
//     }
//   }
//   return userName;
// };

// /**
//  * UNIX TIME => hh:mm
//  **/
// function getStrTime(time) {
//   let t = new Date(time);
//   return (
//     `${t.getHours()}`.padStart(2, "0") +
//     ":" +
//     `${t.getMinutes()}`.padStart(2, "0")
//   );
// }

// /**
//  * チャットコンポーネント(Line風)
//  */
// export const ChatForm = () => {
//   const [chatLogs, setChatLogs] = useState([]);
//   const [msg, setMsg] = useState("");
//   const userName = useMemo(() => getUserName(), []);
//   const messagesRef = useMemo(
//     () => db.collection("chatroom").doc("room1").collection("messages"),
//     []
//   );

//   useEffect(() => {
//     // 同期処理イベント（最新10件をとるためdateでソート)
//     messagesRef
//       .orderBy("date", "desc")
//       .limit(10)
//       .onSnapshot((snapshot) => {
//         snapshot.docChanges().forEach((change) => {
//           if (change.type === "added") {
//             // チャットログへ追加
//             addLog(change.doc.id, change.doc.data());
//             // 画面下部へスクロール
//             window.scroll(
//               0,
//               document.documentElement.scrollHeight -
//                 document.documentElement.clientHeight
//             );
//           }
//         });
//       });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   /**
//    * チャットログに追加
//    */
//   function addLog(id, data) {
//     const log = {
//       key: id,
//       ...data,
//     };
//     // Firestoreから取得したデータは時間降順のため、表示前に昇順に並び替える
//     setChatLogs((prev) =>
//       [...prev, log].sort((a, b) => a.date.valueOf() - b.date.valueOf())
//     );
//   }

//   /**
//    * メッセージ送信
//    */
//   const submitMsg = async () => {
//     if (msg.length === 0) {
//       return;
//     }

//     messagesRef.add({
//       name: userName,
//       msg: msg,
//       date: new Date().getTime(),
//     });

//     setMsg("");
//   };

//   return (
//     <>
//       {/* チャットログ */}
//       <div>
//         {chatLogs.map((item, i) => (
//           <div
//             className={userName === item.name ? "balloon_r" : "balloon_l"}
//             key={item.key}
//           >
//             {userName === item.name ? getStrTime(item.date) : ""}
//             <div className="faceicon">
//               <img
//                 src={userName === item.name ? "./img/cat.png" : "./img/dog.png"}
//                 alt=""
//               />
//             </div>
//             <div style={{ marginLeft: "3px" }}>
//               {item.name}
//               <p className="says">{item.msg}</p>
//             </div>
//             {userName === item.name ? "" : getStrTime(item.date)}
//           </div>
//         ))}
//       </div>

//       {/* メッセージ入力 */}
//       <form
//         className="chatform"
//         onSubmit={(e) => {
//           submitMsg();
//           e.preventDefault();
//         }}
//       >
//         <div>{userName}</div>
//         <input
//           type="text"
//           value={msg}
//           onChange={(e) => setMsg(e.target.value)}
//         />
//         <input
//           type="image"
//           onClick={submitMsg}
//           src="./img/airplane.png"
//           alt=""
//         />
//       </form>
//     </>
//   );
// };
