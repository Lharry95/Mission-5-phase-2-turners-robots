import { Link } from "react-router-dom";
import styles from "./ComparisonHomePage.module.css";

function ComparisonHomePage() {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.content}>COMPARISON TABLE</div>
      <p>1 Category</p>
      <Link to="/comparison/table">
        <button className={styles.goToBtn}>View Comparison Table</button>
      </Link>
    </div>
  );
}

export default ComparisonHomePage;
