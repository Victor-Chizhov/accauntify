<template>
  <section>
    <div class="row">
      <h1> {{ $t('comments.title') }} </h1>
      <div>
        <div class="carousel-container">
          <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="false">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="col-lg px-5">
                  <div class="py-5">
                    <div class="row">
                      <div class="col-md-3 flex">
                        <img class="rounded-circle img-size" src="../assets/mans/Artem.jpg" alt="">
                      </div>
                      <div class="col-md-9">
                        <p class="fs-6 mb-4">
                          {{ $t('comments.1.description') }}
                        </p>
                        <h1 class="fs-5">
                          {{ $t('comments.1.name') }}
                        </h1>
                        <p class="opacity-75 mb-3 font-size">
                          {{ $t('comments.1.organization') }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-lg px-5">
                  <div class="py-5">
                    <div class="row">
                      <div class="col-md-3 flex">
                        <img class="rounded-circle img-size" src="../assets/mans/Sergey.jpg" alt="">
                      </div>
                      <div class="col-md-9">
                        <p class="fs-6 mb-4">
                          {{ $t('comments.2.description') }}
                        </p>
                        <h1 class="fs-5">
                          {{ $t('comments.2.name') }}
                        </h1>
                        <p class="opacity-75 mb-3 font-size">
                          {{ $t('comments.2.organization') }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-lg px-5">
                  <div class="py-5">
                    <div class="row">
                      <div class="col-md-3 flex">
                        <img class="rounded-circle img-size" src="../assets/mans/Andrey.jpg" alt="">
                      </div>
                      <div class="col-md-9">
                        <p class="fs-6 mb-4">
                          {{ $t('comments.3.description') }}
                        </p>
                        <h1 class="fs-5">
                          {{ $t('comments.3.name') }}
                        </h1>
                        <p class="opacity-75 mb-3 font-size">
                          {{ $t('comments.3.organization') }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-lg px-5">
                  <div class="py-5">
                    <div class="row">
                      <div class="col-md-3 flex">
                        <img class="rounded-circle img-size" src="../assets/mans/Elena.jpg" alt="">
                      </div>
                      <div class="col-md-9">
                        <p class="fs-6 mb-4">
                          {{ $t('comments.4.description') }}
                        </p>
                        <h1 class="fs-5">
                          {{ $t('comments.4.name') }}
                        </h1>
                        <p class="opacity-75 mb-3 font-size">
                          {{ $t('comments.4.organization') }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-lg px-5">
                  <div class="py-5">
                    <div class="row">
                      <div class="col-md-3 flex">
                        <img class="rounded-circle img-size" src="../assets/mans/Anna.jpg" alt="">
                      </div>
                      <div class="col-md-9">
                        <p class="fs-6 mb-4">
                          {{ $t('comments.5.description') }}
                        </p>
                        <h1 class="fs-5">
                          {{ $t('comments.5.name') }}
                        </h1>
                        <p class="opacity-75 mb-3 font-size">
                          {{ $t('comments.5.organization') }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-lg px-5">
                  <div class="py-5">
                    <p class="fs-6 mb-4">
                      {{ $t('comments.6.description') }}
                    </p>
                    <h1 class="fs-5">
                      {{ $t('comments.6.name') }}
                    </h1>
                    <p class="mb-3 opacity-75 font-size">
                      {{ $t('comments.6.organization') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
</script>

<style scoped>
.img-size {
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.flex {
  display: flex;
  justify-content: space-evenly;
}

.font-size {
  font-size: 0.8rem;
}

.carousel-container {
  overflow: hidden;
}
.carousel-indicators [data-bs-target] {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
.carousel-dark .carousel-indicators [data-bs-target] {
  background-color: #7882ad;
}

.carousel-control-next {
  justify-content: end;
}

.carousel-control-prev {
  justify-content: start;
}

@media (max-width: 767px) {
  .flex {
    display: block;
  }
}


</style>