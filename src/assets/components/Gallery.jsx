export const Gallery = (props) => {
  return (
    <section id="gallery">
      <h3>FOLLOW US ON INSTAGRAM</h3>
      <section id="gallery_images">
        {props.Gallery_images.map((item, index) => (
        //   <img key={item} src={`../src/assets/images/${item}`} alt="" />
        <div
        key={index}
        style={{backgroundImage:`url(../src/assets/images/${item})`}}
        >

        </div>
        ))}
      </section>
    </section>
  );
};
