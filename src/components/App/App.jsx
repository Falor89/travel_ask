import Chats from '../Chats/Chats';
import PeopleReview from '../PeopleReview/PeopleReview';
import Review from '../Review/Review';
import styles from './app.module.css';

function App() {



  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <Review />
        <PeopleReview />
        <Chats />
      </main>
    </div>
  );
}

export default App;
