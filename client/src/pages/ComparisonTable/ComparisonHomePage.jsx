import { Link } from "react-router-dom";
import styles from "./ComparisonHomePage.module.css";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import woodenDesk from "../../assets/wooden-desk.png";
import addProductBtn from "../../assets/add-product-icon.png";
import rimuDesk from "../../assets/solid-rimu-desk.png";
import teakDesk from "../../assets/solid-teak-study-desk.png";

function ComparisonHomePage() {
  return (
    <div>
      <Header />
      <div className={styles.homePageContainer}>
        <div className={styles.headerTitles}>
          <p className={styles.paths}>Home / Marketplace / Comparison Table</p>
          <h1 className={styles.header1}>COMPARISON TABLE</h1>
          <p className={styles.para1}>1 Category</p>
        </div>

        {/* page content */}
        <div className={styles.content}>
          <Link to="/comparison/table" className={styles.link}>
            <div className={styles.btnContainer}>
              <h2 className={styles.header2}>WOODEN DESKS</h2>
              <div className={styles.imgContainer}>
                <img
                  className={styles.img}
                  src={woodenDesk}
                  alt="wooden desk"
                />

                <img className={styles.img} src={rimuDesk} alt="rimu desk" />

                <img className={styles.img} src={teakDesk} alt="teak desk" />
              </div>

              {/* view comparison button */}

              <button className={styles.viewComparisonBtn}>
                View Comparison Table
              </button>
            </div>
          </Link>
          {/* create category button */}
          <button className={styles.createCategoryBtn}>
            <img src={addProductBtn} alt="add product" />
            <br />
            Create new Category
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ComparisonHomePage;
