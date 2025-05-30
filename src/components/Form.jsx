const inputStyle1 = "w-full focus:outline-none focus:border-b-4 focus:border-0 focus:border-b-orange-400 fade-in-out delay-150 duration-75 transition-2 w-full border-3 border-gray-300 rounded-lg p-2.5 my-2"

export function Button({type, label}){
    return(
        <div>
            <button className="px-5 py-2 bg-primary text-white rounded-md hover:bg-${color}-200 hover:cursor-pointer focus:outline-none" type={type}>{label}</button>
        </div>
    )
} 

export function Validation({type, children}){
    if(type === "error"){
        return(
            <div className="bg-red-200 text-red-500 p-3 rounded" >
                <div className="font-semibold flex flex-col">{children}</div>
            </div>
        )
    }else if(type === "success"){
        return(
            <div className="bg-green-200 text-green-500 p-3 rounded" >
                <div className="font-semibold flex flex-col">{children}</div>
            </div>
        )
    }else if(type === "warning"){
        return(
            <div className="bg-yellow-200 text-green-500 p-3 rounded" >
                <div className="font-semibold flex flex-col">{children}</div>
            </div>
        )
    }else{
        return(<></>)
    }
}

export function TextField({inputId, inputLabel, inputType, placeholder, inputName, onChangeEvent}){
    return(
        <div className="my-3">
            <label className="font-medium text-lg" htmlFor={inputId}>
                {inputLabel}
            </label>
            <input className={inputStyle1} onChange={onChangeEvent} type={inputType} placeholder={placeholder} name={inputName} id={inputId} />
        </div>
    )
}

export function TextArea({inputId, inputLabel, rows, placeholder, inputName, onChangeEvent}){
    return(
        <div className="my-3">
            <label className="font-medium text-lg" htmlFor={inputId}>
                    {inputLabel}
            </label>
            <textarea className={inputStyle1} onChange={onChangeEvent} rows={rows} placeholder={placeholder} name={inputName} id={inputId} />
        </div>
    )
}

export function Dropdown({inputId, inputLabel, option, placeholder, inputName, onChangeEvent}){
    return(
        <div className="my-3">
            <label className="font-medium text-lg" htmlFor={inputId}>
                    {inputLabel}
            </label>
            <select className={inputStyle1} name={inputName} id={inputId} onChange={onChangeEvent}>
                <option className="text-gray-400" value="" selected disabled>
                    {placeholder}
                </option>
                {option.map((value, index) => (
                    <option key={index} value={value}>{value}</option>
                ))}
            </select>
        </div>
    )
}