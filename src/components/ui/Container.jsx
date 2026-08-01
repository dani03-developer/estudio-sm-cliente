const Container = (props)=>{
  const {classNameContainer} = props;
  return(
    <div className={classNameContainer}>
      {props.children}
    </div>
  );
};
export default Container;