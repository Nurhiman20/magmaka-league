<template>
  <main>
    <section id="hero">
      <v-container fluid class="h-100">
        <v-row class="h-100">
          <v-col cols="12" md="6" lg="6" xl="6">
            <h1 id="hero-title"><span class="text-primary">ADRILSYAH</span><br>ADNAN CUP<br>2022</h1>
          </v-col>
          <v-col cols="12" md="6" lg="6" xl="6" class="d-flex flex-column h-100">
            <div id="hero-desc" class="mt-auto">
              <p>Presented by</p>
              <p class="font-weight-black">MAGMAKA FC</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<style lang="scss" scoped>
#hero {
  height: 120vh;
  padding-top: 64px;
  background-image: url('@/assets/images/hero-bg.png');
  background-size: cover;
  position: relative;
  &-title {
    font-size: 84px;
    font-style: italic;
    line-height: 6rem;
    margin-top: 80px;
    margin-left: 30px;
  }
  &-desc {
    margin-left: 120px;
    p {
      font-size: 24px;
      font-style: italic;
      color: white;
    }
  }
}
</style>
