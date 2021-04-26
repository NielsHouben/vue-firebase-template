<template>
  <div class="card card-body mt-4">
    <h3>Edit users</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Title</label>
        <input
          v-model="form.title"
          class="form-control"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Price</label>
        <input
          v-model="form.price"
          class="form-control"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Weight</label>
        <input
          v-model="form.weight"
          class="form-control"
          required
        />
      </div>

      <button
        type="submit"
        class="btn btn-success mt-3"
      >
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getItem, updateItem } from '@/firebase/firestore/items'
// import { updateItem } from '@/firebase/firestore/items'

export default {
  setup () {
    const router = useRouter()
    const route = useRoute()
    const itemId = computed(() => route.params.id)

    const form = reactive({ title: '', price: '', weight: '' })
    onMounted(async () => {
      const item = await getItem(itemId.value)
      console.log(item, itemId.value)
      form.title = item.title
      form.price = item.price
      form.weight = item.weight

    })

    const update = async () => {
      await updateItem(itemId.value, { ...form })
      router.push('/')
      form.title = ''
      form.price = ''
      form.weight = ''
    }

    return { form, update }
  }
}
</script>
