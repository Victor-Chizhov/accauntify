<template>
  <section>
    <div class="row mt-5 mb-5 pb-5 bg-color">
      <div class="col-12 col-lg-6 mt-5">
        <h2 class="text-dark fs-1">
          {{ $t('questions.title') }}
        </h2>
      </div>
      <div class="col-12 col-lg-6 mt-5 text-dark fs-6">
        <div
            class="accordion"
            id="accordionPanelsStayOpenExample"
        >
          <div class="accordion-item border-top-0">
            <h2
                class="accordion-header"
                id="panelsStayOpen-headingOne"
            >
              <button
                  class="accordion-button collapsed fs-4 my-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne"
              >
                {{ $t('questions.1.title') }}
              </button>
            </h2>
            <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <p>
                  {{ $t('questions.1.description', 1) }}
                </p>
                <p>
                  {{ $t('questions.1.description', 2) }}
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2
                class="accordion-header"
                id="panelsStayOpen-headingTwo"
            >
              <button
                  class="accordion-button collapsed fs-4 my-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
              >
                {{ $t('questions.2.title') }}
              </button>
            </h2>
            <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body">
                <p>
                  {{ $t('questions.2.description', 0) }}
                </p>
                <p>
                  {{ $t('questions.2.description', 1) }}
                </p>
                <p>
                  {{ $t('questions.2.description', 2) }}
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2
                class="accordion-header"
                id="panelsStayOpen-headingThree">
              <button
                  class="accordion-button collapsed fs-4 my-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
              >
                {{ $t('questions.3.title') }}
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                 aria-labelledby="panelsStayOpen-headingThree">
              <div class="accordion-body">
                <p>
                  {{ $t('questions.3.description') }}
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2
              class="accordion-header"
              id="panelsStayOpen-headingFour">
              <button
                class="accordion-button collapsed fs-4 my-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                {{ $t('questions.4.title') }}
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse"
                 aria-labelledby="panelsStayOpen-headingFour">
              <div class="accordion-body">
                <p>
                  {{ $t('questions.4.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>

.bg-color {
  width: 100%;
  border-radius: 25px;
}

.accordion-item {
  border-right: none;
  border-left: none;
  transition: none;
  --acordion-bg-color: #F2F2F2;
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-plus-circle' viewBox='0 0 16 16'%3E%3Cpath d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/%3E%3Cpath d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z'/%3E%3C/svg%3E");
  transition: all 0.5s;
}

.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-dash-circle' viewBox='0 0 16 16'%3E%3Cpath d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/%3E%3Cpath d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z'/%3E%3C/svg%3E");
}

.accordion {
  --bs-accordion-active-bg: none;
  --bs-accordion-active-color: none;
  --bs-accordion-btn-focus-box-shadow: none;
}

</style>