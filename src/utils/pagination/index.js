'use strict'

const centerRule = ({total,activePage}) => {
    if(activePage -1 <= 0){
        return 1
    }
    return activePage -1
}

const pagination = ({total, activePage}) => {
    if(total <= 5) {
        return Array.from({length: total}, (_, i) => i + 1)
    }

    let visiblePages = 3

    let pages = [
        1,
        ...Array.from({length:visiblePages}, (_,i) => i + centerRule(total,activePage)),
        total
    ]

    /*const firstPage = pages[0]
    const secondPage = pages[1]

    if(secondPage == firstPage){

    }*/

    pages = pages.filter((page,index,array) => array.indexOf(page) === index)

    return pages
}

export default pagination
