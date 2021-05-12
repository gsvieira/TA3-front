//import axios from 'axios';

/* Endereços para cada emulador/simulador:
** Genymotion:              http://10.0.3.2:3333/
** Emulador Android Studio: http://10.0.2.2:3333/
** Simulador IOS:           http://localhost:3333/
*/


import { create } from 'apisauce'

const api = create({
    baseURL: 'http://10.0.2.2:3333/',
})

api.addRequestTransform(response => {
    if(!response.ok) throw response;
})


export default api; 