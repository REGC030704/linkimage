import styles from "@/styles/index.module.css";
import Navigation from "./components/Navigation";
import Footer from "./components/footer";
import SelfiePollo from "./components/SelfiePollo";

export default function Home() {
  return (
    <main className={styles.container}> {}
      <Navigation/>
      <SelfiePollo></SelfiePollo>
      <Footer></Footer>
    </main>
  );
}
