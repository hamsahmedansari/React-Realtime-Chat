import action from "../constant/chat";
// Users
export function ChangeSelectedUser(uid, roomId) {
  return (dispatch, getState) => {
    dispatch({ type: action.CHANGE_SELECTED_USER, payload: { uid, roomId } });
  };
}

// Message
// Create
export function CreateMessage(roomId, ownUid, message) {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("chatRooms")
      .doc(roomId)
      .collection("messages")
      .add({
        createdBy: ownUid,
        createAt: new Date().getTime(),
        isSeen: false,
        message: String(message).trim()
      });
  };
}

// Rooms
// Get
// Create & isExist
export function CreateChatRoom(firestore, ownUid, secondUid) {
  // return (dispatch, getState, { getFirestore }) => {
  // const firestore = getFirestore();
  return IsRoomExistInUser(firestore, ownUid, secondUid).then(data => {
    if (!data.exists) {
      // checkRoom in chatRoom
      return CreateChatRoomInChatRoom(firestore, ownUid, secondUid).then(
        res => {
          return CreateRoomInUser(firestore, ownUid, secondUid, res.id).then(
            response => {
              return CreateRoomInUser(
                firestore,
                secondUid,
                ownUid,
                res.id
              ).then(r => res.id);
            }
          );
        }
      );
    }
  });
  // };
}

// function IsRoomExistInChatRoom(firestore, uid) {
//   return firestore
//     .collection("chatRooms")
//     .doc(uid)
//     .get();
// }

function CreateChatRoomInChatRoom(firestore, ownUid, secondUid) {
  return firestore.collection("chatRooms").add({
    createAt: new Date().getTime(),
    firstUser: ownUid,
    secondUser: secondUid
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
