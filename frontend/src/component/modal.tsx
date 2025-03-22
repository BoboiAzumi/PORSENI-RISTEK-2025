type modalObject = {
    show: boolean
    className: string
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    setShow: Function
    children: React.ReactNode
}

export function Modal(props: modalObject){
    return (
        <>
            <div 
                className={"fixed w-full min-h-[100vh] " + (props.show? "" : "hidden")}
                onClick={() => props.setShow(false)}
            />
            <div className={props.className+" fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] items-center z-30 " + (props.show? "" : "hidden")}
                onClick={() => { return }}>
                {props.children}
            </div>
        </>
    )
}