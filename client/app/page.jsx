import styles from "./Home.module.css";
import Featured from "./_components/Featured/Featured";
import CategoryList from "./_components/CategoryList/CategoryList";
import CardList from "./_components/CardList/CardList";
import Menu from "./_components/Menu/Menu";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
