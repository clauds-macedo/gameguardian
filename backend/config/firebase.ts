import * as admin from "firebase-admin";
import config from "../serviceAccountKey";

admin.initializeApp({
  credential: admin.credential.cert(config),
  databaseURL: "https://gameguardian-5c609-default-rtdb.firebaseio.com",
});

const rtdb = admin.database();
export const ref = rtdb.ref