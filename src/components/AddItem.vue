<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
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
        Add Item
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { createItem } from '@/firebase/firestore/items'

export default {
  setup () {
    const form = reactive({ title: '', price: '', weight: '' })

    const onSubmit = async () => {
      await createItem({ ...form })
      form.title = ''
      form.price = ''
      form.weight = ''
    }

    return { form, onSubmit }
  }
}
</script>
