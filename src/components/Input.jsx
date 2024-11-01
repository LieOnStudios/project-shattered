const Input = ({ id, label, bgColour }) => {
  return (
    <div className='relative grid w-full' style={{'--input-bg': bgColour}}>
        <input id={id} type='text' placeholder={label} 
        className='input px-2 py-1.5 border-none rounded-md focus:shadow-input-selected shadow-input-unselected outline-none bg-grey-200 text-grey-950 shadow-primary-100 placeholder:opacity-0 caret-primary-100 transition-all'
        />
        <label htmlFor={id} 
        className='input-label cursor-text mx-1 px-1 absolute top-1/2 -translate-y-1/2 bg-grey-200 text-grey-900 transition-all'>
            {label}
        </label>
    </div>
  );
}

export default Input;