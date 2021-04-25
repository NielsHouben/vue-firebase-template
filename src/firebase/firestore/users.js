import { ref, onUnmounted } from 'vue'
import { db } from '@/firebase/firebase'

const Collection = db.collection('users')

export const createUser = user => {
    return Collection.add(user)
}

export const getUser = async id => {
    const user = await Collection.doc(id).get()
    return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
    return Collection.doc(id).update(user)
}

export const deleteUser = id => {
    return Collection.doc(id).delete()
}

export const LoadUsers = () => {
    const users = ref([])
    const close = Collection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return users
}
