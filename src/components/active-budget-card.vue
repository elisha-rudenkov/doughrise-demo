<template>
  <div
    class="active-budget-card"
    :style="{'background-color': color }"
  >
    <div class="date-info">
      <div class="month">April Budget</div>
      <div class="date-range">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-calendar"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        4.11 - 5.10
      </div>
    </div>
    <div class="stats">
      <div class="total">
        Budget
        <div id="budget-amount">${{ total_budget }}</div>
      </div>
      <div>|</div>
      <div class="left">
        Left
        <div id="budget-amount">${{ leftover_budget }}</div>
      </div>
    </div>
    <div class="box-progress-bar">
      <span
        class="box-progress"
        :style="{ width: percentage, 'background-color': bar_color }"
      ></span>
    </div>

    <div class="box-progress-info">
      You spent of <b>${{ amount_spent }}</b> of {{ total_budget }}
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
      return 100 - (this.leftover_budget / this.total_budget) * 100 + "%";
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
  },
};
</script>

<style scoped>
.active-budget-card {
  width: 90%;

  border-radius: 30px;
  padding: 32px 40px;
}

.month {
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
  height: 20px;
  border-radius: 6px;
}
.box-progress-bar {
  width: 100%;
  height: 20px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff;
  margin: 8px 0;
}
.box-progress-header {
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  margin: 0;
}
.box-progress-info {
  text-align: left;
  margin: 0;
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
