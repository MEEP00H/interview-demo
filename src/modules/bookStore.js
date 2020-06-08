
export const ADD_BOOK = 'bookStore/ADD_BOOK';
export const REMOVE_BOOK = 'bookStore/REMOVE_BOOK';


const initialState = {
    books: [
        {
            name : 'ALIBABA WORLD',
            whiter : 'Porter Erisman',
            summary : 'ครูคนหนึ่งเติบโตขึ้นจากจุดที่ไม่มีคนรู้จักจนสร้างบริษัทอีคอมเมิร์ชที่ใหญ่ที่สุดในโลกได้'

        },
        {
            name : 'FUTURE',
            whiter : 'ภิญโญ ไตรสุริยธรรมา',
            summary : 'สร้างตัวตนขึ้นมาใหม่ในโลกที่วุ่นวายและโกลาหล'

        },
        {
            name : 'THE MAGIC OF THINKING',
            whiter : 'David J. Schwartz',
            summary : 'ครูคนหนึ่งเติบโตขึ้นจากจุดที่ไม่มีคนรู้จักจนสร้างบริษัทอีคอมเมิร์ชที่ใหญ่ที่สุดในโลกได้'

        },
    ],
    bookStores:[]
}

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_BOOK': 
            return {
                ...state,
                books: [...state.books].filter( item=> item !== [...state.books][action.index]  ),
                bookStores: [...state.bookStores, [...state.books][action.index]]
            }
        case 'REMOVE_BOOK' : 
            return {
                ...state,
                books: [...state.books, state.bookStores[action.index]],
                bookStores: [...state.bookStores].filter( item=> item !== [...state.bookStores][action.index]  ),
                
            }
        default:
            return state;
    }
}