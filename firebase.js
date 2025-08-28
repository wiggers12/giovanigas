// firebase.js
// Este é o seu arquivo central de configuração do Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// SUAS CREDENCIAIS DO FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyC4h0J54TZqT8XXUsPSL3_ABVJQ05yP4Hc",
    authDomain: "giovanigas-d959b.firebaseapp.com",
    projectId: "giovanigas-d959b",
    storageBucket: "giovanigas-d959b.firebasestorage.app",
    messagingSenderId: "728326355548",
    appId: "1:728326355548:web:9dda06e1c1148337618499",
    measurementId: "G-ESHC9P6XGZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// A função que verifica a autenticação, agora no seu arquivo firebase.js
export function checkUserAuth(callback) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Se o usuário estiver logado, executa o callback
            callback(user);
        } else {
            // Se não, redireciona para a página de login
            window.location.href = 'index.html';
        }
    });
}
