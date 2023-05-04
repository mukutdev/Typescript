const chekcNullValue = (value : string | null) =>{
    if(value === null) {
        console.log('there is nothing to search')
    }else{
        console.log('Searching.....')
    }
}

chekcNullValue('')