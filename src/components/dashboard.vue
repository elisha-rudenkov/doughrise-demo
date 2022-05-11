<template>
  <div class="dashboard">
    <div class="active-budget">
      <div class="sub-header">
        <h3>Active Budget</h3>
        <div class="add-btn">See all</div>
      </div>

      <ActiveBudgetCard
        color="#dbf6fd"
        bar_color="#096c86"
        :leftover_budget="20"
        :total_budget="100"
      ></ActiveBudgetCard>

      <ActiveBudgetCard
        color="#ffd3e2"
        bar_color="#df3670"
        :leftover_budget="220"
        :total_budget="1400"
      ></ActiveBudgetCard>

      <ActiveBudgetCard
        color="#fee4cb"
        bar_color="#ff942e"
        :leftover_budget="2120"
        :total_budget="2374"
      ></ActiveBudgetCard>
    </div>
    <div class="category">
      <div class="sub-header">
        <h3>Category</h3>
        <div class="add-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-plus-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div>
      </div>

      <CategoryCard
        expenditure_type="Food"
        color="#c8f7dc"
        bar_color="#34c471"
        :leftover_budget="20"
        :total_budget="100"
      ></CategoryCard>

      <CategoryCard
        expenditure_type="Rent"
        color="#fee4cb"
        bar_color="#ff942e"
        :leftover_budget="120"
        :total_budget="2374"
      ></CategoryCard>

      <CategoryCard
        expenditure_type="Insurance"
        color="#ffd3e2"
        bar_color="#df3670"
        :leftover_budget="220"
        :total_budget="1200"
      ></CategoryCard>
    </div>
  </div>
</template>

<script>
import ActiveBudgetCard from "./active-budget-card.vue";
import CategoryCard from "./category-card.vue";

export default {
  name: "DashboardComponent",
  components: { ActiveBudgetCard, CategoryCard },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.dashboard {
  display: flex;
  gap: 5rem;
  width: 100%;
  max-width: 1800px;
  height: 70vh;
  align-items: flex-start;
  padding: 32px 32px;
  margin-bottom: 6rem;
}
.active-budget,
.category {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-basis: auto;
}
.sub-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.add-btn {
  padding: 5px;
  cursor: pointer;
}
.add-btn:hover {
  background-color: rgb(235, 235, 235);
  border-radius: 8px;
}
/* Large screens */
@media only screen and (min-width: 600px) {
}

/* Mid screens */
@media only screen and (max-width: 1100px) {
  .dashboard {
    width: 90%;
  }
}
/* Small screens */
@media only screen and (max-width: 600px) {
  .category {
    display: none;
  }
}
</style>
