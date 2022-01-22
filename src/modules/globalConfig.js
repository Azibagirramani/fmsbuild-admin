import "../utils/firebase";
import { fireStorage } from "../utils/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
// const store = getFirestore();

const documentName = "system-conf";
const documentPath = "global.scope";

// default global configuration scope for all modules
const GlobalConfig = {
  scope: "global.scope",
  rules: [
    {
      type: "global.funds",
      ok: true,
    },
    {
      type: "global.projects",
      ok: true,
    },
    {
      type: "global.finance",
      ok: true,
    },
    {
      type: "global.settings",
      ok: true,
    },
  ],
};

// store systems settings
export async function Configuration() {
  try {
    await setDoc(doc(fireStorage, documentName, documentPath), GlobalConfig);
  } catch (error) {
    console.log(error.message);
  }
}

export async function getConfiguration() {
  // console.log("here")
  try {
    const collected = doc(fireStorage, documentName, documentPath);
    const data = await getDoc(collected);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// update data on firebase
export async function updateConfiguration() {
  try {
    // await setDoc(doc(store, "system-conf"), data);
  } catch (error) {
    console.log(error.message);
  }
}
