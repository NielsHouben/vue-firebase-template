<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Weight</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ id, title, weight, price } in items"
          :key="id"
        >
          <td>{{ title }}</td>
          <td>{{ weight }}</td>
          <td>{{ price }}</td>
          <td>
            <router-link :to="`/edit/item/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button
              class="btn btn-danger btn-sm"
              @click="deleteItem(id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { LoadItems, deleteItem } from '@/firebase/firestore/items'

export default {
  setup () {
    const items = LoadItems()
    return { items, deleteItem }
  }
}
</script>
