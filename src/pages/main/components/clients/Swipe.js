import styles from "./Swipe.module.scss";
import OwlCarousel from "react-owl-carousel";
import "./owlStyle/owl.carousel.scss";
import "./owlStyle/owl.theme.default.scss";

import card1 from "../../../../assets/clients/card1.png";
import card2 from "../../../../assets/clients/card2.png";
import card3 from "../../../../assets/clients/card3.png";
import card4 from "../../../../assets/clients/card4.png";
import card5 from "../../../../assets/clients/card5.png";
import card6 from "../../../../assets/clients/card6.png";
import card7 from "../../../../assets/clients/card7.png";
import card8 from "../../../../assets/clients/card8.png";
import card9 from "../../../../assets/clients/card9.png";
import card10 from "../../../../assets/clients/card10.png";
import card11 from "../../../../assets/clients/card11.png";
import card12 from "../../../../assets/clients/card12.png";
import card13 from "../../../../assets/clients/card13.png";
import card14 from "../../../../assets/clients/card14.png";
import card15 from "../../../../assets/clients/card15.jpeg";
import card16 from "../../../../assets/clients/card16.png";
import card17 from "../../../../assets/clients/card17.png";
import card18 from "../../../../assets/clients/card18.png";
import card19 from "../../../../assets/clients/card19.png";

const Swipe = () => {
  const items = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
  ];
  return (
    <div className={styles.clients}>
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        {items.map((item) => (
          <div className={styles.item} key={item.id}>
            <img className={styles.img} src={item} alt="clients"></img>
          </div>
        ))}
      </OwlCarousel>
      <h1>fdsfsdf</h1>
    </div>
  );
};

export default Swipe;
