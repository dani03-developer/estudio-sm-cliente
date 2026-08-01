import Logo from '../../img/Group 30.svg'
const LoaderComponent = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f7f4ee]">
      <img
        src={Logo}
        alt="Estudio Integral SM"
        className="w-40 animate-pulse"
      />
    </div>
  );
};
export default LoaderComponent;