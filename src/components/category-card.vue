<template>
  <div class="category-card" :style="{ 'background-color': color }">
    <div class="date-info">
      <div class="title">{{ expenditure_type }}</div>
      <div id="amount">${{ amount_spent }}</div>
    </div>
    <div class="box-progress-info">
      You spent of <b>${{ percentage }}</b> of {{ total_budget }}
    </div>
    <div class="box-progress-bar">
      <span
        class="box-progress"
        :style="{ width: percentage, 'background-color': bar_color }"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActiveBudgetCard",
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    percentage() {
      return (
        Math.round(100 - (this.leftover_budget / this.total_budget) * 100) + "%"
      );
    },
    amount_spent() {
      return this.total_budget - this.leftover_budget;
    },
  },
  props: {
    color: String,
    bar_color: String,
    total_budget: Number,
    leftover_budget: Number,
    expenditure_type: String,
  },
};
</script>

<style scoped>
.category-card {
  width: 90%;

  border-radius: 30px;
  padding: 32px 40px;
}

.title,
#amount {
  font-weight: bold;
}

.stats,
.date-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total,
.left {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
  padding: 16px 0;
}
#budget-amount {
  font-size: 22px;
}
.date-range {
  display: flex;
  align-items: center;
  gap: 5px;
}

.box-progress {
  display: block;
  height: 4px;
  border-radius: 6px;
}
.box-progress-bar {
  width: 100%;
  height: 4px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff;
  margin: 8px 0;
}
.box-progress-header {
  font-size: 4px;
  font-weight: 700;
  line-height: 16px;
  margin: 0;
}
.box-progress-info {
  text-align: left;
  margin-top: 1rem;
  font-size: 14px;
  line-height: 16px;
}

/* Large screens */
@media only screen and (min-width: 600px) {
}

/* Mid screens */
@media only screen and (max-width: 1100px) {
  .total,
  .left {
    font-size: 17px;
  }
}
/* Small screens */
@media only screen and (max-width: 600px) {
}
</style>
