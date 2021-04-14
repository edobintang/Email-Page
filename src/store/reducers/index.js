const initialState = {
    dataCustomers: [
        {
            email: 'edo@mail.com',
            nama: 'Edouardo B R',
            telepon: "08564766577",
            alamat: "Serdang Serang"
        },
        {
            email: 'bintang@mail.com',
            nama: 'E Bintang R',
            telepon: "0856476121",
            alamat: "Kramatwatu Serang"
        },
        {
            email: 'rokatenda@mail.com',
            nama: 'E B Rokatenda',
            telepon: "08564766576",
            alamat: "Cilegon Banten"
        },
        {
            email: 'brenda@mail.com',
            nama: 'Brenda Brandon',
            telepon: "08121212434",
            alamat: "Banyuwangi Jawa Timur"
        },
        {
            email: 'excel@mail.com',
            nama: 'Excel excelio',
            telepon: "0846736482",
            alamat: "Kebalenan Banyuwangi"
        },
    ],
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'fetch_data':
            return state
        default:
            return state
    }
}

export default reducer