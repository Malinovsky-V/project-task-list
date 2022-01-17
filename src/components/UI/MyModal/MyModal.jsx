import classes from "./MyModal.module.css";

export default function MyModal({ children, visible, setVisible }) {
  console.log(children);
  const rootClasses = [classes.myModal];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={(e) => e.stopPropagation()}>
      <div className={classes.myModalContent}>
        <span className="closebtn" onClick={() => setVisible(false)}>
          X
        </span>
        {children}
      </div>
    </div>
  );
}
