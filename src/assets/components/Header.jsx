import { Nav } from "./Nav";
import Hero_image from "../images/Hero.jpg";
export const Header = (props) => {
  return (
    <header>
      <Nav />
      <h1>{props.title}</h1>
      <section id="primer">
        <h2>HAIRSTYLIST OG FRISØR</h2>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quisquam exercitationem quos vitae suscipit excepturi
            doloribus laboriosam dicta sed numquam. Iusto cupiditate veritatis
            voluptates reiciendis, minima praesentium molestias cum esse.
          </p>
        </article>
      </section>
    </header>
  );
};
