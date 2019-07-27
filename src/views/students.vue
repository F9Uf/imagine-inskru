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
        <vue-simple-spinner
          v-show="loading"
          size="medium"
          message="Loading..."
          line-fg-color="#EEEEEE"
          line-bg-color="#E5130A"
        ></vue-simple-spinner>
        <div class="item" v-for="(item,index) in students" :key="index" v-show="!loading">
          <div class="detail d-flex align-items-stretch">
            <div class="image">
              <a :href="'students/detail/' + item.id" :title="item.name">
                <img
                  class="rounded float-left"
                  v-if="item.avatar_url.length != 0"
                  v-bind:src="item.avatar_url"
                />
                <img class="rounded float-left" v-else src="src/assets/bkrw-no-pic.png" />
              </a>
            </div>
            <div class="text">
              <div class="title">
                <a :href="'students/profile/' + item.id" :title="item.name ">{{ item.name }}</a>
              </div>
              <div class="home-area">
                <span
                  class="cuisine"
                  v-text="item.role"
                ></span>
                &#8226;
                <span class="area" v-text="item.place"></span>
              </div>
              <div class="box-tag" v-if="item.tag.length != 0">
                <img class="icon" src="img/icon/stars.png" />
                <span
                  class="view"
                  v-for="(tag, key) in item.tag"
                  :key="key"
                  v-text="item.tag.length != (key + 1) ? tag + '' : tag"
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
              <div class="slot" v-for="(year,index) in item.years" :key="index" v-html="year"></div>
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
