import 'firebase/auth';
import 'firebase/database';
import app from '../Firebase/config'
 class FirebaseAuth{
  constructor() {
      /* Firebase APIs */

      this.auth = app.auth();
      this.db = app.database();
  
      /* Social Sign In Method Provider */
  
      this.googleProvider = new app.auth.GoogleAuthProvider();
      this.facebookProvider = new app.auth.FacebookAuthProvider();
      this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () =>
    this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);



 }

 export default FirebaseAuth;