export default props => {

    const elseChild = props.children.filter(kid =>{
        return kid.type && kid.type.name === 'Else'
    })[0]
    const ifChild = props.children.filter(kid =>{
        return kid !== elseChild
    })

        if(props.test){
            return ifChild
        }else if(elseChild){
            return elseChild
        }else {
            return false
        }
}

export const Else = props => props.children