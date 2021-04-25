import { ref, onUnmounted } from 'vue'
import { db } from '@/firebase/firebase'

const Collection = db.collection('Items')

export const createItem = item => {
    return Collection.add(item)
}

export const getItem = async id => {
    const item = await Collection.doc(id).get()
    return item.exists ? item.data() : null
}

export const updateItem = (id, item) => {
    return Collection.doc(id).update(item)
}

export const deleteItem = id => {
    return Collection.doc(id).delete()
}

export const LoadItems = () => {
    const items = ref([])
    const close = Collection.onSnapshot(snapshot => {
        items.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return items
}
