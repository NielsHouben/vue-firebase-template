<template>
  <div class="section">
    <h1>Items</h1>
    <AddItem />
    <ItemList />
  </div>
  <div class="section">
    <h1>Users</h1>
    <UserCreate />
    <UserList />
  </div>
</template>

<script>
import UserCreate from '@/components/UserCreate.vue'
import UserList from '@/components/UserList.vue'
import AddItem from '@/components/AddItem.vue'
import ItemList from '@/components/ItemList.vue'

export default {
  name: 'Home',
  components: { UserCreate, UserList, AddItem, ItemList }
}
</script>

<style scoped>
.section {
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 30px;
  border: 1px solid;
  border-radius: 20px;
}
</style>