export function ContainerRow({children}){
    return(
        <div>
            <div className="flex flex-row gap-5 p-2 mx-35">
                {children}
            </div>
        </div>
    )
}

export function ContainerCol({children}){
    return(
        <div>
            <div className="flex flex-col gap-5 p-2 mx-35">
                {children}
            </div>
        </div>
    )
}
