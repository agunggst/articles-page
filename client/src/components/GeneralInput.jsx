const GeneralInput = ({ props, inputValue, label, onInputChange }) => {
  return (
    <>
      <p className="default-label">{label}</p>
      <input value={inputValue} onChange={e => onInputChange(e.target.value)} {...props} className="default-input"/>
    </>
  )
}
 
export default GeneralInput