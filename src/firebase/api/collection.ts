import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export enum QueryOperator {
  EQUALS = "==",
  GREATER = ">",
  LESS = "<",
}

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

  async getDocs(
    property: keyof T,
    operator: QueryOperator,
    value: string | number
  ): Promise<DocumentData[] | null> {
    try {
      const docs: DocumentData[] = [];
      const q = query(this.ref, where(property.toString(), operator, value));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(
        (doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => {
          docs.push(doc.data());
        }
      );
      return docs;
    } catch {
      console.error("failed to query for docs");
    }
    return null;
  }
}
