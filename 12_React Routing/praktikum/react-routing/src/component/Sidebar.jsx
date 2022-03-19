import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { navMenuLinks } from "../data/navMenuLinks";

export default function Sidebar(props) {
  return (
    <nav
      className={styles.container + " " + (props.isActive ? styles.active : "")}
    >
      <ul className={styles.sidebarMenu}>
        {navMenuLinks.map((navMenuLink) => (
          <li className={styles.sidebarLink}>
            <NavLink to={navMenuLink.path}>
              {navMenuLink.icon}
              <span>{navMenuLink.pageName}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
