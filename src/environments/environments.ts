export const environments = {
    getContacts: 'http://localhost:3000/api/contact/consultarContactos/',
    getContactById: 'http://localhost:3000/api/contact/consultarContactoPorId/',
    getContactsInactive: 'http://localhost:3000/api/contact/consultarContactosInactivos/',
    createContact: 'http://localhost:3000/api/contact/crearContacto/',
    updateContact: 'http://localhost:3000/api/contact/actualizarContacto/',
    inactiveContact: 'http://localhost:3000/api/contact/desactivarContacto/',
    deleteContact: 'http://localhost:3000/api/contact/eliminarContacto/',
}

export const authEnvironments = {
    login: 'http://localhost:3000/api/auth/login',
    createUser: 'http://localhost:3000/api/auth/crearUsuario'
}