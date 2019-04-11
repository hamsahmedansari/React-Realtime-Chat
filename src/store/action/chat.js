import action from "../constant/chat";

export function ChangeSelectedUser(uid) {
  return (dispatch, getState) => {
    dispatch({ type: action.CHANGE_SELECTED_USER, payload: { uid } });
  };
}

export function CreateChatRoom(ownUid, secondUid) {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    IsRoomExistInUser(firestore, ownUid, secondUid).then(data => {
      if (!data.exists) {
        // checkRoom in chatRoom
        CreateChatRoomInChatRoom(firestore).then(res => {
          CreateRoomInUser(firestore, ownUid, secondUid, res.id).then(
            response => {
              console.log(response);
            }
          );
        });
      }
    });
  };
}

// function IsRoomExistInChatRoom(firestore, uid) {
//   return firestore
//     .collection("chatRooms")
//     .doc(uid)
//     .get();
// }

function CreateChatRoomInChatRoom(firestore) {
  return firestore.collection("chatRooms").add({
    createAt: "i dont know"
  });
}

function IsRoomExistInUser(firestore, uid, secondUid) {
  return firestore
    .collection("users")
    .doc(uid)
    .collection("chatRooms")
    .doc(secondUid)
    .get();
}

function CreateRoomInUser(firestore, uid, secondUserUid, roomUid) {
  return firestore
    .collection("users")
    .doc(uid)
    .collection("chatRooms")
    .doc(secondUserUid)
    .set({
      roomUid: roomUid
    });
}
