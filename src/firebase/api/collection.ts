import {
  CollectionReference,
  DocumentReference,
  addDoc,
  collection,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export class Collection<T extends { [x: string]: any }> {
  ref: CollectionReference;

  constructor(collectionName: string) {
    this.ref = collection(db, collectionName);
  }

  async createDoc(data: T): Promise<DocumentReference | null> {
    try {
      const docRef = await addDoc(this.ref, data);
      return docRef;
    } catch {
      console.error("unable to create doc with data ", data);
    }
    return null;
  }
}
