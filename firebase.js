<!-- firebase.js -->
<script type="module">
  // Importa Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

  // Configuração ÚNICA do Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyC4h0J54TZqT8XXUsPSL3_ABVJQ05yP4Hc",
    authDomain: "giovanigas-d959b.firebaseapp.com",
    projectId: "giovanigas-d959b",
    storageBucket: "giovanigas-d959b.appspot.com",
    messagingSenderId: "728326355548",
    appId: "1:728326355548:web:9dda06e1c1148337618499",
    measurementId: "G-ESHC9P6XGZ"
  };

  // Inicializa Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  // Exporta para os outros arquivos usarem
  export { app, auth, db, storage };
</script>