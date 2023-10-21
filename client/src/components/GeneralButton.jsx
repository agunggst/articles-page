const GeneralButton = ({ label, onButtonClick }) => {
  return (
    <>
      <button onClick={onButtonClick} className="general-button">{label}</button>
    </>
  )
}
 
export default GeneralButton