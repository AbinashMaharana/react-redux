export function movieslist(){
    return {
        type:'MOVIES_LIST',
        payload:[
            {id:1, name:'pulp fiction'},
            {id:2, name:'True lies'}
        ]

    }
}

export function deirectorslist(){
    return {
        type:'DEIRECTORS_LIST',
        payload:[
            {id:1, name:'Anuvab'},
            {id:2, name:'Ashok'}
        ]

    }
}