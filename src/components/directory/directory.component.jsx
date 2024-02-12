import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = (props) => {
  const { category } = props;
  return (
    <div className="directory-container">
      {category.map((cat) => (
        <CategoryItem key={cat.id} cat={cat} />
      ))}
    </div>
  );
};
export default Directory;
