<template>
  <div class="students">
    <div class="container-fluid search-wrapper">
      <p>
        <input
          class="form-control ds-input"
          id="myInput"
          type="text"
          placeholder="Search name, cuisine, neighborhood…"
        />
      </p>
      <div class="bt-filter">
        <div class="set-1">
          <div class="line">
            <button class="btn choose-from" type="button">CHOOSE FROM</button>
            <!-- <button class="btn bkrw-tags" type="button">Z to A</button> -->
            <button class="btn bkrw-tags" type="button" value="Editor Pick!">Editor Pick!</button>
            <button class="btn bkrw-tags" type="button" value="Best Value">Best Value</button>
          </div>
        </div>
        <div class="set-2" style="display: none">
          <div class="line">
            <button class="btn bkrw-tags" type="button" value="Top Tables">Top Tables</button>
            <button class="btn bkrw-tags" type="button" value="Award-Winning">Award-Winning</button>
            <button class="btn bkrw-tags" type="button" value="Drink Deals">Drink Deals</button>
            <button class="btn bkrw-tags" type="button" value="Date Night">Date Night</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container content">
      <div clas="row">
        <vue-simple-spinner
          v-show="loading"
          size="medium"
          message="Loading..."
          line-fg-color="#EEEEEE"
          line-bg-color="#E5130A"
        ></vue-simple-spinner>
        <div class="item" v-for="item in students" v-show="!loading">
          <div class="detail d-flex align-items-stretch">
            <div class="image">
              <a :href="'students/detail/' + item.nid" :title="item.title">
                <img
                  class="rounded float-left"
                  v-if="item.images.length != 0"
                  v-bind:src="item.images"
                />
                <img class="rounded float-left" v-else src="/bkrw/img/bkrw-no-pic.png" />
              </a>
            </div>
            <div class="text">
              <div class="title">
                <a
                  :href="'students/detail/' + item.nid"
                  :title="item.title "
                >{{ item.title }}</a>
              </div>
              <div class="cuisine-area">
                <span
                  class="cuisine"
                  v-for="(cuisine, key) in item.cuisine"
                  v-text="item.cuisine.length != (key + 1) ? cuisine + ', ' : cuisine"
                ></span>
                &#8226;
                <span
                  class="area"
                  v-for="(area, key) in item.area"
                  v-text="item.area.length != (key + 1) ? area + ', ' : area"
                ></span>
              </div>
              <div class="box-tag" v-if="item.bkrw_tag.length != 0">
                <img class="icon" src="img/icon/stars.png" />
                <span
                  class="view"
                  v-for="(bkrw_tag, key) in item.bkrw_tag" :key="key"
                  v-text="item.bkrw_tag.length != (key + 1) ? bkrw_tag + '' : bkrw_tag"
                ></span>
              </div>
              <div class="link">
                <img class="icon" src="img/icon/note-add.png" />
                <span class="view">
                  <a :href="'students/detail/' + item.id" :title="item.title ">
                    <u>View Details</u>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="years">
            <div class="time d-flex align-items-stretch flex-wrap justify-content-left">
              <div class="slot" v-for="year in item.years" v-html="year"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: null,
      students: null,
      domain: null,
      empty_data: null
    };
  },
  mounted() {
    this.loading = true;
    this.empty_data = true;
    axios
      .get("../assets/authors.json")
      .then(response => {
        this.students = response.data;
        this.loading = false;
        if (response.data.length === 0) {
          this.empty_data = false;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
