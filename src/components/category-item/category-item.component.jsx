import "./category-item.styles.scss";

const CategoryItem = (props) => {
  const { cat } = props;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${cat.img})` }}
      />
      <div className="category-body-container">
        <h2>{cat.title}</h2>
        <p>Shop Now!</p>
      </div>
    </div>
  );
};
export default CategoryItem;
