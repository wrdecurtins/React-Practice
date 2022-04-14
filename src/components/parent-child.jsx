export function Parent(props){
    return (
        <div>
            <h3>Parent</h3>
            {props.children}
        </div>
    );
};

export function child({num}){
    return (
        <h5>child: {num}</h5>
    );
};

export function manyChildren(num){
    let children = [];
    for(let i=0; i<num; i++){
        children.push(child({num: i}));
    }
    return (
        <>
        {children}
        </>
    );
};
